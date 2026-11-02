<!-- src/components/questionnaire.svelte -->
<script>
  import { untrack } from "svelte";
  import { errorMessage, votePoll } from "../services/iktkApi.js";
  import { t } from "../i18n.js";

  // poll: { commentID, title, options, votes, endTime, isEnded, hasVoted },
  // as the server returned it for this user.
  let { poll, appId, recordId, loginUser, onPollChange } = $props();

  // Snapshots: this component is remounted whenever Kintone re-renders the
  // comments, so it only needs the poll as it was when mounted.
  const initial = untrack(() => poll);
  const { commentID, title, options, endTime, isEnded } = initial;

  let hasVoted = $state(initial.hasVoted);
  let selectedLetter = $state(null);
  let isSubmitting = $state(false);
  let errorMessageText = $state("");

  // Bumped from the server's answer after a vote, without a refetch.
  let votes = $state(initial.votes);

  let totalVotes = $derived(
    Object.values(votes).reduce((sum, v) => sum + v, 0),
  );

  async function handleVoteClick() {
    if (!selectedLetter || isSubmitting) return;

    if (new Date() > new Date(endTime)) {
      errorMessageText = t('questionnaire.votingClosedError');
      return;
    }

    errorMessageText = "";
    isSubmitting = true;

    try {
      const { poll: updated } = await votePoll({
        appId,
        recordId,
        commentID,
        letter: selectedLetter,
        userCode: loginUser.code,
      });
      votes = updated.votes;
      hasVoted = true;
      onPollChange(updated);
    } catch (error) {
      console.error("Failed to submit vote:", error);
      errorMessageText = error.code === 'poll_closed' || error.code === 'unauthorized'
        ? errorMessage(error)
        : t('questionnaire.voteSubmitError');
    } finally {
      isSubmitting = false;
    }
  }
</script>

<div class="itemlist-head-gaia">
  <div class="itemlist-user-gaia questionnaire-label">📊 {t('questionnaire.badge')}</div>
</div>
<div class="commentlist-body-gaia questionnaire-body">
  <div class="questionnaire-title">{title}</div>

  {#if hasVoted || isEnded}
    {#each options as option}
      {@const count = votes[option.letter] || 0}
      {@const percent =
        totalVotes === 0 ? 0 : Math.round((count / totalVotes) * 100)}
      <div class="questionnaire-result-row">
        <div class="questionnaire-result-label">
          <span>{option.label}</span>
          <span>{t('questionnaire.votesCount', { count, percent })}</span>
        </div>
        <div class="questionnaire-bar-track">
          <div class="questionnaire-bar-fill" style="width: {percent}%;"></div>
        </div>
      </div>
    {/each}
  {:else}
    {#each options as option}
      <label class="questionnaire-option-row">
        <input
          type="radio"
          name="vote-{commentID}"
          value={option.letter}
          bind:group={selectedLetter}
        />
        {option.label}
      </label>
    {/each}
    {#if errorMessageText}
      <div class="questionnaire-error">{errorMessageText}</div>
    {/if}
    <button
      class="questionnaire-vote-button"
      disabled={!selectedLetter || isSubmitting}
      onclick={handleVoteClick}
    >
      {isSubmitting ? t('questionnaire.votingButton') : t('questionnaire.voteButton')}
    </button>
  {/if}
</div>

<style>
  .questionnaire-label {
    font-weight: 600;
  }
  .questionnaire-body {
    font-size: 13px;
  }
  .questionnaire-title {
    font-weight: 600;
    margin-bottom: 10px;
  }
  .questionnaire-option-row {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 0;
    cursor: pointer;
  }
  .questionnaire-vote-button {
    margin-top: 8px;
    padding: 6px 16px;
    cursor: pointer;
  }
  .questionnaire-vote-button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .questionnaire-error {
    color: #c0392b;
    font-size: 12px;
    margin-top: 6px;
  }
  .questionnaire-result-row {
    margin-bottom: 8px;
  }
  .questionnaire-result-label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  }
  .questionnaire-bar-track {
    background: #eee;
    border-radius: 4px;
    height: 8px;
    overflow: hidden;
  }
  .questionnaire-bar-fill {
    background: #3498db;
    height: 100%;
    transition: width 0.3s ease;
  }
</style>