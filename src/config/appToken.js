/**
 * Checks that a token can read this app, the same check the server makes on
 * every request, so a wrong token is caught here rather than by users.
 *
 * fetch rather than kintone.api, which can't send a token: Kintone uses the
 * API token when one is sent, even with a session. kintone.api.url still gives
 * the right path, guest space included.
 */
export const verifyAppToken = async (token) => {
  const params = new URLSearchParams({ app: kintone.app.getId(), query: 'limit 1' });
  const response = await fetch(`${kintone.api.url('/k/v1/records.json', true)}?${params}`, {
    headers: { 'X-Cybozu-API-Token': token },
  });
  if (response.ok) return;

  const body = await response.json().catch(() => ({}));
  throw new Error(body.message || `Kintone returned ${response.status}.`);
};
