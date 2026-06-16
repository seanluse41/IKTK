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

<li class="itemlist-item-gaia questionnaire-item">
  <div class="questionnaire-box">
    <div class="questionnaire-title">{title}</div>
    {#each options as option}
      <div class="questionnaire-option">
        {option.label} — {votes[option.letter] || 0}票
      </div>
    {/each}
  </div>
</li>

<style>
  .questionnaire-item {
    list-style: none;
    padding: 8px 16px;
  }
  .questionnaire-box {
    border: 1px solid #e3e7e8;
    border-radius: 6px;
    padding: 10px 14px;
    background: #fafbfb;
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