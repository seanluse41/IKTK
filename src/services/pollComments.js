import en from '../locales/en.json';
import ja from '../locales/ja.json';
import es from '../locales/es.json';
import zhTW from '../locales/zh-tw.json';

/**
 * Which polls the visible comments say exist, and which have ended, read
 * without asking the server. Every poll has an announcement comment, and
 * every ended one a results comment naming that announcement as "(#<id>)".
 * A comment is in whatever language its poster used, so all four are tried.
 */

const LOCALES = [en, ja, es, zhTW];

const escape = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// The part of the announcement before the title, e.g. "A poll has started: ".
const STARTED = LOCALES.map((locale) => locale.questionnaireButton.commentBody.split('{{title}}')[0]);

// The results comment's first line, with the title and announcement id open.
// Must match iktk-server's src/messages.mjs.
const ENDED = LOCALES.map(
  (locale) =>
    new RegExp(
      escape(locale.questionnaire.endedLine)
        .replace(escape('{{title}}'), '.*')
        .replace(escape('{{id}}'), '(\\d+)')
    )
);

/** { announced, ended }: sets of announcement comment ids. */
export const scanPollComments = () => {
  const announced = new Set();
  const ended = new Set();

  for (const item of document.querySelectorAll('.itemlist-gaia .itemlist-item-gaia')) {
    // Our own poll rows reuse Kintone's classes; skip them.
    if (item.id.startsWith('questionnaire-')) continue;

    const text = (item.querySelector('.commentlist-body-gaia') ?? item).textContent;

    const id = item.querySelector('a[href*="comment="]')?.href.match(/comment=(\d+)/)?.[1];
    if (id && STARTED.some((phrase) => text.includes(phrase))) announced.add(id);

    for (const pattern of ENDED) {
      const match = text.match(pattern);
      if (match) ended.add(match[1]);
    }
  }

  return { announced, ended };
};
