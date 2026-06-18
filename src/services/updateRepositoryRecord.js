// src/services/updateRepositoryRecord.js
import { KintoneRestAPIClient } from '@kintone/rest-api-client';

const client = new KintoneRestAPIClient();

/**
 * Append a new questionnaire row to an existing repository record's
 * subtable, preserving existing rows.
 */
export async function addQuestionnaireRow(repositoryRecordId, existingTable, row, repoAppId) {
  await client.record.updateRecord({
    app: repoAppId,
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
export async function updateQuestionnaireRow(repositoryRecordId, existingTable, rowId, updatedRowValue, repoAppId) {
  const updatedTable = existingTable.map((row) =>
    row.id === rowId ? { ...row, value: updatedRowValue } : row
  );

  await client.record.updateRecord({
    app: repoAppId,
    id: repositoryRecordId,
    record: {
      table: {
        value: updatedTable,
      },
    },
  });
}