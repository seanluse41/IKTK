<script>
  import { Button } from 'kintone-ui-component';
  import HelpIcon from './HelpIcon.svelte';
  import HelpText from './HelpText.svelte';
  import { place } from './place.js';
  import { domain, fail, provisioning, saveConfig, settings, ui } from '../../config/state.svelte.js';
  import { deleteServer } from '../../config/controlPlane.js';
  import { repositoryTokenPrompt } from '../../config/tokenPrompt.js';
  import { t } from '../../i18n.js';

  const deleteButton = new Button({ text: t('config.deleteServer'), type: 'alert' });

  const remove = async (repositoryToken) => {
    if (!repositoryToken) return;

    ui.busy = true;
    try {
      await deleteServer({ domain: domain.host, repositoryToken });
      settings.endpoint = '';
      settings.provisionId = '';
      await saveConfig();
      ui.notice = { text: t('config.serverDeleted'), type: 'success' };
    } catch (error) {
      fail(error, 'config.deleteServerError');
    } finally {
      ui.busy = false;
    }
  };

  // The token doubles as the confirmation: deleting takes the same proof as
  // provisioning, and asking for it is a deliberate extra step.
  deleteButton.addEventListener('click', () => {
    const { content, token } = repositoryTokenPrompt(t('config.deleteServerConfirm'));

    ui.dialog = {
      title: t('config.deleteServer'),
      content,
      header: t('config.confirmationRequired'),
      icon: 'warning',
      cancel: true,
      onconfirm: () => remove(token()),
    };
  });
</script>

<section>
  <h4>{t('config.deleteServer')} <HelpIcon text={t('config.deleteServerHelp')} /></h4>
  {#if settings.endpoint && provisioning.status !== 'pending'}
    <div {@attach place(deleteButton)}></div>
  {:else}
    <HelpText>{t('config.noServerToDelete')}</HelpText>
  {/if}
</section>

<style>
  h4 {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 8px;
    font-size: 15px;
  }
</style>
