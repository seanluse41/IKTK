import { getConfig } from '../config/pluginConfig.js';
import { t } from '../i18n.js';

const PLUGIN_ID = kintone.$PLUGIN_ID;

/**
 * Client for this domain's IKTK server (see iktk-server's README for routes).
 *
 * Every call goes through kintone.plugin.app.proxy, never fetch: Kintone adds
 * this app's API token from proxy config on its own servers, which is how the
 * server knows the request comes from this app without users ever seeing the
 * token.
 */

export class ApiError extends Error {
  constructor(status, code, message) {
    super(message || code);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

const call = async (route, body) => {
  const { endpoint } = getConfig();
  if (!endpoint) throw new ApiError(0, 'not_configured');

  let text;
  let status;
  try {
    [text, status] = await kintone.plugin.app.proxy(
      PLUGIN_ID,
      `${endpoint}${route}`,
      'POST',
      { 'Content-Type': 'application/json' },
      body
    );
  } catch (error) {
    // The proxy itself failed (unreachable, DNS); it rejects with a string.
    throw new ApiError(0, 'unreachable', String(error));
  }

  let parsed = {};
  try {
    parsed = text ? JSON.parse(text) : {};
  } catch {
    // Not ours, e.g. API Gateway's own throttling page.
  }

  if (status !== 200) throw new ApiError(status, parsed.error || 'unknown', parsed.message || text);
  return parsed;
};

/** { polls: [poll] } for a record, as `userCode` sees them. */
export const listPolls = ({ appId, recordId, userCode }) =>
  call('/polls/list', { appId, recordId, userCode });

/** Records a poll whose announcement comment was just posted. { poll } */
export const createPoll = ({ appId, recordId, commentID, title, options, deadline, language }) =>
  call('/polls/create', { appId, recordId, commentID, title, options, deadline, language });

/** { poll } with the updated counts. */
export const votePoll = ({ appId, recordId, commentID, letter, userCode }) =>
  call('/polls/vote', { appId, recordId, commentID, letter, userCode });

/** A message for users. Setup problems point them at the app's admins. */
export const errorMessage = (error) => {
  switch (error?.code) {
    case 'not_configured':
      return t('errors.notConfigured');
    case 'unauthorized':
      return t('errors.unauthorized');
    case 'poll_closed':
      return t('questionnaire.votingClosedError');
    default:
      return t('errors.generic');
  }
};
