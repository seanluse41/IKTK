import { KintoneRestAPIClient } from '@kintone/rest-api-client';

export const REPOSITORY_APP_ID = 87;

const client = new KintoneRestAPIClient();

/**
 * Find the repository record matching the given source app/record.
 * Returns the record object, or null if none exists yet.
 */
export async function getRepositoryRecord(appId, recordId) {
  const { records } = await client.record.getRecords({
    app: REPOSITORY_APP_ID,
    query: `appID = "${appId}" and RecordID = "${recordId}" limit 1`,
  });

  return records[0] ?? null;
}