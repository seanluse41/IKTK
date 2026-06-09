import { mount } from 'svelte';
import Form from '../components/form.svelte';

const PLUGIN_ID = kintone.$PLUGIN_ID;

kintone.events.on('app.record.detail.show', () => {
  const observer = new MutationObserver(() => {
    const mentionBtn = document.getElementById('+oceanMention');
    if (!mentionBtn || document.getElementById('questionnaire-create-btn')) return;

    const btn = mentionBtn.cloneNode(true);
    btn.id = 'questionnaire-create-btn';
    btn.title = 'アンケートを作成する';
    btn.querySelector('.ocean-ui-editor-toolbar-mention-button').textContent = 'アンケート';

    btn.addEventListener('click', async () => {
      const appId = String(kintone.app.getId());
      const recordId = String(kintone.app.record.getId());

      const body = document.createElement('div');
      const form = mount(Form, { target: body, props: { appId, recordId } });

      const dialog = await kintone.createDialog({
        title: 'アンケートを作成',
        body,
        okButtonText: '作成',
        showCancelButton: true,
        cancelButtonText: 'キャンセル',
        showCloseButton: true,
        beforeClose: (action) => {
          if (action === 'OK') {
            const data = form.getFormData();
            console.log('form data:', data);
            // TODO: submit to repository app
          }
        },
      });

      await dialog.show();
    });

    mentionBtn.insertAdjacentElement('afterend', btn);
  });

  observer.observe(document.body, { childList: true, subtree: true });
});