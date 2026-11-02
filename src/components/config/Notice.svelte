<script>
  import { Notification } from 'kintone-ui-component';

  let { notice = $bindable(null) } = $props();

  $effect(() => {
    if (!notice) return;

    const instance = new Notification({
      text: notice.text,
      type: notice.type || 'info',
    });
    instance.open();

    return () => instance.remove();
  });
</script>
