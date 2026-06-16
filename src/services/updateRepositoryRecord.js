// src/services/updateRepositoryRecord.js
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

/**
 * Replace a single row in-place within an existing repository record's
 * subtable (e.g. after a vote), preserving all other rows.
 */
export async function updateQuestionnaireRow(repositoryRecordId, existingTable, rowId, updatedRowValue) {
  const updatedTable = existingTable.map((row) =>
    row.id === rowId ? { ...row, value: updatedRowValue } : row
  );

  await client.record.updateRecord({
    app: REPOSITORY_APP_ID,
    id: repositoryRecordId,
    record: {
      table: {
        value: updatedTable,
      },
    },
  });
}