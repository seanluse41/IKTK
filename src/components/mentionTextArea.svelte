<script>
  import { onMount, onDestroy } from "svelte";
  import { searchDirectory } from "../services/directorySearch.js";
  import { t } from "../t.js";

  let { appId, recordId, mentions = $bindable([]) } = $props();

  let input;
  let query = $state("");
  let dropdown = $state([]);
  let showDropdown = $state(false);
  let dropdownTop = $state(0);
  let dropdownLeft = $state(0);
  let activeIndex = $state(0);

  async function handleInput() {
    const term = query.replace(/^@/, "").trim();
    if (term === "") {
      showDropdown = false;
      return;
    }

    const results = await searchDirectory(term, appId, recordId);
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
    const rect = input.getBoundingClientRect();
    dropdownTop = rect.bottom + window.scrollY + 4;
    dropdownLeft = rect.left + window.scrollX;
  }

  function selectItem(item) {
    if (!mentions.some((m) => m.code === item.code && m.type === item.type)) {
      mentions = [
        ...mentions,
        {
          code: item.code,
          type: item.type,
          name: item.name,
          avatar: item.avatar,
        },
      ];
    }
    query = "";
    showDropdown = false;
    input.focus();
  }

  function removeMention(index) {
    mentions = mentions.filter((_, i) => i !== index);
  }

  function handleKeydown(e) {
    if (!showDropdown) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % dropdown.length;
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + dropdown.length) % dropdown.length;
    } else if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      selectItem(dropdown[activeIndex]);
    } else if (e.key === "Escape") {
      showDropdown = false;
    }
  }

  function handleClickOutside(e) {
    if (input && !input.contains(e.target)) showDropdown = false;
  }

  onMount(() => document.addEventListener("mousedown", handleClickOutside));
  onDestroy(() =>
    document.removeEventListener("mousedown", handleClickOutside),
  );
</script>

<div style="position:relative;">
  <label style="font-size:14px; display:block; margin-bottom:6px;">{t('form.mentionsLabel')}</label
  >
  <input
    bind:this={input}
    bind:value={query}
    oninput={handleInput}
    onkeydown={handleKeydown}
    type="text"
    style="width:100%; box-sizing:border-box; padding:8px; font-size:14px;"
    placeholder={t('form.mentionsPlaceholder')}
  />

  {#if mentions.length > 0}
    <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:8px;">
      {#each mentions as mention, i}
        <span
          style="
          display:flex;
          align-items:center;
          gap:6px;
          background:#f0f4f5;
          border:1px solid #e3e7e8;
          border-radius:16px;
          padding:4px 6px 4px 10px;
          font-size:13px;
        "
        >
          {mention.name ?? mention.code}
          <button
            type="button"
            onclick={() => removeMention(i)}
            aria-label={t('common.remove')}
            style="
              border:none;
              background:none;
              cursor:pointer;
              font-size:14px;
              line-height:1;
              padding:0 4px;
              color:#888;
            ">×</button
          >
        </span>
      {/each}
    </div>
  {/if}

  {#if showDropdown}
    <div
      style="
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
    "
    >
      {#each dropdown as item, i}
        <div
          role="option"
          aria-selected={i === activeIndex}
          onmousedown={(e) => {
            e.preventDefault();
            selectItem(item);
          }}
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
          <img
            src={item.avatar}
            alt=""
            width="24"
            height="24"
            style="border-radius:50%; flex-shrink:0;"
          />
          <span style="font-weight:500;">{item.name}</span>
          <span style="color:#888; font-size:11px; margin-left:auto;"
            >{item.code}</span
          >
        </div>
      {/each}
    </div>
  {/if}
</div>