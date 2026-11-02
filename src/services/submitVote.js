// src/services/submitVote.js
import { updateQuestionnaireRow } from './updateRepositoryRecord.js';

function parseVotes(votesValue) {
  return Object.fromEntries(
    votesValue.split(',').filter(Boolean).map((entry) => {
      const [l, count] = entry.split(':');
      return [l, Number(count) || 0];
    })
  );
}

/**
 * Records a vote (incremented option count + voter appended to
 * votedUsers) against the row's current saved value, so votes cast by
 * others since the page loaded aren't overwritten. A user who already
 * voted (e.g. in another tab) isn't counted twice.
 *
 * Returns { record, votesValue }: the up-to-date repository record and
 * the row's new vote counts string, so the caller can update its display
 * without refetching.
 */
export async function submitVote({ repositoryRecordId, commentID, letter, loginUser, repoAppId }) {
  let votesValue;

  const record = await updateQuestionnaireRow(repositoryRecordId, commentID, (row) => {
    votesValue = row.votes.value;
    if (row.votedUsers.value.some((u) => u.code === loginUser.code)) return null;

    const votes = parseVotes(row.votes.value);
    votes[letter] = (votes[letter] || 0) + 1;

    votesValue = Object.entries(votes)
      .map(([l, count]) => `${l}:${count}`)
      .join(',');

    return {
      ...row,
      votes: { value: votesValue },
      votedUsers: { value: [...row.votedUsers.value, { code: loginUser.code }] },
    };
  }, repoAppId);

  return { record, votesValue };
}
