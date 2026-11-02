import { getRepositoryRecord } from '../services/getRepositoryRecord.js';
import { createQuestionnaireButton } from '../services/questionnaireButtonCreator.js';
import { insertQuestionnaires } from '../services/questionnaireCommentInsertor.js';

const PLUGIN_ID = kintone.$PLUGIN_ID;

// detail.show fires again when moving between records without a full page
// load, so the previous record's observer is disconnected first.
let observer;

kintone.events.on('app.record.detail.show', async () => {
  observer?.disconnect();

  const appId = String(kintone.app.getId());
  const recordId = String(kintone.app.record.getId());

  const config = kintone.plugin.app.getConfig(PLUGIN_ID);
  const allowNonAdminPoll = config.allowNonAdminPoll === 'true';
  const repoAppId = config.repoAppId;

  // Kept current by the create/vote flows, which hand back the freshly
  // saved record, so polls re-inserted after a comment re-render reflect it.
  let repositoryRecord = await getRepositoryRecord(appId, recordId, repoAppId);

  const loginUser = kintone.getLoginUser();

  let canCreatePoll = true;
  if (!allowNonAdminPoll) {
    const permissions = await kintone.app.getPermissions();
    canCreatePoll = permissions.editApp;
  }

  const sideBarState = await kintone.app.record.getSideBarDisplayState();
  if (sideBarState !== 'COMMENTS') {
    await kintone.app.record.showSideBar('COMMENTS');
  }

  const onRepositoryUpdate = (record) => {
    repositoryRecord = record;
  };

  const renderQuestionnaires = () => {
    if (!repositoryRecord) return;

    const flagsByCommentID = buildFlagsByCommentID(repositoryRecord.table.value, loginUser);
    insertQuestionnaires(repositoryRecord.table.value, flagsByCommentID, {
      repositoryRecordId: repositoryRecord.$id.value,
      loginUser,
      repoAppId,
      onRepositoryUpdate,
    });
  };

  renderQuestionnaires();

  observer = new MutationObserver(() => {
    if (canCreatePoll) {
      createQuestionnaireButton({
        pluginId: PLUGIN_ID,
        appId,
        recordId,
        repoAppId,
        onRepositoryUpdate,
      });
    }

    renderQuestionnaires();
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
