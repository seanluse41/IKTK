import { KintoneRestAPIClient } from '@kintone/rest-api-client';
import { REPOSITORY_APP_ID } from './getRepositoryRecord.js';

const client = new KintoneRestAPIClient();

/**
 * Create a new repository record for a source app/record, seeded with
 * a single questionnaire row. Returns the new repository record's id.
 */
export async function createRepositoryRecord(appId, recordId, row) {
  const { id } = await client.record.addRecord({
    app: REPOSITORY_APP_ID,
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