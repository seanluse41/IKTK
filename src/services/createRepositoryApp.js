// src/services/createRepositoryApp.js
import { ADMIN_GROUP_CODE } from '../config/constants.js';
import { t } from '../i18n.js';

/**
 * Creates and deploys the repository app: one per Kintone domain, one record
 * per source record, with a subtable row per poll. The IKTK server reads and
 * writes it with its API token; users never touch it directly.
 *
 * Returns the new app's id.
 */

const api = (path, method, body) => kintone.api(kintone.api.url(path, true), method, body);

const REPOSITORY_FIELDS = {
  appID: {
    type: 'SINGLE_LINE_TEXT',
    code: 'appID',
    label: 'App ID',
    noLabel: false,
    required: true,
  },
  RecordID: {
    type: 'SINGLE_LINE_TEXT',
    code: 'RecordID',
    label: 'Record ID',
    noLabel: false,
    required: true,
  },
  table: {
    type: 'SUBTABLE',
    code: 'table',
    label: 'Questionnaires',
    fields: {
      commentID: { type: 'SINGLE_LINE_TEXT', code: 'commentID', label: 'Comment ID', noLabel: false, required: true },
      title: { type: 'SINGLE_LINE_TEXT', code: 'title', label: 'Title', noLabel: false, required: true },
      startTime: { type: 'DATETIME', code: 'startTime', label: 'Start Time', noLabel: false, required: true },
      endTime: { type: 'DATETIME', code: 'endTime', label: 'End Time', noLabel: false, required: true },
      votes: { type: 'SINGLE_LINE_TEXT', code: 'votes', label: 'Votes', noLabel: false, required: false },
      users: { type: 'USER_SELECT', code: 'users', label: 'Mentioned Users', noLabel: false, required: false },
      group: { type: 'GROUP_SELECT', code: 'group', label: 'Mentioned Groups', noLabel: false, required: false },
      org: { type: 'ORGANIZATION_SELECT', code: 'org', label: 'Mentioned Organizations', noLabel: false, required: false },
      creator: { type: 'USER_SELECT', code: 'creator', label: 'Creator', noLabel: false, required: true },
      votedUsers: { type: 'USER_SELECT', code: 'votedUsers', label: 'Voted Users', noLabel: false, required: false },
      options: { type: 'MULTI_LINE_TEXT', code: 'options', label: 'Options', noLabel: false, required: true },
    },
  },
};

const FULL_ACCESS = {
  appEditable: true,
  recordViewable: true,
  recordAddable: true,
  recordEditable: true,
  recordDeletable: true,
  recordImportable: true,
  recordExportable: true,
};

/**
 * Locks the app down to administrators and its creator. It holds every poll
 * in the domain, including polls on records and apps a user can't open, so
 * Everyone gets nothing at all; the server writes with its API token, which
 * app permissions don't restrict.
 *
 * CREATOR is kept so whoever runs this does not lock themselves out if they
 * are not in the administrators group.
 */
const restrictAppAccess = (app) =>
  api('/k/v1/preview/app/acl.json', 'PUT', {
    app,
    rights: [
      { entity: { type: 'CREATOR' }, ...FULL_ACCESS },
      { entity: { type: 'GROUP', code: ADMIN_GROUP_CODE }, ...FULL_ACCESS },
      {
        entity: { type: 'GROUP', code: 'everyone' },
        appEditable: false,
        recordViewable: false,
        recordAddable: false,
        recordEditable: false,
        recordDeletable: false,
        recordImportable: false,
        recordExportable: false,
      },
    ],
  });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Deployment is asynchronous: deploy.json returns before the app is live, and
 * a token made for an app still deploying doesn't work. Poll until it settles.
 */
const waitForDeploy = async (app, { attempts = 30, intervalMs = 1000 } = {}) => {
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const { apps } = await api('/k/v1/preview/app/deploy.json', 'GET', { apps: [app] });
    const status = apps[0]?.status;

    if (status === 'SUCCESS') return;
    if (status === 'FAIL' || status === 'CANCEL') {
      throw new Error(`App deployment ${status.toLowerCase()}ed.`);
    }

    await sleep(intervalMs);
  }

  throw new Error('Timed out waiting for the app to deploy.');
};

export async function createRepositoryApp() {
  // Add Preview App only accepts name/space/thread; the description has to be
  // set separately or it is silently dropped.
  const { app } = await api('/k/v1/preview/app.json', 'POST', {
    name: t('config.repositoryAppName'),
  });

  await api('/k/v1/preview/app/settings.json', 'PUT', {
    app,
    description: t('config.repositoryAppDescription'),
  });

  await api('/k/v1/preview/app/form/fields.json', 'POST', {
    app,
    properties: REPOSITORY_FIELDS,
  });

  await restrictAppAccess(app);

  await api('/k/v1/preview/app/deploy.json', 'POST', { apps: [{ app }] });
  await waitForDeploy(app);

  return String(app);
}
