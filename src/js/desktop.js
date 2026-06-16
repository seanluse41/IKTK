// src/js/desktop.js
import { getRepositoryRecord } from '../services/getRepositoryRecord.js';
import { createQuestionnaireButton } from '../services/questionnaireButtonCreator.js';
import { insertQuestionnaires } from '../services/questionnaireCommentInsertor.js';

const PLUGIN_ID = kintone.$PLUGIN_ID;

kintone.events.on('app.record.detail.show', async () => {
  const appId = String(kintone.app.getId());
  const recordId = String(kintone.app.record.getId());

  const repositoryRecord = await getRepositoryRecord(appId, recordId);
  console.log('repository record:', repositoryRecord);

  const loginUser = kintone.getLoginUser();
  const userLanguage = loginUser.language;

  const sideBarState = await kintone.app.record.getSideBarDisplayState();
  if (sideBarState !== 'COMMENTS') {
    await kintone.app.record.showSideBar('COMMENTS');
  }

  if (repositoryRecord) {
    const flagsByCommentID = buildFlagsByCommentID(repositoryRecord.table.value, loginUser);
    insertQuestionnaires(repositoryRecord.table.value, flagsByCommentID, { repositoryRecord, loginUser });
  }

  const observer = new MutationObserver(() => {
    createQuestionnaireButton({
      appId,
      recordId,
      getRepositoryRecord: () => repositoryRecord,
    });

    if (repositoryRecord) {
      const flagsByCommentID = buildFlagsByCommentID(repositoryRecord.table.value, loginUser);
      insertQuestionnaires(repositoryRecord.table.value, flagsByCommentID, { repositoryRecord, loginUser });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});

function buildFlagsByCommentID(rows, loginUser) {
  const map = {};
  rows.forEach((row) => {
    const commentID = row.value.commentID.value;
    map[commentID] = {
      isCreator: row.value.creator.value.some((u) => u.code === loginUser.code),
      hasVoted: row.value.votedUsers.value.some((u) => u.code === loginUser.code),
    };
  });
  return map;
}