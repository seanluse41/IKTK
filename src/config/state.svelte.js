import { OPTIONS, getAppToken, getConfig, setConfig } from './pluginConfig.js';
import { lookupDomain, provisionStatus } from './controlPlane.js';
import { t } from '../i18n.js';

const config = getConfig();

export const appId = String(kintone.app.getId());

export const settings = $state({
  repoAppId: config.repoAppId,
  endpoint: config.endpoint,
  // Set while this domain's server is still being created.
  provisionId: config.provisionId,
  ...Object.fromEntries(OPTIONS.map((option) => [option, config[option]])),
  appToken: getAppToken(config.endpoint),
});

export const ui = $state({
  dialog: null,
  notice: null,
  busy: false,
});

export const fail = (error, key) => {
  console.error(error);
  ui.dialog = {
    title: t('config.errorLabel'),
    content: t(key, { message: error.message || String(error) }),
    icon: 'error',
  };
};

// The Kintone domain, e.g. host "sean.cybozu.com". Read once on page load.
// Not taken from the page URL, which can be the secure access domain
// (sean.s.cybozu.com) that the server can't call.
export const domain = $state({ host: '', origin: '' });

export const loadDomain = async () => {
  const { subdomain, baseDomain } = await kintone.getDomain();
  domain.host = `${subdomain}.${baseDomain}`;
  domain.origin = `https://${domain.host}`;

  // A new app in a domain another app already provisioned: fill in its
  // repository app and server, so only this app's token is left to add.
  // Saved with the rest when the admin clicks Save.
  if (settings.endpoint || settings.provisionId) return;
  try {
    const found = await lookupDomain(domain.host);
    if (!found) return;
    settings.repoAppId = found.repositoryAppId;
    settings.endpoint = found.endpoint;
    settings.appToken ||= getAppToken(found.endpoint);
  } catch (error) {
    // Setup by hand still works, so this is only worth a log line.
    console.warn('Could not look up this domain\'s server:', error);
  }
};

/** Writes the plugin config from the current settings. */
export const saveConfig = () =>
  setConfig({
    repoAppId: settings.repoAppId.trim(),
    endpoint: settings.endpoint,
    provisionId: settings.provisionId,
    ...Object.fromEntries(OPTIONS.map((option) => [option, settings[option]])),
  });

// '' | 'pending' | 'failed', with the control plane's message on failure.
export const provisioning = $state({ status: '', error: '' });

const POLL_MS = 5000;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Polls the control plane until this domain's server is ready or has failed,
 * then saves the outcome. Also called on page load, so leaving the page while
 * the stack builds loses nothing.
 */
export const watchProvision = async () => {
  if (!settings.provisionId || provisioning.status === 'pending') return;
  provisioning.status = 'pending';

  for (;;) {
    let result;
    try {
      result = await provisionStatus(settings.provisionId);
    } catch (error) {
      if (error.status !== 404) {
        // A dropped connection shouldn't end the wait; the stack keeps going.
        console.warn('Could not check provisioning, retrying:', error);
        await sleep(POLL_MS);
        continue;
      }
      result = { status: 'failed', error: error.message };
    }

    if (result.status === 'pending') {
      await sleep(POLL_MS);
      continue;
    }

    settings.provisionId = '';
    if (result.status === 'ready') {
      settings.endpoint = result.endpoint;
      provisioning.status = '';
      ui.notice = { text: t('config.serverProvisioned'), type: 'success' };
    } else {
      provisioning.status = 'failed';
      provisioning.error = result.error;
    }
    await saveConfig();
    return;
  }
};
