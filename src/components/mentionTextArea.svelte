<script>
  import { onMount, onDestroy } from 'svelte';
  import { searchDirectory } from '../services/directorySearch.js';

  let { appId, recordId, value = $bindable('') } = $props();

  let textarea;
  let dropdown = $state([]);
  let showDropdown = $state(false);
  let dropdownTop = $state(0);
  let dropdownLeft = $state(0);
  let activeIndex = $state(0);
  let mentionStart = -1;

  function getMentionToken() {
    const cursor = textarea.selectionStart;
    const textBefore = value.slice(0, cursor);
    const match = textBefore.match(/@(\S+)$/);  // requires at least 1 char after @
    return match ? match[1] : null;
  }

  async function handleInput() {
    const token = getMentionToken();
    if (token === null) {
      showDropdown = false;
      return;
    }

    const cursor = textarea.selectionStart;
    const textBefore = value.slice(0, cursor);
    mentionStart = textBefore.lastIndexOf('@');

    const results = await searchDirectory(token, appId, recordId);
    if (results.length === 0) {
      showDropdown = false;
      return;
    }

    dropdown = results;
    activeIndex = 0;
    showDropdown = true;
    positionDropdown();
  }

  function positionDropdown() {
    const rect = textarea.getBoundingClientRect();
    dropdownTop = rect.bottom + window.scrollY + 4;
    dropdownLeft = rect.left + window.scrollX;
  }

  function selectItem(item) {
    const cursor = textarea.selectionStart;
    const before = value.slice(0, mentionStart);
    const after = value.slice(cursor);
    const mention = `@${item.code}`;
    value = `${before}${mention} ${after}`;
    showDropdown = false;

    setTimeout(() => {
      textarea.focus();
      const pos = before.length + mention.length + 1;
      textarea.setSelectionRange(pos, pos);
    }, 0);
  }

  function handleKeydown(e) {
    if (!showDropdown) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % dropdown.length;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + dropdown.length) % dropdown.length;
    } else if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      selectItem(dropdown[activeIndex]);
    } else if (e.key === 'Escape') {
      showDropdown = false;
    }
  }

  function handleClickOutside(e) {
    if (textarea && !textarea.contains(e.target)) showDropdown = false;
  }

  onMount(() => document.addEventListener('mousedown', handleClickOutside));
  onDestroy(() => document.removeEventListener('mousedown', handleClickOutside));
</script>

<div style="position:relative;">
  <label style="font-size:14px; display:block; margin-bottom:6px;">参加者</label>
  <textarea
    bind:this={textarea}
    bind:value
    oninput={handleInput}
    onkeydown={handleKeydown}
    rows="4"
    style="width:100%; box-sizing:border-box; padding:8px; font-size:14px; resize:vertical;"
    placeholder="@名前 でメンション"
  ></textarea>

  {#if showDropdown}
    <div style="
      position:fixed;
      top:{dropdownTop}px;
      left:{dropdownLeft}px;
      background:white;
      border:1px solid #e3e7e8;
      border-radius:4px;
      box-shadow:0 4px 12px rgba(0,0,0,0.15);
      z-index:99999;
      min-width:220px;
      max-height:200px;
      overflow-y:auto;
    ">
      {#each dropdown as item, i}
        <div
          role="option"
          aria-selected={i === activeIndex}
          onmousedown={(e) => { e.preventDefault(); selectItem(item); }}
          style="
            display:flex;
            align-items:center;
            gap:8px;
            padding:8px 12px;
            cursor:pointer;
            background:{i === activeIndex ? '#f5f5f5' : 'white'};
            font-size:13px;
          "
        >
          <img src={item.avatar} alt="" width="24" height="24" style="border-radius:50%; flex-shrink:0;" />
          <span style="font-weight:500;">{item.name}</span>
          <span style="color:#888; font-size:11px; margin-left:auto;">{item.code}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>