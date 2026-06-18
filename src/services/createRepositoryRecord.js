import { KintoneRestAPIClient } from '@kintone/rest-api-client';

const client = new KintoneRestAPIClient();

/**
 * Create a new repository record for a source app/record, seeded with
 * a single questionnaire row. Returns the new repository record's id.
 */
export async function createRepositoryRecord(appId, recordId, row, repoAppId) {
  const { id } = await client.record.addRecord({
    app: repoAppId,
    record: {
      appID: { value: String(appId) },
      RecordID: { value: String(recordId) },
      table: {
        value: [
          {
            value: row,
          },
        ],
      },
    },
  });

  return id;
}