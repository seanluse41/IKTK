/**

**/
export function buildQuestionnaireRow(formData, loginUser, commentID) {
  const { title, options, deadline, mentions } = formData;

  const optionLetters = 'abcdefghijklmnopqrstuvwxyz';

  // "A:Option 1;;;B:Option 2;;;" - triple-semicolon delimited so labels
  // can safely contain commas or single/double semicolons.
  const optionsValue = options
    .map((label, i) => `${optionLetters[i].toUpperCase()}:${label}`)
    .join(';;;') + ';;;';

  // "a:0,b:0,c:0" - positional vote counters, lowercase letters.
  const votesValue = options
    .map((_, i) => `${optionLetters[i]}:0`)
    .join(',');

  const users = mentions
    .filter(m => m.type === 'USER')
    .map(({ code }) => ({ code }));

  const group = mentions
    .filter(m => m.type === 'GROUP')
    .map(({ code }) => ({ code }));

  const org = mentions
    .filter(m => m.type === 'ORGANIZATION')
    .map(({ code }) => ({ code }));

  const endTimeUtc = new Date(deadline).toISOString();

  const now = new Date().toISOString();

  return {
    commentID: { value: String(commentID) },
    title: { value: title },
    startTime: { value: now },
    endTime: { value: endTimeUtc },
    options: { value: optionsValue },
    votes: { value: votesValue },
    users: { value: users },
    group: { value: group },
    org: { value: org },
    creator: { value: [{ code: loginUser.code }] },
    votedUsers: { value: [] },
  };
}