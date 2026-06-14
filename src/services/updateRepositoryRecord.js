import { KintoneRestAPIClient } from '@kintone/rest-api-client';
import { REPOSITORY_APP_ID } from './getRepositoryRecord.js';

const client = new KintoneRestAPIClient();

/**
 * Append a new questionnaire row to an existing repository record's
 * subtable, preserving existing rows.
 */
export async function addQuestionnaireRow(repositoryRecordId, existingTable, row) {
  await client.record.updateRecord({
    app: REPOSITORY_APP_ID,
    id: repositoryRecordId,
    record: {
      table: {
        value: [
          ...existingTable,
          {
            value: row,
          },
        ],
      },
    },
  });
}