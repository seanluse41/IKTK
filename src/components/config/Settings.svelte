<script>
  import { Checkbox } from 'kintone-ui-component';
  import HelpText from './HelpText.svelte';
  import { place } from './place.js';
  import { OPTIONS } from '../../config/pluginConfig.js';
  import { settings } from '../../config/state.svelte.js';
  import { t } from '../../i18n.js';

  // One checkbox per option, each with its own help text (config.<option>Label,
  // config.<option>Item, config.<option>Help).
  const fields = OPTIONS.map((option) => {
    const field = new Checkbox({
      label: t(`config.${option}Label`),
      items: [{ label: t(`config.${option}Item`), value: 'on' }],
      value: settings[option] ? ['on'] : [],
    });
    field.addEventListener('change', (event) => {
      settings[option] = event.detail.value.length > 0;
    });
    return { option, field };
  });
</script>

<div class="settings-group">
  {#each fields as { option, field } (option)}
    <div class="setting">
      <div {@attach place(field)}></div>
      <HelpText>{t(`config.${option}Help`)}</HelpText>
    </div>
  {/each}
</div>

<style>
  .settings-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .setting {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
</style>
