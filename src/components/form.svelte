<script>
  import { Button, Checkbox, DateTimePicker, Dropdown, Text } from "kintone-ui-component";
  import MentionTextarea from "./mentionTextArea.svelte";
  import { t } from "../i18n.js";

  // config: this app's plugin options; the choices below appear only when
  // its admins allow them.
  let { appId, recordId, config } = $props();

  const MAX_OPTIONS = 5;

  // KUC components keep their own value, so we read them back in
  // getFormData() instead of mirroring every change into $state.
  const titleField = new Text({
    label: t("form.titleLabel"),
    placeholder: t("form.titlePlaceholder"),
    requiredIcon: true,
  });

  const newOptionField = (number) =>
    new Text({ placeholder: t("form.optionPlaceholder", { number }) });

  let optionFields = $state.raw([newOptionField(1), newOptionField(2)]);

  const addOptionButton = new Button({ text: t("form.addOption"), type: "normal" });

  addOptionButton.addEventListener("click", () => {
    if (optionFields.length >= MAX_OPTIONS) return;
    optionFields = [...optionFields, newOptionField(optionFields.length + 1)];
    addOptionButton.visible = optionFields.length < MAX_OPTIONS;
  });

  const deadlineField = new DateTimePicker({
    label: t("form.deadlineLabel"),
    requiredIcon: true,
  });

  let mentions = $state([]);

  const namedVotesField = new Checkbox({
    items: [{ label: t("form.namedVotesItem"), value: "on" }],
  });

  const voteChangeField = new Checkbox({
    items: [{ label: t("form.voteChangeItem"), value: "on" }],
  });

  const addOptionsField = new Checkbox({
    items: [{ label: t("form.addOptionsItem"), value: "on" }],
  });

  const reminderField = new Dropdown({
    label: t("form.reminderLabel"),
    items: [
      { label: t("form.reminderNone"), value: "" },
      { label: t("form.reminder1d"), value: "1d" },
      { label: t("form.reminder6h"), value: "6h" },
      { label: t("form.reminder1h"), value: "1h" },
    ],
    value: "",
  });

  const isOn = (field) => (field.value ?? []).length > 0;

  export function getFormData() {
    return {
      title: titleField.value ?? "",
      options: optionFields.map((field) => field.value ?? ""),
      deadline: deadlineField.value ?? "",
      mentions: mentions.map(({ code, type }) => ({ code, type })),
      settings: {
        anonymous: !(config.allowNamedVotes && isOn(namedVotesField)),
        allowVoteChange: config.allowVoteChange && isOn(voteChangeField),
        allowAddOptions: config.allowAddOptions && isOn(addOptionsField),
        reminder: config.allowReminders ? (reminderField.value ?? "") : "",
      },
    };
  }

  const place = (element) => (node) => {
    node.appendChild(element);
  };
</script>

<div
  style="display:flex; flex-direction:column; gap:16px; min-width:400px; padding:24px;"
>
  <div {@attach place(titleField)}></div>

  <div>
    <div style="font-size:14px; margin-bottom:8px;">{t("form.optionsLabel")}</div>
    {#each optionFields as field (field)}
      <div style="margin-bottom:8px;" {@attach place(field)}></div>
    {/each}
    <div {@attach place(addOptionButton)}></div>
  </div>

  <div {@attach place(deadlineField)}></div>

  <MentionTextarea {appId} {recordId} bind:mentions />

  {#if config.allowNamedVotes || config.allowVoteChange || config.allowAddOptions}
    <div>
      {#if config.allowNamedVotes}<div {@attach place(namedVotesField)}></div>{/if}
      {#if config.allowVoteChange}<div {@attach place(voteChangeField)}></div>{/if}
      {#if config.allowAddOptions}<div {@attach place(addOptionsField)}></div>{/if}
    </div>
  {/if}

  {#if config.allowReminders}
    <div>
      <div {@attach place(reminderField)}></div>
      <div style="font-size:12px; color:#6b7775; margin-top:4px;">{t("form.reminderHelp")}</div>
    </div>
  {/if}
</div>
