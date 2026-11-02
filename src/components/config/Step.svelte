<script>
  import HelpIcon from './HelpIcon.svelte';

  let { number, title, help = '', children } = $props();
</script>

<section class="step">
  <h4 class="title">
    <span class="number">{number}</span>
    {title}
    {#if help}<HelpIcon text={help} />{/if}
  </h4>
  <div class="body">
    {@render children()}
  </div>
</section>

<style>
  .title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0;
    font-size: 15px;
  }

  .number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #3498db;
    color: #ffffff;
    font-size: 12px;
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 8px;
    padding-left: 30px;
  }
</style>
