// src/services/updateRepositoryRecord.js
import { KintoneRestAPIClient } from '@kintone/rest-api-client';
import { getRepositoryRecord } from './getRepositoryRecord.js';
import { createRepositoryRecord } from './createRepositoryRecord.js';

const client = new KintoneRestAPIClient();

const MAX_ATTEMPTS = 3;

/**
 * Every write replaces the whole subtable, so a copy of the record read
 * earlier (e.g. at page load) would silently drop rows/votes added since.
 * Instead, re-read the record, apply `change` to its current table, and
 * save with its revision. If someone else saved in between, kintone
 * rejects the revision (GAIA_CO02) and we retry against the newer copy.
 *
 * `change` gets the current table rows and returns the new rows, or null
 * to skip the write. Returns the up-to-date record.
 */
async function updateTable(repoAppId, repositoryRecordId, change) {
  for (let attempt = 1; ; attempt++) {
    const { record } = await client.record.getRecord({ app: repoAppId, id: repositoryRecordId });

    const table = change(record.table.value);
    if (!table) return record;

    try {
      await client.record.updateRecord({
        app: repoAppId,
        id: repositoryRecordId,
        revision: record.$revision.value,
        record: { table: { value: table } },
      });
    } catch (error) {
      if (error.code === 'GAIA_CO02' && attempt < MAX_ATTEMPTS) continue;
      throw error;
    }

    const { record: updated } = await client.record.getRecord({ app: repoAppId, id: repositoryRecordId });
    return updated;
  }
}

/**
 * Append a new questionnaire row to the repository record for the given
 * source app/record, creating that repository record if it doesn't exist
 * yet. Returns the up-to-date repository record.
 */
export async function addQuestionnaireRow(appId, recordId, row, repoAppId) {
  const existing = await getRepositoryRecord(appId, recordId, repoAppId);

  if (!existing) {
    const id = await createRepositoryRecord(appId, recordId, row, repoAppId);
    const { record } = await client.record.getRecord({ app: repoAppId, id });
    return record;
  }

  return updateTable(repoAppId, existing.$id.value, (table) => [...table, { value: row }]);
}

/**
 * Replace the questionnaire row matching `commentID` with whatever
 * `updateRow` returns for its current value (or null to leave it as is),
 * preserving all other rows. Returns the up-to-date repository record.
 */
export async function updateQuestionnaireRow(repositoryRecordId, commentID, updateRow, repoAppId) {
  return updateTable(repoAppId, repositoryRecordId, (table) => {
    const current = table.find((r) => r.value.commentID.value === String(commentID));
    if (!current) throw new Error(`No questionnaire row for comment ${commentID}`);

    const updatedValue = updateRow(current.value);
    if (!updatedValue) return null;

    return table.map((r) => (r === current ? { ...r, value: updatedValue } : r));
  });
}
