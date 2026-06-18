const SCHEDULE_ENDPOINT = 'https://cn7noxn4p5.execute-api.ap-northeast-1.amazonaws.com/dev/schedule';

/**
 * Asks the backend to create a one-shot EventBridge schedule that will
 * post the "questionnaire ended" comment at the given deadline.
 *
 * deadline: naive ISO string from DateTimePicker, e.g. "2026-06-23T01:00:00"
 * (no transformation needed — already local wall-clock time).
 */
export async function scheduleQuestionnaireEnd({ pluginId, appId, recordId, commentID, repositoryRecordId, repoAppId, deadline }) {
  const config = kintone.plugin.app.getConfig(pluginId);
  const repoToken = config.repoToken;

  if (!repoToken) {
    console.error('No repository API token configured for this plugin — skipping end-notification scheduling.');
    return;
  }

  const { subdomain, baseDomain } = await kintone.getDomain();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const recordUrl = `${await kintone.buildPageUrl('APP_DETAIL', { appId, recordId })}&comment=${commentID}`;

  const response = await fetch(SCHEDULE_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      subdomain,
      baseDomain,
      repoToken,
      appId,
      recordId,
      recordUrl,
      commentID,
      repositoryRecordId,
      repoAppId,
      deadline,
      timezone,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error('Failed to schedule questionnaire end:', response.status, body);
    throw new Error('Failed to schedule questionnaire end notification');
  }

  return response.json();
}