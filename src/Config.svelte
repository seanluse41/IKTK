<script>
  import Button from './builders/desktop/button.svelte';
  import Text from './builders/desktop/text.svelte';
  import Checkbox from './builders/desktop/checkbox.svelte';
  import Notification from './builders/desktop/notification.svelte';
  import { createRepositoryApp } from './services/createRepositoryApp.js';
  import { t } from './t.js';

  let { pluginId } = $props();

  let config = $state({
    repoAppId: '',
    allowNonAdminPoll: false,
  });

  let repoToken = $state('');

  const savedConfig = kintone.plugin.app.getConfig(pluginId);
  if (savedConfig.repoAppId) {
    config.repoAppId = savedConfig.repoAppId;
  }
  config.allowNonAdminPoll = savedConfig.allowNonAdminPoll === 'true';
  if (savedConfig.repoToken) {
    repoToken = savedConfig.repoToken;
  }

  let successNotification;
  let errorNotification;

  let successText = $state('');
  let errorText = $state('');

  let repoAppIdError = $state('');
  let isCreatingApp = $state(false);

  function showSuccess(message) {
    successText = message;
    successNotification.open();
  }

  function showError(message) {
    errorText = message;
    errorNotification.open();
  }

  async function handleCreateRepository() {
    const confirmed = confirm(t('config.createRepositoryConfirm'));
    if (!confirmed) return;

    isCreatingApp = true;

    try {
      const newAppId = await createRepositoryApp();
      config.repoAppId = String(newAppId);
      repoAppIdError = '';

      if (repoToken) {
        repoToken = '';
      }

      showSuccess(t('config.createRepositorySuccess', { appId: newAppId }));
    } catch (error) {
      console.error('Failed to create repository app:', error);
      showError(t('config.createRepositoryError'));
    } finally {
      isCreatingApp = false;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!config.repoAppId.trim()) {
      repoAppIdError = t('config.repositoryAppIdRequired');
      showError(t('config.repositoryAppIdRequired'));
      return;
    }
    repoAppIdError = '';

    kintone.plugin.app.setConfig({
      repoToken,
      repoAppId: config.repoAppId,
      allowNonAdminPoll: String(config.allowNonAdminPoll),
    }, () => {
      showSuccess(t('config.saveSuccess'));
      setTimeout(() => {
        window.location.href = '../../flow?app=' + kintone.app.getId();
      }, 2000);
    });
  }

  function handleCancel() {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  }

  function handleRepoAppIdChange(e) {
    config.repoAppId = e.detail.value;
    if (repoAppIdError) {
      repoAppIdError = '';
    }
  }

  function handleRepoTokenChange(e) {
    repoToken = e.detail.value;
  }

  function handleAllowNonAdminPollChange(e) {
    config.allowNonAdminPoll = e.detail.value.length > 0;
  }
</script>

<div class="config-container">
  <h1>{t('config.heading')}</h1>
  <p class="subtitle">{t('config.subtitle')}</p>

  <form onsubmit={handleSubmit}>
    <div class="section">
      <h2>{t('config.repositoryAppSection')}</h2>

      <Text
        label={t('config.repositoryAppIdLabel')}
        value={config.repoAppId}
        placeholder={t('config.repositoryAppIdPlaceholder')}
        requiredIcon={true}
        error={repoAppIdError}
        onchange={handleRepoAppIdChange}
      />

      <div class="button-group">
        <Button
          text={isCreatingApp ? t('config.creatingRepositoryButton') : t('config.createRepositoryButton')}
          type="normal"
          disabled={isCreatingApp}
          onclick={handleCreateRepository}
        />
      </div>

      <p class="info-text">
        {t('config.createRepositoryInfo')}
      </p>

      <Text
        label={t('config.repositoryTokenLabel')}
        value={repoToken}
        placeholder={t('config.repositoryTokenPlaceholder')}
        onchange={handleRepoTokenChange}
      />
      <p class="info-text">
        {t('config.repositoryTokenInfo')}
      </p>
    </div>

    <div class="section">
      <h2>{t('config.optionsSection')}</h2>

      <div class="checkbox-container">
        <Checkbox
          label={t('config.allowNonAdminPollLabel')}
          items={[{ label: t('config.allowNonAdminPollItem'), value: 'allowNonAdminPoll' }]}
          value={config.allowNonAdminPoll ? ['allowNonAdminPoll'] : []}
          onchange={handleAllowNonAdminPollChange}
        />
      </div>
    </div>

    <div class="form-actions">
      <Button
        text={t('config.saveButton')}
        type="submit"
        onclick={handleSubmit}
      />

      <Button
        text={t('config.cancelButton')}
        type="normal"
        onclick={handleCancel}
      />
    </div>
  </form>
</div>

<Notification
  bind:this={successNotification}
  text={successText}
  type="success"
  duration={2000}
/>

<Notification
  bind:this={errorNotification}
  text={errorText}
  type="danger"
  duration={2000}
/>

<style>
  .config-container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 4px;
  }

  .subtitle {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 13px;
    color: #666;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 15px;
    margin-top: 0;
  }

  .section {
    margin-bottom: 30px;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 4px;
  }

  .button-group {
    display: flex;
    gap: 10px;
    margin-top: 15px;
  }

  .checkbox-container {
    margin-bottom: 15px;
  }

  .form-actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }

  .info-text {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
  }
</style>