<script>
  let { children } = $props();
</script>

<p class="help">{@render children()}</p>

<style>
  .help {
    color: #6b7775;
    margin: 4px 0 0;
  }
</style>
