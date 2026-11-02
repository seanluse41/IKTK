<script>
  import { Button } from 'kintone-ui-component';
  import DangerZone from './components/config/DangerZone.svelte';
  import Dialog from './components/config/Dialog.svelte';
  import FieldGroup from './components/config/FieldGroup.svelte';
  import InitialSetup from './components/config/InitialSetup.svelte';
  import Notice from './components/config/Notice.svelte';
  import Settings from './components/config/Settings.svelte';
  import Spinner from './components/config/Spinner.svelte';
  import { place } from './components/config/place.js';
  import { verifyAppToken } from './config/appToken.js';
  import { setAppToken } from './config/pluginConfig.js';
  import { appId, fail, loadDomain, saveConfig, settings, ui, watchProvision } from './config/state.svelte.js';
  import { t } from './i18n.js';

  // Open on first visit, closed once this app is fully set up.
  const setupDone = Boolean(settings.endpoint && settings.appToken);

  const cancelButton = new Button({ text: t('config.cancelButton'), type: 'normal' });
  const saveButton = new Button({ text: t('config.saveButton'), type: 'submit' });

  cancelButton.addEventListener('click', () => {
    window.location.href = `../../${appId}/plugin/`;
  });

  const save = async () => {
    if (!settings.repoAppId.trim()) {
      ui.dialog = { title: t('config.errorLabel'), content: t('config.repositoryAppIdRequired'), icon: 'error' };
      return;
    }

    ui.busy = true;
    try {
      const appToken = settings.appToken.trim();
      if (appToken) {
        if (!settings.endpoint) throw new Error(t('config.completeStep3First'));
        // Caught here, not later by every user who opens a record.
        await verifyAppToken(appToken);
        await setAppToken(settings.endpoint, appToken);
      }

      await saveConfig();

      ui.dialog = {
        title: t('config.successLabel'),
        content: t('config.saveSuccess'),
        icon: 'success',
        onclose: () => {
          window.location.href = `../../flow?app=${appId}`;
        },
      };
    } catch (error) {
      fail(error, 'config.saveError');
    } finally {
      ui.busy = false;
    }
  };

  saveButton.addEventListener('click', save);

  loadDomain();
  watchProvision();
</script>

<h2>{t('config.heading')}</h2>
<p>{t('config.subtitle')}</p>

<div class="groups">
  <FieldGroup label={t('config.settingsSection')} expanded>
    <Settings />
  </FieldGroup>

  <FieldGroup label={t('config.initialSetupSection')} expanded={!setupDone}>
    <InitialSetup />
  </FieldGroup>

  <FieldGroup label={t('config.dangerZoneSection')} danger>
    <DangerZone />
  </FieldGroup>
</div>

<div class="submit" {@attach place(cancelButton, saveButton)}></div>

<Dialog bind:dialog={ui.dialog} />
<Notice bind:notice={ui.notice} />
<Spinner open={ui.busy} />

<style>
  /* The token prompt (config/tokenPrompt.js) is built in JS and shown in a
     KUC Dialog, outside every component. */
  :global(.repository-token-help) {
    color: #6b7775;
    margin: 4px 0 0;
  }

  :global(.settings) {
    max-width: 720px;
    padding: 16px;
    font-size: 14px;
    line-height: 1.6;
  }

  .groups {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
  }

  .submit {
    display: flex;
    gap: 8px;
    margin-top: 24px;
    border-top: 1px solid #e3e7e8;
    padding-top: 16px;
  }
</style>
