<script>
  import { Tooltip } from 'kintone-ui-component';
  import { t } from '../../i18n.js';

  let { text } = $props();

  const tooltip = new Tooltip({ describeChild: true, placement: 'top' });

  $effect(() => {
    tooltip.title = text;
  });

  const mount = (node) => {
    tooltip.container = node.firstElementChild;
    node.appendChild(tooltip);
    return () => tooltip.remove();
  };
</script>

<span class="help-icon" {@attach mount}>
  <button type="button" class="icon" aria-label={t('config.help')}>?</button>
</span>

<style>
  .help-icon {
    display: inline-flex;
    vertical-align: middle;
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: #3498db;
    color: #ffffff;
    font-size: 11px;
    font-weight: bold;
    line-height: 1;
    cursor: help;
  }

  .icon:focus-visible {
    outline: 2px solid #3498db;
    outline-offset: 2px;
  }
</style>
