import { mount } from 'svelte';
import Form from '../components/form.svelte';
import Questionnaire from '../components/questionnaire.svelte';
import { getRepositoryRecord } from '../services/getRepositoryRecord.js';
import { createRepositoryRecord } from '../services/createRepositoryRecord.js';
import { addQuestionnaireRow } from '../services/updateRepositoryRecord.js';
import { postComment } from '../services/commentPoster.js';
import { buildQuestionnaireRow } from '../services/buildQuestionnaireRow.js';

const PLUGIN_ID = kintone.$PLUGIN_ID;

// Inserts a questionnaire <li> right after the comment that announced it.
// Comments can be deleted, so we anchor only to the comment we own
// (commentID), never assume it's adjacent to any other comment.
function insertQuestionnaires(rows) {
  const lists = document.querySelectorAll('.itemlist-gaia');
  if (lists.length === 0) return;

  rows.forEach((row) => {
    const commentID = row.value.commentID.value;
    if (document.getElementById(`questionnaire-${commentID}`)) return; // already inserted

    const selector = `a[href*="comment=${commentID}"]`;
    let anchorLink = null;
    for (const list of lists) {
      anchorLink = list.querySelector(selector);
      if (anchorLink) break;
    }

    const anchorLi = anchorLink?.closest('.itemlist-item-gaia');
    if (!anchorLi) return; // comment not rendered (e.g. deleted, or older page not loaded)

    const wrapper = document.createElement('li');
    wrapper.id = `questionnaire-${commentID}`;
    anchorLi.insertAdjacentElement('afterend', wrapper);

    mount(Questionnaire, {
      target: wrapper,
      props: { row: row.value },
    });
  });
}

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
    const mentionBtn = document.getElementById('+oceanMention');
    if (!mentionBtn || document.getElementById('questionnaire-create-btn')) return;

    const btn = mentionBtn.cloneNode(true);
    btn.id = 'questionnaire-create-btn';
    btn.title = 'アンケートを作成する';
    btn.querySelector('.ocean-ui-editor-toolbar-mention-button').textContent = 'アンケート';

    btn.addEventListener('click', async () => {
      const body = document.createElement('div');
      const form = mount(Form, { target: body, props: { appId, recordId } });

      const dialog = await kintone.createDialog({
        title: 'アンケートを作成',
        body,
        okButtonText: '作成',
        showCancelButton: true,
        cancelButtonText: 'キャンセル',
        showCloseButton: true,
        beforeClose: async (action) => {
          if (action === 'OK') {
            const formData = form.getFormData();
            const loginUser = kintone.getLoginUser();

            const commentID = await postComment({
              app: appId,
              record: recordId,
              comment: {
                text: `アンケートが開始されました: ${formData.title}`,
                mentions: formData.mentions,
              },
            });

            const row = buildQuestionnaireRow(formData, loginUser, commentID);

            if (repositoryRecord) {
              await addQuestionnaireRow(repositoryRecord.$id.value, repositoryRecord.table.value, row);
            } else {
              await createRepositoryRecord(appId, recordId, row);
            }
          }
        },
      });

      await dialog.show();
    });

    mentionBtn.insertAdjacentElement('afterend', btn);
  });

  observer.observe(document.body, { childList: true, subtree: true });
});