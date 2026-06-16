import { getRepositoryRecord } from '../services/getRepositoryRecord.js';
import { createQuestionnaireButton } from '../services/questionnaireButtonCreator.js';
import { insertQuestionnaires } from '../services/questionnaireCommentInsertor.js';

const PLUGIN_ID = kintone.$PLUGIN_ID;

kintone.events.on('app.record.detail.show', async () => {
  const appId = String(kintone.app.getId());
  const recordId = String(kintone.app.record.getId());

  const repositoryRecord = await getRepositoryRecord(appId, recordId);
  console.log('repository record:', repositoryRecord);

  const sideBarState = await kintone.app.record.getSideBarDisplayState();
  if (sideBarState !== 'COMMENTS') {
    await kintone.app.record.showSideBar('COMMENTS');
  }

  if (repositoryRecord) {
    insertQuestionnaires(repositoryRecord.table.value);
  }

  const observer = new MutationObserver(() => {
    createQuestionnaireButton({
      appId,
      recordId,
      getRepositoryRecord: () => repositoryRecord,
    });

    if (repositoryRecord) {
      insertQuestionnaires(repositoryRecord.table.value);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});