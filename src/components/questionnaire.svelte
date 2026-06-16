<script>
  let { row } = $props();

  const title = row.title.value;

  const options = row.options.value
    .split(';;;')
    .filter(Boolean)
    .map((entry) => {
      const [letter, ...rest] = entry.split(':');
      return { letter: letter.toLowerCase(), label: rest.join(':') };
    });

  const votes = {};
  row.votes.value.split(',').filter(Boolean).forEach((entry) => {
    const [letter, count] = entry.split(':');
    votes[letter] = Number(count) || 0;
  });
</script>

<div class="itemlist-head-gaia">
  <div class="itemlist-user-gaia questionnaire-label">📊 アンケート</div>
</div>
<div class="commentlist-body-gaia questionnaire-body">
  <div class="questionnaire-title">{title}</div>
  {#each options as option}
    <div class="questionnaire-option">
      {option.label} — {votes[option.letter] || 0}票
    </div>
  {/each}
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
    margin-bottom: 6px;
  }
  .questionnaire-option {
    padding: 4px 0;
  }
</style>