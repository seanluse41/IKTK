// src/services/submitVote.js
import { updateQuestionnaireRow } from './updateRepositoryRecord.js';

/**
 * Builds the updated row data for a vote (incremented option count +
 * voter appended to votedUsers), then persists it via updateQuestionnaireRow.
 * Returns the new vote counts string so the caller can update its own
 * row.value in place without refetching.
 */
export async function submitVote({ repositoryRecord, row, letter, loginUser }) {
  const currentVotes = Object.fromEntries(
    row.votes.value.split(',').filter(Boolean).map((entry) => {
      const [l, count] = entry.split(':');
      return [l, Number(count) || 0];
    })
  );

  currentVotes[letter] = (currentVotes[letter] || 0) + 1;

  const votesValue = Object.entries(currentVotes)
    .map(([l, count]) => `${l}:${count}`)
    .join(',');

  const votedUsersValue = [...row.votedUsers.value, { code: loginUser.code }];

  const updatedRowValue = {
    ...row,
    votes: { value: votesValue },
    votedUsers: { value: votedUsersValue },
  };

  const rowId = repositoryRecord.table.value.find(
    (r) => r.value.commentID.value === row.commentID.value
  )?.id;

  await updateQuestionnaireRow(repositoryRecord.$id.value, repositoryRecord.table.value, rowId, updatedRowValue);

  return votesValue;
}