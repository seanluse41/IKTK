import { mount, unmount } from 'svelte';
import Form from '../components/form.svelte';
import { postComment } from './commentPoster.js';
import { addQuestionnaireRow } from './updateRepositoryRecord.js';
import { buildQuestionnaireRow } from './buildQuestionnaireRow.js';
import { scheduleQuestionnaireEnd } from './scheduleQuestionnaireEnd.js';
import { validateFormData } from './validateFormData.js';
import { t } from '../i18n.js';

function formatDeadline(deadline) {
  const d = new Date(deadline);
  return d.toLocaleString(t('questionnaireButton.dateLocale'), {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

// Marktone replaces kintone's native comment editor with its own DOM
// (`.marktone-container`), so the normal `#+oceanMention` toolbar button
// we clone from may not exist or may not be the thing users actually see.
// Instead of trying to act like one of marktone's own tabs (their click
// handlers are internal to the extension and not safe to share), we just
// add our own standalone button next to their tab row. It doesn't
// participate in marktone's edit/preview tab-switching at all — it's a
// separate trigger that opens the same dialog regardless of which tab is
// active.
function findInsertionPoint() {
  const marktoneRoot = document.querySelector('.marktone');
  if (marktoneRoot) {
    return { mode: 'marktone', anchor: marktoneRoot };
  }

  const mentionBtn = document.getElementById('+oceanMention');
  if (mentionBtn) {
    return { mode: 'native', anchor: mentionBtn };
  }

  return null;
}

function createMarktoneButton() {
  const btn = document.createElement('div');
  btn.className = 'tab questionnaire-tab';
  btn.setAttribute('role', 'tab');
  btn.setAttribute('tabindex', '0');
  btn.textContent = t('questionnaireButton.mentionButtonLabel');
  return btn;
}

function createNativeButton(mentionBtn) {
  const btn = mentionBtn.cloneNode(true);
  btn.title = t('questionnaireButton.mentionButtonTitle');
  btn.querySelector('.ocean-ui-editor-toolbar-mention-button').textContent = t('questionnaireButton.mentionButtonLabel');
  return btn;
}

export function createQuestionnaireButton({ pluginId, appId, recordId, repoAppId, onRepositoryUpdate }) {
  if (document.getElementById('questionnaire-create-btn')) return;

  const insertionPoint = findInsertionPoint();
  if (!insertionPoint) return;

  const { mode, anchor } = insertionPoint;

  const btn = mode === 'marktone'
    ? createMarktoneButton()
    : createNativeButton(anchor);

  btn.id = 'questionnaire-create-btn';

  btn.addEventListener('click', async (e) => {
    // In marktone mode this lives inside the tab row, so stop the click
    // from bubbling up into marktone's own tab-switching listener.
    if (mode === 'marktone') {
      e.preventDefault();
      e.stopPropagation();
    }

    const body = document.createElement('div');
    const form = mount(Form, { target: body, props: { appId, recordId } });

    const dialog = await kintone.createDialog({
      title: t('questionnaireButton.dialogTitle'),
      body,
      okButtonText: t('questionnaireButton.createButton'),
      showCancelButton: true,
      cancelButtonText: t('questionnaireButton.cancelButton'),
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
            text: t('questionnaireButton.commentBody', {
              title: formData.title,
              deadline: formatDeadline(formData.deadline),
            }),
            mentions: formData.mentions,
          },
        });

        const row = buildQuestionnaireRow(formData, loginUser, commentID);
        const repositoryRecord = await addQuestionnaireRow(appId, recordId, row, repoAppId);
        const repositoryRecordId = repositoryRecord.$id.value;
        onRepositoryUpdate(repositoryRecord);

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

    // show() resolves once the dialog closes, however it was closed
    await dialog.show();
    unmount(form);
  });

  if (mode === 'marktone') {
    const tabsRow = anchor.querySelector('.tabs');
    if (tabsRow) {
      tabsRow.insertAdjacentElement('afterend', btn);
    } else {
      anchor.appendChild(btn);
    }
  } else {
    anchor.insertAdjacentElement('afterend', btn);
  }
}