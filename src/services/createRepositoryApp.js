// src/services/createRepositoryApp.js

/**
 * Creates and deploys a new kintone app to act as the questionnaire
 * repository, with the exact field set this plugin reads/writes
 * (see buildQuestionnaireRow.js, getRepositoryRecord.js, submitVote.js).
 *
 * Returns the new app's numeric id.
 */
export async function createRepositoryApp() {
  try {
    // Step 1: Create the app
    const createAppBody = {
      name: '意思決定くん リポジトリ',
      description: 'Repository app for 意思決定くん questionnaire data',
    };

    const createAppResponse = await kintone.api(
      kintone.api.url('/k/v1/preview/app.json', true),
      'POST',
      createAppBody
    );

    const newAppId = createAppResponse.app;

    // Step 2: Add fields matching what buildQuestionnaireRow.js,
    // getRepositoryRecord.js, and submitVote.js actually read/write.
    const addFieldsBody = {
      app: newAppId,
      properties: {
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
            commentID: {
              type: 'SINGLE_LINE_TEXT',
              code: 'commentID',
              label: 'Comment ID',
              noLabel: false,
              required: true,
            },
            title: {
              type: 'SINGLE_LINE_TEXT',
              code: 'title',
              label: 'Title',
              noLabel: false,
              required: true,
            },
            startTime: {
              type: 'DATETIME',
              code: 'startTime',
              label: 'Start Time',
              noLabel: false,
              required: true,
            },
            endTime: {
              type: 'DATETIME',
              code: 'endTime',
              label: 'End Time',
              noLabel: false,
              required: true,
            },
            votes: {
              type: 'SINGLE_LINE_TEXT',
              code: 'votes',
              label: 'Votes',
              noLabel: false,
              required: false,
            },
            users: {
              type: 'USER_SELECT',
              code: 'users',
              label: 'Mentioned Users',
              noLabel: false,
              required: false,
            },
            group: {
              type: 'GROUP_SELECT',
              code: 'group',
              label: 'Mentioned Groups',
              noLabel: false,
              required: false,
            },
            org: {
              type: 'ORGANIZATION_SELECT',
              code: 'org',
              label: 'Mentioned Organizations',
              noLabel: false,
              required: false,
            },
            creator: {
              type: 'USER_SELECT',
              code: 'creator',
              label: 'Creator',
              noLabel: false,
              required: true,
            },
            votedUsers: {
              type: 'USER_SELECT',
              code: 'votedUsers',
              label: 'Voted Users',
              noLabel: false,
              required: false,
            },
            options: {
              type: 'MULTI_LINE_TEXT',
              code: 'options',
              label: 'Options',
              noLabel: false,
              required: true,
            },
          },
        },
      },
    };

    await kintone.api(
      kintone.api.url('/k/v1/preview/app/form/fields.json', true),
      'POST',
      addFieldsBody
    );

    // Step 3: Set app permissions (before deployment). The plugin
    // authenticates with an API token (configured separately), so
    // app-level user/group access can stay restrictive — only the
    // app creator gets UI access.
    const permissionsBody = {
      app: newAppId,
      rights: [
        {
          entity: {
            type: 'CREATOR',
          },
          appEditable: true,
          recordViewable: true,
          recordAddable: true,
          recordEditable: true,
          recordDeletable: false,
          recordImportable: false,
          recordExportable: false,
        },
        {
          entity: {
            type: 'GROUP',
            code: 'everyone',
          },
          appEditable: false,
          recordViewable: false,
          recordAddable: false,
          recordEditable: false,
          recordDeletable: false,
          recordImportable: false,
          recordExportable: false,
        },
      ],
    };

    await kintone.api(
      kintone.api.url('/k/v1/preview/app/acl.json', true),
      'PUT',
      permissionsBody
    );

    // Step 4: Deploy the app
    const deployBody = {
      apps: [{ app: newAppId }],
    };

    await kintone.api(
      kintone.api.url('/k/v1/preview/app/deploy.json', true),
      'POST',
      deployBody
    );

    return newAppId;
  } catch (error) {
    console.error('Error creating repository app:', error);
    throw error;
  }
}