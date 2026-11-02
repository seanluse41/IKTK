<script>
  import { Button, Checkbox, Notification, Text } from 'kintone-ui-component';
  import { createRepositoryApp } from './services/createRepositoryApp.js';
  import { t } from './i18n.js';

  let { pluginId } = $props();

  const savedConfig = kintone.plugin.app.getConfig(pluginId);

  const repoAppIdField = new Text({
    label: t('config.repositoryAppIdLabel'),
    value: savedConfig.repoAppId || '',
    placeholder: t('config.repositoryAppIdPlaceholder'),
    requiredIcon: true,
  });

  const repoTokenField = new Text({
    label: t('config.repositoryTokenLabel'),
    value: savedConfig.repoToken || '',
    placeholder: t('config.repositoryTokenPlaceholder'),
  });

  const allowNonAdminPollField = new Checkbox({
    label: t('config.allowNonAdminPollLabel'),
    items: [{ label: t('config.allowNonAdminPollItem'), value: 'allowNonAdminPoll' }],
    value: savedConfig.allowNonAdminPoll === 'true' ? ['allowNonAdminPoll'] : [],
  });

  const createRepositoryButton = new Button({ text: t('config.createRepositoryButton'), type: 'normal' });
  const saveButton = new Button({ text: t('config.saveButton'), type: 'submit' });
  const cancelButton = new Button({ text: t('config.cancelButton'), type: 'normal' });

  const notification = new Notification({ duration: 2000 });

  function notify(type, text) {
    notification.type = type;
    notification.text = text;
    notification.open();
  }

  repoAppIdField.addEventListener('change', () => {
    repoAppIdField.error = '';
  });

  createRepositoryButton.addEventListener('click', async () => {
    if (!confirm(t('config.createRepositoryConfirm'))) return;

    createRepositoryButton.disabled = true;
    createRepositoryButton.text = t('config.creatingRepositoryButton');

    try {
      const newAppId = await createRepositoryApp();
      repoAppIdField.value = String(newAppId);
      repoAppIdField.error = '';
      // A token for the old repository app won't work against the new one
      repoTokenField.value = '';

      notify('success', t('config.createRepositorySuccess', { appId: newAppId }));
    } catch (error) {
      console.error('Failed to create repository app:', error);
      notify('danger', t('config.createRepositoryError'));
    } finally {
      createRepositoryButton.disabled = false;
      createRepositoryButton.text = t('config.createRepositoryButton');
    }
  });

  saveButton.addEventListener('click', () => {
    const repoAppId = repoAppIdField.value.trim();

    if (!repoAppId) {
      repoAppIdField.error = t('config.repositoryAppIdRequired');
      notify('danger', t('config.repositoryAppIdRequired'));
      return;
    }

    kintone.plugin.app.setConfig({
      repoToken: repoTokenField.value.trim(),
      repoAppId,
      allowNonAdminPoll: String(allowNonAdminPollField.value.length > 0),
    }, () => {
      notify('success', t('config.saveSuccess'));
      setTimeout(() => {
        window.location.href = '../../flow?app=' + kintone.app.getId();
      }, 2000);
    });
  });

  cancelButton.addEventListener('click', () => {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  });

  const place = (...elements) => (node) => {
    node.append(...elements);
  };

  // Notification appends itself to document.body on open(), outside this
  // component, so it has to be removed by hand. See the KUC section of the README.
  const removeNotification = () => () => notification.remove();
</script>

<div class="config-container" {@attach removeNotification}>
  <h1>{t('config.heading')}</h1>
  <p class="subtitle">{t('config.subtitle')}</p>

  <div class="section">
    <h2>{t('config.repositoryAppSection')}</h2>

    <div {@attach place(repoAppIdField)}></div>

    <div class="button-group" {@attach place(createRepositoryButton)}></div>

    <p class="info-text">
      {t('config.createRepositoryInfo')}
    </p>

    <div {@attach place(repoTokenField)}></div>
    <p class="info-text">
      {t('config.repositoryTokenInfo')}
    </p>
  </div>

  <div class="section">
    <h2>{t('config.optionsSection')}</h2>

    <div class="checkbox-container" {@attach place(allowNonAdminPollField)}></div>
  </div>

  <div class="form-actions" {@attach place(saveButton, cancelButton)}></div>
</div>

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
