import en from '../locales/en.json';
import ja from '../locales/ja.json';
import es from '../locales/es.json';
import zhTW from '../locales/zh-tw.json';

/**
 * What the visible comments say about this record's polls, read without
 * asking the server. Every poll has an announcement comment (starting with
 * the anonymous note if it's anonymous), and every ended one a results
 * comment naming that announcement as "(#<id>)" and listing the counts, with
 * who chose what for named polls. A comment is in whatever language its
 * poster used, so all four are tried.
 *
 * The results format is iktk-server's src/messages.mjs; the two must match.
 */

const LOCALES = [en, ja, es, zhTW];

const escape = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// The part of the announcement before the title, e.g. "A poll has started: ".
const STARTED = LOCALES.map((locale) => locale.questionnaireButton.commentBody.split('{{title}}')[0]);

const ANONYMOUS = LOCALES.map((locale) => locale.questionnaireButton.anonymousNote);

// The results comment's first line: the title and the announcement's id.
const ENDED = LOCALES.map(
  (locale) =>
    new RegExp(
      escape(locale.questionnaire.endedLine)
        .replace(escape('{{title}}'), '(.*)')
        .replace(escape('{{id}}'), '(\\d+)')
    )
);

// Each results line, in the same order as LOCALES: label, count, and the
// voters' names on named polls, e.g. "Sushi: 2 votes (Bob, Carol)".
const RESULT_LINES = [
  /^(.*): (\d+) votes?(?: \((.*)\))?$/,
  /^(.*): (\d+)票(?: \((.*)\))?$/,
  /^(.*): (\d+) votos?(?: \((.*)\))?$/,
  /^(.*)：(\d+) 票(?: \((.*)\))?$/,
];

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

/** An ended poll as the poll widget takes it, from its results comment. */
const parseResults = (lines, start, locale, title) => {
  const options = [];
  const votes = {};
  const voters = {};

  for (const line of lines.slice(start + 1)) {
    const match = line.trim().match(RESULT_LINES[locale]);
    if (!match) continue;

    const letter = LETTERS[options.length];
    options.push({ letter, label: match[1] });
    votes[letter] = Number(match[2]);
    if (match[3]) voters[letter] = match[3].split(', ');
  }

  return { title, options, votes, voters };
};

// Comments show line breaks as <br>, which innerText keeps and textContent
// drops. innerText needs the element rendered, which comments always are.
const textOf = (element) => element.innerText ?? element.textContent;

/**
 * { announced, anonymous, ended }: announced and anonymous are sets of
 * announcement ids; ended maps an announcement id to its results.
 */
export const scanPollComments = () => {
  const announced = new Set();
  const anonymous = new Set();
  const ended = new Map();

  for (const item of document.querySelectorAll('.itemlist-gaia .itemlist-item-gaia')) {
    // Our own poll rows reuse Kintone's classes; skip them.
    if (item.id.startsWith('questionnaire-')) continue;

    const text = textOf(item.querySelector('.commentlist-body-gaia') ?? item);

    const id = item.querySelector('a[href*="comment="]')?.href.match(/comment=(\d+)/)?.[1];
    if (id && STARTED.some((phrase) => text.includes(phrase))) {
      announced.add(id);
      if (ANONYMOUS.some((note) => text.includes(note))) anonymous.add(id);
    }

    const lines = text.split('\n');
    lines.forEach((line, index) => {
      ENDED.forEach((pattern, locale) => {
        const match = line.match(pattern);
        if (match) ended.set(match[2], parseResults(lines, index, locale, match[1]));
      });
    });
  }

  return { announced, anonymous, ended };
};
