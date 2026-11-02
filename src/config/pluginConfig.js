import { APP_TOKEN_HEADER } from './constants.js';

const PLUGIN_ID = kintone.$PLUGIN_ID;

/**
 * The on/off options an app's admins set, in the order the settings page
 * shows them. All off by default.
 * - allowNonAdminPoll: users without app management can create polls
 * - allowNamedVotes:   a poll's creator may make it non-anonymous
 * - allowVoteChange:   a poll's creator may let voters change their vote
 * - allowAddOptions:   a poll's creator may let participants add options
 * - allowReminders:    a poll's creator may schedule a reminder
 */
export const OPTIONS = ['allowNonAdminPoll', 'allowNamedVotes', 'allowVoteChange', 'allowAddOptions', 'allowReminders'];

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
    ...Object.fromEntries(OPTIONS.map((option) => [option, config[option] === 'true'])),
  };
};

/** setConfig keeps only the last saved object, so always write the whole thing. */
export const setConfig = (config) =>
  new Promise((resolve) => {
    kintone.plugin.app.setConfig(
      {
        repoAppId: String(config.repoAppId || ''),
        endpoint: String(config.endpoint || ''),
        provisionId: String(config.provisionId || ''),
        ...Object.fromEntries(OPTIONS.map((option) => [option, String(Boolean(config[option]))])),
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
