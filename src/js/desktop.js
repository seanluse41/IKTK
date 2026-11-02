import { getConfig } from '../config/pluginConfig.js';
import { errorMessage, listPolls } from '../services/iktkApi.js';
import { scanPollComments } from '../services/pollComments.js';
import { createQuestionnaireButton } from '../services/questionnaireButtonCreator.js';
import { insertQuestionnaires } from '../services/questionnaireCommentInsertor.js';

// detail.show fires again when moving between records without a full page
// load, so the previous record's observer is disconnected first.
let observer;

kintone.events.on('app.record.detail.show', async () => {
  observer?.disconnect();
  // The button's click handler belongs to the record it was made for; if
  // Kintone keeps the comment editor between records, make it again.
  document.getElementById('questionnaire-create-btn')?.remove();

  const config = getConfig();
  if (!config.endpoint) {
    console.warn('PollBuddy is not set up for this app yet. Finish Initial setup in the plugin settings.');
    return;
  }

  const appId = String(kintone.app.getId());
  const recordId = String(kintone.app.record.getId());
  const loginUser = kintone.getLoginUser();

  // Kept current by the create/vote flows, which hand back the poll as the
  // server saved it, so polls re-inserted after a comment re-render reflect it.
  let polls = [];

  // Announcements already asked about (or created here), so each one costs
  // at most one request however often the comments re-render.
  const asked = new Set();
  let loading = false;

  const onPollChange = (poll) => {
    asked.add(poll.commentID);
    polls = [...polls.filter((p) => p.commentID !== poll.commentID), poll];
  };

  // The server is only asked when a visible announcement has no results
  // comment yet: most records have no poll at all, and an ended poll's
  // results comment already shows its outcome. So an ended poll gets no row
  // of its own, unless its results haven't been posted.
  const update = async () => {
    const { announced, ended } = scanPollComments();
    const unasked = [...announced].filter((id) => !ended.has(id) && !asked.has(id));

    if (unasked.length > 0 && !loading) {
      unasked.forEach((id) => asked.add(id));
      loading = true;
      try {
        ({ polls } = await listPolls({ appId, recordId, userCode: loginUser.code }));
        polls.forEach((poll) => asked.add(poll.commentID));
      } catch (error) {
        console.error('Could not load polls:', error);
        kintone.showNotification('ERROR', errorMessage(error));
      } finally {
        loading = false;
      }
    }

    insertQuestionnaires(
      polls.filter((poll) => !ended.has(poll.commentID)),
      { appId, recordId, loginUser, onPollChange }
    );
  };

  let canCreatePoll = true;
  if (!config.allowNonAdminPoll) {
    const permissions = await kintone.app.getPermissions();
    canCreatePoll = permissions.editApp;
  }

  const sideBarState = await kintone.app.record.getSideBarDisplayState();
  if (sideBarState !== 'COMMENTS') {
    await kintone.app.record.showSideBar('COMMENTS');
  }

  update();

  observer = new MutationObserver(() => {
    if (canCreatePoll) {
      createQuestionnaireButton({ appId, recordId, onPollChange });
    }

    update();
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
