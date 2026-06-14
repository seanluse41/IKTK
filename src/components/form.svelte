<script>
  import { onMount } from 'svelte';
  import Text from '../builders/desktop/text.svelte';
  import DateTimePicker from '../builders/desktop/datetimepicker.svelte';
  import MentionTextarea from './mentionTextArea.svelte';

  let { appId, recordId } = $props();

  const MAX_OPTIONS = 5;

  let title = $state('');
  let options = $state(['', '']);
  let deadline = $state('');
  let mentions = $state([]);

  function addOption() {
    if (options.length >= MAX_OPTIONS) return;
    options = [...options, ''];
  }

  function updateOption(index, value) {
    options = options.map((o, i) => i === index ? value : o);
  }

  export function getFormData() {
    return {
      title,
      options,
      deadline,
      mentions: mentions.map(({ code, type }) => ({ code, type })),
    };
  }
</script>

<div style="display:flex; flex-direction:column; gap:16px; min-width:400px; padding:24px;">

  <Text
    label="タイトル"
    value={title}
    placeholder="質問を入力してください"
    requiredIcon={true}
    onchange={(e) => title = e.detail.value}
  />

  <div>
    <div style="font-size:14px; margin-bottom:8px;">選択肢</div>
    {#each options as option, i}
      <div style="margin-bottom:8px;">
        <Text
          value={option}
          placeholder={`選択肢 ${i + 1}`}
          onchange={(e) => updateOption(i, e.detail.value)}
        />
      </div>
    {/each}
    {#if options.length < MAX_OPTIONS}
      <button onclick={addOption} style="cursor:pointer;">＋ 選択肢を追加</button>
    {/if}
  </div>

  <DateTimePicker
    label="締め切り"
    requiredIcon={true}
    onchange={(e) => deadline = e.detail.value}
  />

  <MentionTextarea {appId} {recordId} bind:mentions />

</div>