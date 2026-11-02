<script>
  import { Button, Text } from 'kintone-ui-component';
  import HelpText from './HelpText.svelte';
  import Step from './Step.svelte';
  import TokenLink from './TokenLink.svelte';
  import { place } from './place.js';
  import {
    appId,
    domain,
    fail,
    provisioning,
    saveConfig,
    settings,
    ui,
    watchProvision,
  } from '../../config/state.svelte.js';
  import { EGRESS_IPS } from '../../config/constants.js';
  import { startProvision } from '../../config/controlPlane.js';
  import { repositoryTokenUrl, thisAppTokenUrl } from '../../config/kintoneUrls.js';
  import { repositoryTokenPrompt } from '../../config/tokenPrompt.js';
  import { createRepositoryApp } from '../../services/createRepositoryApp.js';
  import { t } from '../../i18n.js';

  const repoAppId = $derived(settings.repoAppId.trim());

  // Step 1: the repository app

  const createRepositoryButton = new Button({ text: t('config.createRepositoryButton'), type: 'normal' });
  const repoAppIdField = new Text({ label: t('config.repositoryAppIdLabel'), value: settings.repoAppId });

  repoAppIdField.addEventListener('input', (event) => {
    settings.repoAppId = event.detail.value ?? '';
  });

  // Also filled in from outside: creating the app, or the domain lookup.
  $effect(() => {
    if (repoAppIdField.value !== settings.repoAppId) repoAppIdField.value = settings.repoAppId;
  });

  // A domain with a server already has its repository app, and the control
  // plane won't move the server to another one.
  $effect(() => {
    createRepositoryButton.disabled = Boolean(settings.endpoint);
  });

  const nextSteps = (newAppId) => {
    const content = document.createElement('div');

    const created = document.createElement('p');
    created.textContent = t('config.createRepositorySuccess', { appId: newAppId });

    const next = document.createElement('p');
    next.textContent = t('config.repositoryTokenInstructions');

    const link = document.createElement('a');
    link.href = repositoryTokenUrl(newAppId);
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = t('config.openRepositoryTokenSettings');

    content.append(created, next, link);
    return content;
  };

  const createRepository = async () => {
    ui.busy = true;
    try {
      const newAppId = await createRepositoryApp();
      settings.repoAppId = newAppId;
      await saveConfig();

      ui.dialog = {
        title: t('config.createRepositoryTitle'),
        content: nextSteps(newAppId),
        header: t('config.successLabel'),
        icon: 'success',
      };
    } catch (error) {
      fail(error, 'config.createRepositoryError');
    } finally {
      ui.busy = false;
    }
  };

  createRepositoryButton.addEventListener('click', () => {
    ui.dialog = {
      title: t('config.createRepositoryConfirmTitle'),
      content: t('config.createRepositoryConfirm'),
      header: t('config.confirmationRequired'),
      icon: 'info',
      cancel: true,
      onconfirm: createRepository,
    };
  });

  // Step 3: the server

  const provisionButton = new Button({ type: 'normal' });

  $effect(() => {
    provisionButton.text = settings.endpoint ? t('config.reprovisionServer') : t('config.provisionServer');
  });

  const provisionServer = async (repositoryToken) => {
    if (!repositoryToken) return;

    ui.busy = true;
    try {
      const result = await startProvision({
        domain: domain.host,
        repositoryAppId: repoAppId,
        repositoryToken,
      });
      provisioning.status = '';

      if (result.status === 'ready') {
        // Already set up: the token was rotated and the endpoint came back.
        settings.endpoint = result.endpoint;
        settings.provisionId = '';
        await saveConfig();
        ui.notice = { text: t('config.serverProvisioned'), type: 'success' };
      } else {
        settings.provisionId = result.provisionId;
        await saveConfig();
        watchProvision();
      }
    } catch (error) {
      // An IP-restricted domain refuses the server's token check, which
      // looks the same as a wrong token, so the error names both.
      fail(error, 'config.provisionError', { ips: EGRESS_IPS.join(', ') });
    } finally {
      ui.busy = false;
    }
  };

  provisionButton.addEventListener('click', () => {
    if (!repoAppId) {
      ui.dialog = { title: t('config.errorLabel'), content: t('config.completeStep1First'), icon: 'error' };
      return;
    }

    const { content, token } = repositoryTokenPrompt(t('config.repositoryTokenHelp'));
    ui.dialog = {
      title: settings.endpoint ? t('config.reprovisionServer') : t('config.provisionServer'),
      content,
      header: t('config.repositoryToken'),
      cancel: true,
      onconfirm: () => provisionServer(token()),
    };
  });

  // Step 4: this app's token

  const appTokenField = new Text({ label: t('config.appTokenLabel'), value: settings.appToken });

  appTokenField.addEventListener('input', (event) => {
    settings.appToken = event.detail.value ?? '';
  });
</script>

<div class="initial-setup">
  <Step number={1} title={t('config.step1Title')} help={t('config.step1Help')}>
    <div {@attach place(createRepositoryButton)}></div>
    <div {@attach place(repoAppIdField)}></div>
  </Step>

  <Step number={2} title={t('config.step2Title')} help={t('config.step2Help')}>
    {#if repoAppId}
      <p class="text">{t('config.repositoryTokenInstructions')}</p>
      <TokenLink href={repositoryTokenUrl(repoAppId)} text={t('config.openRepositoryTokenSettings')} />
    {:else}
      <HelpText>{t('config.completeStep1First')}</HelpText>
    {/if}
  </Step>

  <Step number={3} title={t('config.step3Title')} help={t('config.step3Help')}>
    {#if provisioning.status === 'pending'}
      <p class="status">
        <span class="spinner" aria-hidden="true"></span>
        {t('config.serverProvisioning')}
      </p>
    {:else}
      <div {@attach place(provisionButton)}></div>
      {#if provisioning.status === 'failed'}
        <p class="failed">{provisioning.error}</p>
      {/if}
    {/if}

    <HelpText>{t('config.ipRestrictionNote', { ips: EGRESS_IPS.join(', ') })}</HelpText>

    {#if settings.endpoint}
      <HelpText>{t('config.serverReady')}</HelpText>
      <p class="endpoint">{settings.endpoint}</p>
    {:else if provisioning.status !== 'pending'}
      <HelpText>{t('config.serverNotProvisioned')}</HelpText>
    {/if}
  </Step>

  <Step number={4} title={t('config.step4Title')} help={t('config.step4Help')}>
    {#if settings.endpoint}
      <p class="text">{t('config.appTokenInstructions')}</p>
      <TokenLink href={thisAppTokenUrl(appId)} text={t('config.openThisAppTokenSettings')} />
      <div {@attach place(appTokenField)}></div>
    {:else}
      <HelpText>{t('config.completeStep3First')}</HelpText>
    {/if}
  </Step>
</div>

<style>
  .initial-setup {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .text,
  .status,
  .failed,
  .endpoint {
    margin: 0;
  }

  .failed {
    color: #e74c3c;
  }

  .endpoint {
    font-family: ui-monospace, Menlo, Consolas, monospace;
    background: #f7f9fa;
    border: 1px solid #e3e7e8;
    border-radius: 4px;
    padding: 8px 12px;
    overflow-wrap: anywhere;
  }

  .status {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .spinner {
    flex: none;
    width: 14px;
    height: 14px;
    margin-top: 3px;
    border: 2px solid #e3e7e8;
    border-top-color: #3498db;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .spinner {
      animation-duration: 2s;
    }
  }
</style>
