<script>
  import Button from './builders/desktop/button.svelte';
  import Text from './builders/desktop/text.svelte';
  import Checkbox from './builders/desktop/checkbox.svelte';
  import Notification from './builders/desktop/notification.svelte';
  import { createRepositoryApp } from './services/createRepositoryApp.js';

  let { pluginId } = $props();

  let config = $state({
    repoAppId: '',
    allowNonAdminPoll: false,
  });

  let repoToken = $state('');

  const savedConfig = kintone.plugin.app.getConfig(pluginId);
  if (savedConfig.repoAppId) {
    config.repoAppId = savedConfig.repoAppId;
  }
  config.allowNonAdminPoll = savedConfig.allowNonAdminPoll === 'true';
  if (savedConfig.repoToken) {
    repoToken = savedConfig.repoToken;
  }

  let successNotification;
  let errorNotification;

  let successText = $state('');
  let errorText = $state('');

  let repoAppIdError = $state('');
  let isCreatingApp = $state(false);

  function showSuccess(message) {
    successText = message;
    successNotification.open();
  }

  function showError(message) {
    errorText = message;
    errorNotification.open();
  }

  async function handleCreateRepository() {
    const confirmed = confirm('アンケートデータを保存する新しいアプリを作成します。よろしいですか？');
    if (!confirmed) return;

    isCreatingApp = true;

    try {
      const newAppId = await createRepositoryApp();
      config.repoAppId = String(newAppId);
      repoAppIdError = '';

      if (repoToken) {
        repoToken = '';
      }

      showSuccess(`リポジトリアプリを作成しました！App ID: ${newAppId}`);
    } catch (error) {
      console.error('Failed to create repository app:', error);
      showError('リポジトリアプリの作成に失敗しました');
    } finally {
      isCreatingApp = false;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!config.repoAppId.trim()) {
      repoAppIdError = 'Repository App ID は必須項目です';
      showError('Repository App ID is required');
      return;
    }
    repoAppIdError = '';

    kintone.plugin.app.setConfig({
      repoToken,
      repoAppId: config.repoAppId,
      allowNonAdminPoll: String(config.allowNonAdminPoll),
    }, () => {
      showSuccess('設定を保存しました！');
      setTimeout(() => {
        window.location.href = '../../flow?app=' + kintone.app.getId();
      }, 2000);
    });
  }

  function handleCancel() {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  }

  function handleRepoAppIdChange(e) {
    config.repoAppId = e.detail.value;
    if (repoAppIdError) {
      repoAppIdError = '';
    }
  }

  function handleAllowNonAdminPollChange(e) {
    config.allowNonAdminPoll = e.detail.value.length > 0;
  }
</script>

<div class="config-container">
  <h1>意思決定くん設定</h1>
  <p class="subtitle">アプリ毎の設定になりますのでご注意ください。</p>

  <form onsubmit={handleSubmit}>
    <div class="section">
      <h2>Repository App</h2>

      <Text
        label="Repository App ID"
        value={config.repoAppId}
        placeholder="アンケートデータを保存するリポジトリアプリのApp ID"
        requiredIcon={true}
        error={repoAppIdError}
        onchange={handleRepoAppIdChange}
      />

      <div class="button-group">
        <Button
          text={isCreatingApp ? '作成中...' : 'リポジトリアプリを新規作成'}
          type="normal"
          disabled={isCreatingApp}
          onclick={handleCreateRepository}
        />
      </div>

      <p class="info-text">
        新規作成すると、上の欄に新しいApp IDが自動で入力されます。保存ボタンを押すまで設定は反映されません。
      </p>

      <label class="token-label" for="repoToken">
        Repository App API Token:
        <input
          type="password"
          class="token-input"
          id="repoToken"
          bind:value={repoToken}
        />
      </label>
      <p class="info-text">
        リポジトリアプリを新規作成した場合は、新しいAPIトークンを発行して入力してください。
      </p>
    </div>

    <div class="section">
      <h2>Options</h2>

      <div class="checkbox-container">
        <Checkbox
          label="Allow non-admin users to create polls"
          items={[{ label: 'アプリの管理者権限を持たないユーザーにもアンケート作成を許可する', value: 'allowNonAdminPoll' }]}
          value={config.allowNonAdminPoll ? ['allowNonAdminPoll'] : []}
          onchange={handleAllowNonAdminPollChange}
        />
      </div>
    </div>

    <div class="form-actions">
      <Button
        text="Save"
        type="submit"
        onclick={handleSubmit}
      />

      <Button
        text="Cancel"
        type="normal"
        onclick={handleCancel}
      />
    </div>
  </form>
</div>

<Notification
  bind:this={successNotification}
  text={successText}
  type="success"
  duration={2000}
/>

<Notification
  bind:this={errorNotification}
  text={errorText}
  type="danger"
  duration={2000}
/>

<style>
  .config-container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 4px;
  }

  .subtitle {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 13px;
    color: #666;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 15px;
    margin-top: 0;
  }

  .section {
    margin-bottom: 30px;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 4px;
  }

  .button-group {
    display: flex;
    gap: 10px;
    margin-top: 15px;
  }

  .checkbox-container {
    margin-bottom: 15px;
  }

  .form-actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }

  .info-text {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
  }

  .token-label {
    display: block;
    margin-top: 20px;
    font-size: 14px;
  }

  .token-input {
    display: block;
    margin-top: 6px;
    padding: 8px;
    font-size: 14px;
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
  }
</style>