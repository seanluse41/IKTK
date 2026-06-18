import { mount } from 'svelte';
import Form from '../components/form.svelte';
import { postComment } from './commentPoster.js';
import { createRepositoryRecord } from './createRepositoryRecord.js';
import { addQuestionnaireRow } from './updateRepositoryRecord.js';
import { buildQuestionnaireRow } from './buildQuestionnaireRow.js';
import { scheduleQuestionnaireEnd } from './scheduleQuestionnaireEnd.js';
import { validateFormData } from './validateFormData.js';

function formatDeadline(deadline) {
  const d = new Date(deadline);
  return d.toLocaleString('ja-JP', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function createQuestionnaireButton({ pluginId, appId, recordId, repoAppId, getRepositoryRecord }) {
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

        const validationError = validateFormData(formData);
        if (validationError) {
          kintone.showNotification('ERROR', validationError);
          return false;
        }

        const loginUser = kintone.getLoginUser();

        const commentID = await postComment({
          app: appId,
          record: recordId,
          comment: {
            text: `アンケートが開始されました: ${formData.title}\n回答期限: ${formatDeadline(formData.deadline)}`,
            mentions: formData.mentions,
          },
        });

        const row = buildQuestionnaireRow(formData, loginUser, commentID);
        const repositoryRecord = getRepositoryRecord();

        let repositoryRecordId;
        if (repositoryRecord) {
          await addQuestionnaireRow(repositoryRecord.$id.value, repositoryRecord.table.value, row, repoAppId);
          repositoryRecordId = repositoryRecord.$id.value;
        } else {
          repositoryRecordId = await createRepositoryRecord(appId, recordId, row, repoAppId);
        }

        try {
          await scheduleQuestionnaireEnd({
            pluginId,
            appId,
            recordId,
            commentID,
            repositoryRecordId,
            repoAppId,
            deadline: formData.deadline,
          });
        } catch (error) {
          console.error('Questionnaire created, but end-notification scheduling failed:', error);
        }
      },
    });

    await dialog.show();
  });

  mentionBtn.insertAdjacentElement('afterend', btn);
}