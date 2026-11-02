<script>
  import { untrack } from 'svelte';
  import { FieldGroup } from 'kintone-ui-component';

  let { label, expanded = false, reveal = false, danger = false, children } = $props();

  const group = new FieldGroup({ expanded: untrack(() => expanded) });

  $effect(() => {
    group.label = label;
  });

  $effect(() => {
    if (reveal) group.expanded = true;
  });

  const mount = (node) => {
    group.content = node.firstElementChild;
    node.appendChild(group);
    return () => group.remove();
  };
</script>

<div class="field-group" class:danger {@attach mount}>
  <div class="field-group-body">
    {@render children()}
  </div>
</div>

<style>
  .field-group {
    max-width: 720px;
  }

  .danger {
    width: fit-content;
    outline: 1px solid #e74c3c;
    outline-offset: -1px;
  }

  .field-group-body {
    box-sizing: border-box;
    padding: 0 4px 8px;
    white-space: normal;
  }
</style>
