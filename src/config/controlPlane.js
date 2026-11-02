import { CONTROL_PLANE_HOST, LOOKUP_KEY } from './constants.js';

/**
 * Client for the control plane, which gives every Kintone domain its own IKTK
 * server stack. Every app in a domain shares that stack's endpoint.
 */

const request = async (path, method, body) => {
  if (!CONTROL_PLANE_HOST) {
    throw new Error('CONTROL_PLANE_HOST is not set in constants.js.');
  }

  const response = await fetch(`${CONTROL_PLANE_HOST}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(result.error || `The control plane returned ${response.status}.`);
    error.status = response.status;
    throw error;
  }

  return result;
};

/**
 * Starts provisioning this domain's server. Resolves to { status: 'ready',
 * endpoint } if it already exists (the token is just rotated), or
 * { status: 'pending', provisionId } while it's created, which takes minutes.
 *
 * The control plane authorizes this by using the repository token against
 * Kintone, so only someone who can read it out of the repository app can
 * provision.
 */
export const startProvision = ({ domain, repositoryAppId, repositoryToken }) =>
  request('/domains', 'POST', { domain, repositoryAppId, repositoryToken });

/** { status: 'pending' | 'ready' | 'failed', endpoint?, error? } */
export const provisionStatus = (provisionId) =>
  request(`/provisions/${encodeURIComponent(provisionId)}`, 'GET');

const hmacHex = async (key, message) => {
  const encoder = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    encoder.encode(key),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(message));
  return [...new Uint8Array(signature)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * This domain's server, if another app already provisioned it:
 * { endpoint, repositoryAppId }, or null. Needs no token, so any app's admin
 * can turn polls on with just their own app's token.
 */
export const lookupDomain = async (domain) => {
  const proof = await hmacHex(LOOKUP_KEY, domain);
  try {
    return await request(`/domains/${encodeURIComponent(domain)}?proof=${proof}`, 'GET');
  } catch (error) {
    if (error.status === 404) return null;
    throw error;
  }
};

/**
 * Deletes this domain's server stack. The control plane only accepts the
 * registered repository app's token for this.
 */
export const deleteServer = ({ domain, repositoryToken }) =>
  request('/domains', 'DELETE', { domain, repositoryToken });
