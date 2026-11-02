<script>
  import { Spinner } from 'kintone-ui-component';

  let { open = false, text = '' } = $props();

  const instance = new Spinner({ text });

  $effect(() => {
    if (open) {
      instance.open();
    } else {
      instance.close();
    }
  });
</script>
