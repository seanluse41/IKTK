<script>
  let { href, text } = $props();
</script>

<a {href} target="_blank" rel="noopener">{text}</a>

<style>
  a {
    align-self: flex-start;
    color: #3498db;
  }
</style>
