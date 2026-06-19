<script>
  import Text from "../builders/desktop/text.svelte";
  import DateTimePicker from "../builders/desktop/datetimepicker.svelte";
  import MentionTextarea from "./mentionTextArea.svelte";
  import { t } from "../t.js";

  let { appId, recordId } = $props();

  const MAX_OPTIONS = 5;

  let title = $state("");
  let options = $state(["", ""]);
  let deadline = $state("");
  let mentions = $state([]);

  function addOption() {
    if (options.length >= MAX_OPTIONS) return;
    options = [...options, ""];
  }

  function updateOption(index, value) {
    options = options.map((o, i) => (i === index ? value : o));
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

<div
  style="display:flex; flex-direction:column; gap:16px; min-width:400px; padding:24px;"
>
  <Text
    label={t('form.titleLabel')}
    value={title}
    placeholder={t('form.titlePlaceholder')}
    requiredIcon={true}
    onchange={(e) => (title = e.detail.value)}
  />

  <div>
    <div style="font-size:14px; margin-bottom:8px;">{t('form.optionsLabel')}</div>
    {#each options as option, i}
      <div style="margin-bottom:8px;">
        <Text
          value={option}
          placeholder={t('form.optionPlaceholder', { number: i + 1 })}
          onchange={(e) => updateOption(i, e.detail.value)}
        />
      </div>
    {/each}
    {#if options.length < MAX_OPTIONS}
      <button onclick={addOption} style="cursor:pointer;"
        >{t('form.addOption')}</button
      >
    {/if}
  </div>

  <DateTimePicker
    label={t('form.deadlineLabel')}
    requiredIcon={true}
    onchange={(e) => {
      console.log("DateTimePicker onchange detail:", e.detail);
      console.log("DateTimePicker value:", e.detail.value);
      console.log("typeof value:", typeof e.detail.value);
      deadline = e.detail.value;
    }}
  />

  <MentionTextarea {appId} {recordId} bind:mentions />
</div>