import { APP_TOKEN_HEADER } from './constants.js';

const PLUGIN_ID = kintone.$PLUGIN_ID;

/**
 * Plugin config is per app, and every user on the app's pages can read it,
 * so it holds nothing secret: which app stores the polls, this domain's
 * server endpoint, the provisioning ID while that server is being set up,
 * and the options. Values are always strings.
 *
 * `repoAppId` keeps its original name so existing installs keep working.
 */
export const getConfig = () => {
  const config = kintone.plugin.app.getConfig(PLUGIN_ID) || {};
  return {
    repoAppId: config.repoAppId || '',
    endpoint: config.endpoint || '',
    provisionId: config.provisionId || '',
    allowNonAdminPoll: config.allowNonAdminPoll === 'true',
  };
};

/** setConfig keeps only the last saved object, so always write the whole thing. */
export const setConfig = ({ repoAppId, endpoint, provisionId, allowNonAdminPoll }) =>
  new Promise((resolve) => {
    kintone.plugin.app.setConfig(
      {
        repoAppId: String(repoAppId || ''),
        endpoint: String(endpoint || ''),
        provisionId: String(provisionId || ''),
        allowNonAdminPoll: String(Boolean(allowNonAdminPoll)),
      },
      resolve
    );
  });

// Proxy config is matched by URL prefix, so one entry covers every route.
const proxyUrl = (endpoint) => `${endpoint}/`;

/**
 * This app's API token lives in proxy config, which only this settings page
 * can read or write. Kintone adds it to every kintone.plugin.app.proxy POST
 * to the endpoint, on its own servers, so users never see it.
 */
export const getAppToken = (endpoint) => {
  if (!endpoint) return '';
  const config = kintone.plugin.app.getProxyConfig(proxyUrl(endpoint), 'POST');
  return config?.headers?.[APP_TOKEN_HEADER] || '';
};

export const setAppToken = (endpoint, token) =>
  new Promise((resolve) => {
    kintone.plugin.app.setProxyConfig(
      proxyUrl(endpoint),
      'POST',
      { [APP_TOKEN_HEADER]: token, 'Content-Type': 'application/json' },
      {},
      resolve
    );
  });
