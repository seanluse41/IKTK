import { mount } from 'svelte';
import Form from '../components/form.svelte';
import { postComment } from './commentPoster.js';
import { createRepositoryRecord } from './createRepositoryRecord.js';
import { addQuestionnaireRow } from './updateRepositoryRecord.js';
import { buildQuestionnaireRow } from './buildQuestionnaireRow.js';

// Clones kintone's native mention button into a "create questionnaire"
// button, wires up its click handler, and inserts it next to the original.
// No-ops if the mention button isn't present yet, or if our button has
// already been inserted.
export function createQuestionnaireButton({ appId, recordId, getRepositoryRecord }) {
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
        if (action !== 'OK') return;

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
        const repositoryRecord = getRepositoryRecord();

        if (repositoryRecord) {
          await addQuestionnaireRow(repositoryRecord.$id.value, repositoryRecord.table.value, row);
        } else {
          await createRepositoryRecord(appId, recordId, row);
        }
      },
    });

    await dialog.show();
  });

  mentionBtn.insertAdjacentElement('afterend', btn);
}