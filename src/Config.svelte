<script>
  let { pluginId } = $props();
  
  let message = $state('');
  let repoToken = $state('');

  const config = kintone.plugin.app.getConfig(pluginId);
  if (config.message) {
    message = config.message;
  }
  if (config.repoToken) {
    repoToken = config.repoToken;
  }

  function handleSubmit(e) {
    e.preventDefault();
    kintone.plugin.app.setConfig({ message, repoToken }, () => {
      alert('The plug-in settings have been saved. Please update the app!');
      window.location.href = '../../flow?app=' + kintone.app.getId();
    });
  }

  function handleCancel() {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  }
</script>

<h2 class="settings-heading">意思決定くん設定</h2>
<p class="kintoneplugin-desc">アプリ毎の設定になりますのでご注意ください。</p>

<form class="js-submit-settings" onsubmit={handleSubmit}>
  <p class="kintoneplugin-row">
    <label for="repoToken">
      Repository App API Token:
      <input
        type="password"
        class="kintoneplugin-input-text"
        id="repoToken"
        bind:value={repoToken}
      />
    </label>
  </p>
  <p class="kintoneplugin-row">
    <button type="button" class="kintoneplugin-button-dialog-cancel" onclick={handleCancel}>
      Cancel
    </button>
    <button class="kintoneplugin-button-dialog-ok">Save</button>
  </p>
</form>