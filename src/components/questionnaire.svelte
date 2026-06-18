<!-- src/components/questionnaire.svelte -->
<script>
  import { submitVote } from '../services/submitVote.js';

  let { row, isCreator, hasVoted: hasVotedInitial, repositoryRecord, loginUser, repoAppId } = $props();

  let castVote = $state(false);
  let selectedLetter = $state(null);
  let isSubmitting = $state(false);
  let errorMessage = $state('');

  let hasVoted = $derived(hasVotedInitial || castVote);

  let title = $derived(row.title.value);

  let options = $derived(
    row.options.value
      .split(';;;')
      .filter(Boolean)
      .map((entry) => {
        const [letter, ...rest] = entry.split(':');
        return { letter: letter.toLowerCase(), label: rest.join(':') };
      })
  );

  // Local copy so we can bump the count instantly after a successful vote
  // without waiting on a parent re-render / refetch.
  let localVotesValue = $state(row.votes.value);

  let votes = $derived(
    Object.fromEntries(
      localVotesValue.split(',').filter(Boolean).map((entry) => {
        const [letter, count] = entry.split(':');
        return [letter, Number(count) || 0];
      })
    )
  );

  let totalVotes = $derived(Object.values(votes).reduce((sum, v) => sum + v, 0));

  async function handleVoteClick() {
    if (!selectedLetter || isSubmitting) return;

    const now = new Date();
    const endTime = new Date(row.endTime.value);
    if (now > endTime) {
      errorMessage = 'このアンケートは終了しました';
      return;
    }

    errorMessage = '';
    isSubmitting = true;

    try {
      const updatedVotesValue = await submitVote({
        repositoryRecord,
        row,
        letter: selectedLetter,
        loginUser,
        repoAppId,
      });
      localVotesValue = updatedVotesValue;
      castVote = true;
    } catch (error) {
      console.error('Failed to submit vote:', error);
      errorMessage = '投票に失敗しました。もう一度お試しください';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<div class="itemlist-head-gaia">
  <div class="itemlist-user-gaia questionnaire-label">📊 アンケート</div>
</div>
<div class="commentlist-body-gaia questionnaire-body">
  <div class="questionnaire-title">{title}</div>

  {#if hasVoted}
    {#each options as option}
      {@const count = votes[option.letter] || 0}
      {@const percent = totalVotes === 0 ? 0 : Math.round((count / totalVotes) * 100)}
      <div class="questionnaire-result-row">
        <div class="questionnaire-result-label">
          <span>{option.label}</span>
          <span>{count}票 ({percent}%)</span>
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
          name="vote-{row.commentID.value}"
          value={option.letter}
          bind:group={selectedLetter}
        />
        {option.label}
      </label>
    {/each}
    {#if errorMessage}
      <div class="questionnaire-error">{errorMessage}</div>
    {/if}
    <button
      class="questionnaire-vote-button"
      disabled={!selectedLetter || isSubmitting}
      onclick={handleVoteClick}
    >
      {isSubmitting ? '送信中...' : '投票する'}
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