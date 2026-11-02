<script>
  import { Button, Dialog as KucDialog } from 'kintone-ui-component';
  import { t } from '../../i18n.js';

  // { title, content, header?, icon?, cancel?, onconfirm?, onclose? }
  let { dialog = $bindable(null) } = $props();

  $effect(() => {
    if (!dialog) return;

    const { title, content, header, icon, cancel, onconfirm, onclose } = dialog;
    const footer = document.createElement('div');

    if (cancel) {
      const cancelButton = new Button({ text: t('config.cancelButton'), type: 'normal' });
      cancelButton.addEventListener('click', () => {
        dialog = null;
      });
      footer.appendChild(cancelButton);
    }

    const confirmButton = new Button({
      text: cancel ? t('config.ok') : t('config.close'),
      type: 'submit',
    });
    confirmButton.addEventListener('click', () => {
      onconfirm?.();
      onclose?.();
      dialog = null;
    });
    footer.appendChild(confirmButton);

    const instance = new KucDialog({ title, content, header, icon, footer });

    const onClose = () => {
      dialog = null;
    };
    instance.addEventListener('close', onClose);
    instance.open();

    return () => {
      instance.removeEventListener('close', onClose);
      instance.close();
      instance.remove();
    };
  });
</script>
