English Below ↓

# Kintone 意思決定くん

意思決定くん for Kintone. さくっとレコードのコメント欄にアンケートがとれる。メンション先を入れるだけでチーム内の意思決定や物事の簡単な意見聴取が可能に

[Modern-Modern-Kintone-Plugin-Template](https://github.com/seanluse41/Modern-Modern-Kintone-Plugin-Template) をベースにしています(Vite、Svelte 5、Kintone UI Components、i18n)。

## セットアップ

```bash
npm i
cp .env.example .env
npm run keygen  # 初回のみ: private.ppk を生成
npm run build
npm run pack
npm run upload  # または手動でアップロード
```

プラグイン設定画面で、アンケートデータを保存するリポジトリアプリ(新規作成ボタンあり)とその API トークンを設定します。

## 構造

- `src/js/desktop.js` — `app.record.detail.show` でリポジトリアプリのレコードを取得し、コメント欄に「アンケート」ボタンとアンケート(投票/結果)を差し込みます
- `src/js/config.js` / `src/Config.svelte` — プラグイン設定画面
- `src/components/` — アンケート作成フォーム、メンション入力、コメント欄のアンケート表示
- `src/services/` — kintone API 呼び出しやリポジトリレコードの読み書き
- `src/locales/` — 翻訳(en、ja、es、zh-TW)。`src/i18n.js` の `t` をインポートして使用

KUC コンポーネントはラッパーなしで直接使用します(`new Text()` などで作成し、Svelte の `{@attach}` で配置)。`Dialog` と `Notification` は `document.body` に追加されるため、使用したら `{@attach}` のクリーンアップで `.remove()` してください。

### 締め切り通知

アンケート作成時に [IKTK-reminder](../IKTK-reminder)(AWS SAM)の `/schedule` エンドポイントへ締め切りを送信します。締め切り時刻になると EventBridge Scheduler が通知 Lambda を実行し、リポジトリアプリのレコードに結果をコメントします。

---

# Kintone PollBuddy (意思決定くん)

PollBuddy for Kintone. Create quick polls right in a record's comments — just mention the people you want to hear from.

Based on [Modern-Modern-Kintone-Plugin-Template](https://github.com/seanluse41/Modern-Modern-Kintone-Plugin-Template) (Vite, Svelte 5, Kintone UI Components, i18n).

## Setup

```bash
npm i
cp .env.example .env  # fill in your base URL, username, and password
npm run keygen  # first time only: generates private.ppk
npm run build
npm run pack
npm run upload  # or upload manually
```

In the plugin settings, set the repository app that stores poll data (there's a button to create one) and an API token for it.

## Structure

- `src/js/desktop.js` — on `app.record.detail.show`, loads the record's repository entry and injects the "Poll" button and the polls (vote/results) into the comments sidebar
- `src/js/config.js` / `src/Config.svelte` — plugin settings page
- `src/components/` — poll creation form, mention picker, and the in-comment poll view
- `src/services/` — kintone API calls and repository record reads/writes
- `src/locales/` — translations (en, ja, es, zh-TW); import `t` from `src/i18n.js`

KUC components are used directly, without wrappers: construct one with `new Text()` etc. and place it with a Svelte `{@attach}`. `Dialog` and `Notification` append themselves to `document.body`, so call `.remove()` on them in your `{@attach}` cleanup.

### Deadline notifications

When a poll is created, the plugin sends its deadline to the `/schedule` endpoint of [IKTK-reminder](../IKTK-reminder) (AWS SAM). At the deadline, EventBridge Scheduler invokes the notify Lambda, which posts the results as a comment on the repository app record.
