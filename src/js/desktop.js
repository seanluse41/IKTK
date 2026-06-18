// src/js/desktop.js
import { getRepositoryRecord } from '../services/getRepositoryRecord.js';
import { createQuestionnaireButton } from '../services/questionnaireButtonCreator.js';
import { insertQuestionnaires } from '../services/questionnaireCommentInsertor.js';

const PLUGIN_ID = kintone.$PLUGIN_ID;

kintone.events.on('app.record.detail.show', async () => {
  const appId = String(kintone.app.getId());
  const recordId = String(kintone.app.record.getId());

  const config = kintone.plugin.app.getConfig(PLUGIN_ID);
  const allowNonAdminPoll = config.allowNonAdminPoll === 'true';
  const repoAppId = config.repoAppId;

  const repositoryRecord = await getRepositoryRecord(appId, recordId, repoAppId);
  console.log('repository record:', repositoryRecord);

  const loginUser = kintone.getLoginUser();
  const userLanguage = loginUser.language;

  let canCreatePoll = true;
  if (!allowNonAdminPoll) {
    const permissions = await kintone.app.getPermissions();
    canCreatePoll = permissions.editApp;
  }

  const sideBarState = await kintone.app.record.getSideBarDisplayState();
  if (sideBarState !== 'COMMENTS') {
    await kintone.app.record.showSideBar('COMMENTS');
  }

  if (repositoryRecord) {
    const flagsByCommentID = buildFlagsByCommentID(repositoryRecord.table.value, loginUser);
    insertQuestionnaires(repositoryRecord.table.value, flagsByCommentID, { repositoryRecord, loginUser, repoAppId });
  }

  const observer = new MutationObserver(() => {
    if (canCreatePoll) {
      createQuestionnaireButton({
        pluginId: PLUGIN_ID,
        appId,
        recordId,
        repoAppId,
        getRepositoryRecord: () => repositoryRecord,
      });
    }

    if (repositoryRecord) {
      const flagsByCommentID = buildFlagsByCommentID(repositoryRecord.table.value, loginUser);
      insertQuestionnaires(repositoryRecord.table.value, flagsByCommentID, { repositoryRecord, loginUser, repoAppId });
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
      isEnded: new Date(row.value.endTime.value) <= new Date(),
    };
  });
  return map;
}