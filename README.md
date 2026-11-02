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

プラグイン設定画面の「初期設定」に沿って、リポジトリアプリ・サーバー・APIトークンを設定します(下の「サーバー」を参照)。

## 構造

- `src/js/desktop.js` — `app.record.detail.show` でサーバーからそのレコードのアンケートを取得し、コメント欄に「アンケート」ボタンとアンケート(投票/結果)を差し込みます
- `src/js/config.js` / `src/Config.svelte` — プラグイン設定画面
- `src/components/` — アンケート作成フォーム、メンション入力、コメント欄のアンケート表示
- `src/services/` — コメント投稿やサーバー(`iktkApi.js`)の呼び出し
- `src/config/`、`src/components/config/` — 設定画面のロジックと部品
- `src/locales/` — 翻訳(en、ja、es、zh-TW)。`src/i18n.js` の `t` をインポートして使用

KUC コンポーネントはラッパーなしで直接使用します(`new Text()` などで作成し、Svelte の `{@attach}` で配置)。`Dialog` と `Notification` は `document.body` に追加されるため、使用したら `{@attach}` のクリーンアップで `.remove()` してください。

### サーバー

アンケートの保存・投票の集計・結果の投稿は、ドメインごとのサーバー([IKTK-reminder](../IKTK-reminder))が行います。プラグイン設定の「初期設定」で、リポジトリアプリの作成、APIトークンの発行、サーバーの用意、このアプリのAPIトークンの登録を順に行います。リポジトリアプリは管理者と作成者しか開けず、ユーザーのブラウザーからは `kintone.plugin.app.proxy` 経由でのみサーバーにアクセスします。IPアドレス制限をしているドメインでは、サーバーの固定IP(`src/config/constants.js` の `EGRESS_IPS`)を先に許可する必要があります(設定画面の手順3に表示)。インストールから結果投稿までのすべてのリクエストは、英語版の「Requests, step by step」の表にまとめています(IKTK-reminder の README と同じ内容)。

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

In the plugin settings, follow Initial setup to create the repository app, provision the server, and add the API tokens (see Server below).

## Structure

- `src/js/desktop.js` — on `app.record.detail.show`, loads the record's polls from the server and injects the "Poll" button and the polls (vote/results) into the comments sidebar
- `src/js/config.js` / `src/Config.svelte` — plugin settings page
- `src/components/` — poll creation form, mention picker, and the in-comment poll view
- `src/services/` — posting comments and calling the server (`iktkApi.js`)
- `src/config/`, `src/components/config/` — settings page logic and pieces
- `src/locales/` — translations (en, ja, es, zh-TW); import `t` from `src/i18n.js`

KUC components are used directly, without wrappers: construct one with `new Text()` etc. and place it with a Svelte `{@attach}`. `Dialog` and `Notification` append themselves to `document.body`, so call `.remove()` on them in your `{@attach}` cleanup.

### Server

Polls are stored, counted, and posted by a per-domain server ([IKTK-reminder](../IKTK-reminder)). Initial setup in the plugin settings walks through creating the repository app, its API token, provisioning the server, and this app's API token. The repository app is locked to administrators and its creator; users' browsers only reach the server through `kintone.plugin.app.proxy`, which adds the app's token from proxy config. `CONTROL_PLANE_HOST` in `src/config/constants.js` is the one hardcoded address. Domains with cybozu.com IP address restrictions must allow the server's fixed IP (`EGRESS_IPS` in the same file) before provisioning; the config screen says so in step 3. Every request the plugin and server make is listed below, and kept in sync with [IKTK-reminder's README](../IKTK-reminder/README.md#requests-step-by-step).

### Requests, step by step

Who calls what, from install to a poll's results. **From → to**:

- **Browser → kintone**: the user's own session, so it runs with their permissions
- **Browser → AWS**: `fetch` straight to the control plane
- **Proxy → AWS**: `kintone.plugin.app.proxy`, where kintone's servers call the domain API and add the app's token from proxy config
- **Lambda → kintone**: API-token calls to the customer's domain
- **Lambda → AWS**: SSM, DynamoDB, CloudFormation, EventBridge Scheduler

"Repo" is the repository app; "this app" is the app the plugin runs in.

#### 1. Install and add to an app

No requests: none of our code runs until someone opens the settings page.

#### 2. Plugin settings page

| When | From → to | Request | Then, on the server |
|---|---|---|---|
| Page load, app has no endpoint | Browser → AWS | `GET /domains/{domain}?proof=` (lookup) | DynamoDB get; `DescribeStacks` only if the endpoint wasn't saved yet |
| Page load, provisioning ID saved | Browser → AWS | `GET /provisions/{id}`, every 5 s until done | 2 DynamoDB gets, `DescribeStacks` |
| Create repository app | Browser → kintone | `preview/app.json`, `app/settings.json`, `app/form/fields.json`, `app/acl.json`, `app/deploy.json`, then `GET deploy.json` every 1 s | — |
| Provision server | Browser → AWS | `POST /domains` | kintone `GET records.json` on repo (token check); SSM `PutParameter`; `DescribeStacks` + `CreateStack`; DynamoDB puts. The stack builds for a few minutes. |
| Save | Browser → kintone | `GET records.json` on this app with the pasted token (token check) | — then `setProxyConfig`, `setConfig` |
| Delete server | Browser → AWS | `DELETE /domains` | kintone token check on repo; `DeleteStack`; SSM `GetParametersByPath` + `DeleteParameters`; DynamoDB delete |

#### 3. Opening a record

| When | From → to | Request | Then, on the server |
|---|---|---|---|
| Record view, no announcement comment without results | — | **none** | — |
| Record view, an announcement without its results comment (an open poll) | Proxy → AWS | `POST /polls/list`, once per announcement however often the comments redraw | kintone `GET records.json` on this app (token check, cached 5 min per warm Lambda); SSM repo token (cached 60 s); kintone `GET records.json` on **repo** |
| "Allow non-admins" off | — | `kintone.app.getPermissions()` (JS API) | — |
| Typing in the mention picker | Browser → kintone | `POST /k/api/directory/search.json`, **every keystroke**, kintone's internal (undocumented) endpoint | — |
| Comment list redraws | — | none, unless a new open announcement appears (e.g. older comments loaded) | — |

The plugin reads the visible comments first ([`src/services/pollComments.js`](src/services/pollComments.js)). Every poll has an announcement comment, and every ended poll a results comment whose first line ends with `(#<announcement id>)` and lists every count (and, for named polls, who chose what). So most records, which have no poll, never call the server, and an ended poll's graph, names included, is drawn from its results comment without one.

#### 4. Creating a poll

| # | From → to | Request |
|---|---|---|
| 1 | Browser → kintone | `POST record/comment.json` on this record, as the user; kintone notifies the mentioned users |
| 2 | Proxy → AWS | `POST /polls/create` |
| 2a | Lambda → kintone | token check on this app (if not cached) |
| 2b | Lambda → kintone | `GET records.json` on repo: does this poll exist already? |
| 2c | Lambda → kintone | `GET record/comments.json` on this record (newest 10), with this app's token: confirms the comment, its author and mentions |
| 2d | Lambda → kintone | `GET records.json` on repo again (redundant: `addRow` looks it up a second time) |
| 2e | Lambda → kintone | First poll on the record: `POST record.json`. Otherwise `GET record.json` + `PUT record.json` with its revision, retried (up to 3 times in all) if someone saved in between |
| 2f | Lambda → AWS | SSM `PutParameter`: this app's token, for the results comment |
| 2g | Lambda → AWS | Scheduler `CreateSchedule` at the deadline |
| 2h | Lambda → AWS | Scheduler `CreateSchedule` for the reminder, if one was picked |

#### 5. While a poll is open

| When | From → to | Request | Then, on the server |
|---|---|---|---|
| Record view | Proxy → AWS | `POST /polls/list`, as in section 3 (the poll's results comment isn't there yet) | The server works out "voted" and "ended" |
| Vote, or change a vote | Proxy → AWS | `POST /polls/vote` | token check (if not cached); kintone `GET records.json` on repo; `GET record.json` + `PUT record.json` with revision, retried on conflict |
| Add an option | Proxy → AWS | `POST /polls/add-option` | the same as a vote |

#### 6. When the poll ends

| # | From → to | Request |
|---|---|---|
| 1 | AWS → Lambda | EventBridge Scheduler invokes the notify Lambda at the deadline; the schedule then deletes itself (2 retries on failure) |
| 2 | Lambda → AWS | SSM: repo token (not cached here) |
| 3 | Lambda → kintone | `GET records.json` on repo: final counts |
| 4 | Lambda → AWS | SSM: this app's token |
| 5 | Lambda → kintone | `POST record/comment.json` on the poll's record, with this app's token: posted as "Administrator", first line ending in `(#<announcement id>)`; kintone notifies the mentioned users |

A reminder, if one was picked, runs steps 1–5 the same way at its own time, posting the reminder comment instead of the results.

Later record views: no request; the poll's graph is drawn from its results comment. (Results comments posted before `(#id)` was added don't name their poll, so those records still make one `/polls/list` call and show the poll as ended.)

#### kintone's limit of 10,000 API requests per app per day

| App | Requests |
|---|---|
| **Repository app** (shared by every app in the domain) | 1 per view of a record with an open poll, about 4 per poll created, 3 per vote or added option, 1 per poll ending, 1 per reminder. Views of records without an open poll cost nothing. |
| Each app with the plugin | Token checks (at most one per 5 minutes per warm Lambda), 1 comment read per poll created, 1 results comment per poll, 1 reminder comment if picked, plus the user's own announcement comment |
