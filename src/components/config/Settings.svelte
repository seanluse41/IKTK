<script>
  import { Checkbox } from 'kintone-ui-component';
  import HelpText from './HelpText.svelte';
  import { place } from './place.js';
  import { settings } from '../../config/state.svelte.js';
  import { t } from '../../i18n.js';

  const allowNonAdminPoll = new Checkbox({
    label: t('config.allowNonAdminPollLabel'),
    items: [{ label: t('config.allowNonAdminPollItem'), value: 'allow' }],
    value: settings.allowNonAdminPoll ? ['allow'] : [],
  });

  allowNonAdminPoll.addEventListener('change', (event) => {
    settings.allowNonAdminPoll = event.detail.value.length > 0;
  });
</script>

<div class="settings-group">
  <div {@attach place(allowNonAdminPoll)}></div>
  <HelpText>{t('config.allowNonAdminPollHelp')}</HelpText>
</div>

<style>
  .settings-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
</style>
