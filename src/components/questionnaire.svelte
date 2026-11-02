<!-- src/components/questionnaire.svelte -->
<script>
  import { untrack } from "svelte";
  import { Tooltip } from "kintone-ui-component";
  import { addPollOption, errorMessage, votePoll } from "../services/iktkApi.js";
  import { t } from "../i18n.js";

  // poll: as the server returned it for this user (see iktk-server's README),
  // or, for an ended poll, as read back from its results comment (see
  // services/pollComments.js), which has no voting fields.
  let { poll, appId, recordId, loginUser, onPollChange } = $props();

  // A participant can add up to this many options in all (the server's cap).
  const MAX_TOTAL_OPTIONS = 10;

  // This component is remounted whenever Kintone re-renders the comments, so
  // it starts from the poll as it was when mounted, then follows the server's
  // answers to this user's votes and added options.
  let current = $state(untrack(() => poll));

  const commentID = untrack(() => poll.commentID);
  let isEnded = $derived(current.isEnded || new Date() > new Date(current.endTime));
  let named = $derived(current.anonymous === false);

  let changing = $state(false);
  let showForm = $derived(!isEnded && (!current.hasVoted || changing));

  let selectedLetter = $state(null);
  let isSubmitting = $state(false);
  let errorMessageText = $state("");
  let newOption = $state("");

  let totalVotes = $derived(
    Object.values(current.votes).reduce((sum, v) => sum + v, 0),
  );

  const failed = (error, fallback) => {
    console.error(error);
    errorMessageText = ["poll_closed", "unauthorized"].includes(error.code)
      ? errorMessage(error)
      : t(fallback);
  };

  const update = (updated) => {
    current = updated;
    onPollChange(updated);
  };

  async function handleVoteClick() {
    if (!selectedLetter || isSubmitting) return;

    if (isEnded) {
      errorMessageText = t("questionnaire.votingClosedError");
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
        userName: loginUser.name,
      });
      update(updated);
      changing = false;
    } catch (error) {
      failed(error, "questionnaire.voteSubmitError");
    } finally {
      isSubmitting = false;
    }
  }

  function handleChangeClick() {
    // A named poll knows this user's choice; an anonymous one never says.
    selectedLetter = current.myVote ?? null;
    changing = true;
  }

  async function handleAddOption() {
    const label = newOption.trim();
    if (!label || isSubmitting) return;

    errorMessageText = "";
    isSubmitting = true;

    try {
      const { poll: updated } = await addPollOption({
        appId,
        recordId,
        commentID,
        label,
        userCode: loginUser.code,
      });
      update(updated);
      newOption = "";
    } catch (error) {
      failed(error, "questionnaire.addOptionError");
    } finally {
      isSubmitting = false;
    }
  }

  // Who chose an option, on hover, for named polls. KUC's Tooltip wraps the
  // element it describes, so it's rebuilt (via #key) whenever the names change.
  const voterTooltip = (names) => (node) => {
    const tooltip = new Tooltip({
      title: names,
      container: node.firstElementChild,
      placement: "top",
      className: "questionnaire-tooltip",
    });
    node.appendChild(tooltip);
    return () => tooltip.remove();
  };
</script>

<div class="itemlist-head-gaia">
  <div class="itemlist-user-gaia questionnaire-label">
    📊 {t("questionnaire.badge")}
    {#if !named && current.anonymous !== undefined}
      <span class="questionnaire-anonymous">{t("questionnaire.anonymousBadge")}</span>
    {/if}
  </div>
</div>
<div class="commentlist-body-gaia questionnaire-body">
  <div class="questionnaire-title">{current.title}</div>

  {#if !showForm}
    {#each current.options as option (option.letter)}
      {@const count = current.votes[option.letter] || 0}
      {@const percent =
        totalVotes === 0 ? 0 : Math.round((count / totalVotes) * 100)}
      {@const names = named ? (current.voters?.[option.letter] ?? []).join(", ") : ""}
      <div class="questionnaire-result-row">
        {#key names}
          <div class="questionnaire-result-hover" {@attach names ? voterTooltip(names) : null}>
            <div>
              <div class="questionnaire-result-label">
                <span>{option.label}</span>
                <span>{t("questionnaire.votesCount", { count, percent })}</span>
              </div>
              <div class="questionnaire-bar-track">
                <div class="questionnaire-bar-fill" style="width: {percent}%;"></div>
              </div>
            </div>
          </div>
        {/key}
      </div>
    {/each}
    {#if !isEnded && current.allowVoteChange}
      <button class="questionnaire-link-button" onclick={handleChangeClick}>
        {t("questionnaire.changeVote")}
      </button>
    {/if}
  {:else}
    {#each current.options as option (option.letter)}
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
    <button
      class="questionnaire-vote-button"
      disabled={!selectedLetter || isSubmitting}
      onclick={handleVoteClick}
    >
      {isSubmitting ? t("questionnaire.votingButton") : t("questionnaire.voteButton")}
    </button>
  {/if}

  {#if !isEnded && current.allowAddOptions && current.options.length < MAX_TOTAL_OPTIONS}
    <div class="questionnaire-add-option">
      <input
        type="text"
        maxlength="200"
        placeholder={t("questionnaire.addOptionPlaceholder")}
        bind:value={newOption}
        onkeydown={(e) => e.key === "Enter" && handleAddOption()}
      />
      <button disabled={!newOption.trim() || isSubmitting} onclick={handleAddOption}>
        {t("questionnaire.addOptionButton")}
      </button>
    </div>
  {/if}

  {#if errorMessageText}
    <div class="questionnaire-error">{errorMessageText}</div>
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
  .questionnaire-anonymous {
    margin-left: 6px;
    padding: 1px 6px;
    border-radius: 8px;
    background: #f0f4f5;
    color: #6b7775;
    font-size: 11px;
    font-weight: normal;
  }
  /* The tooltip wraps the whole row, so it and its inline-block wrappers
     (versioned class names, hence the attribute match) have to be as wide
     as one. */
  :global(.questionnaire-tooltip),
  :global(.questionnaire-tooltip div[class*="__group--"]),
  :global(.questionnaire-tooltip div[class$="__group__container"]) {
    display: block;
    width: 100%;
  }
  .questionnaire-link-button {
    margin-top: 4px;
    padding: 0;
    border: none;
    background: none;
    color: #3498db;
    cursor: pointer;
    font-size: 12px;
  }
  .questionnaire-add-option {
    display: flex;
    gap: 6px;
    margin-top: 10px;
  }
  .questionnaire-add-option input {
    flex: 1;
    min-width: 0;
    padding: 4px 6px;
    font-size: 12px;
  }
  .questionnaire-add-option button {
    padding: 4px 10px;
    cursor: pointer;
  }
  .questionnaire-add-option button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .questionnaire-bar-fill {
    background: #3498db;
    height: 100%;
    transition: width 0.3s ease;
  }
</style>