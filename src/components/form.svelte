<script>
  import { Button, DateTimePicker, Text } from "kintone-ui-component";
  import MentionTextarea from "./mentionTextArea.svelte";
  import { t } from "../i18n.js";

  let { appId, recordId } = $props();

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

  export function getFormData() {
    return {
      title: titleField.value ?? "",
      options: optionFields.map((field) => field.value ?? ""),
      deadline: deadlineField.value ?? "",
      mentions: mentions.map(({ code, type }) => ({ code, type })),
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
</div>
