import { mount } from 'svelte';
import Questionnaire from '../components/questionnaire.svelte';

// Inserts a questionnaire <li> right after the comment that announced it.
// Comments can be deleted, so we anchor only to the comment we own
// (commentID), never assume it's adjacent to any other comment.
//
// Note: the comments sidebar renders two elements with the class
// .itemlist-gaia — an empty "upside-comment-items" placeholder (used for
// the "load newer" pagination) and the actual comment list. We search
// across all of them rather than just the first match.
//
// Kintone re-renders the comment list whenever a new comment arrives
// (rather than just prepending one node), which can leave our previously
// inserted wrapper in the wrong position or detached entirely. So on every
// call we re-check that the wrapper still immediately follows its anchor
// comment, and move/recreate it if not.
export function insertQuestionnaires(rows) {
  const lists = document.querySelectorAll('.itemlist-gaia');
  if (lists.length === 0) return;

  rows.forEach((row) => {
    const commentID = row.value.commentID.value;

    const selector = `a[href*="comment=${commentID}"]`;
    let anchorLink = null;
    for (const list of lists) {
      anchorLink = list.querySelector(selector);
      if (anchorLink) break;
    }

    const anchorLi = anchorLink?.closest('.itemlist-item-gaia');
    if (!anchorLi) return; // comment not rendered (e.g. deleted, or older page not loaded)

    const wrapperId = `questionnaire-${commentID}`;
    const existingWrapper = document.getElementById(wrapperId);

    if (existingWrapper && existingWrapper.previousElementSibling === anchorLi) {
      return; // already correctly positioned
    }

    if (existingWrapper) {
      existingWrapper.remove(); // stale position (or detached) — recreate below
    }

    const wrapper = document.createElement('li');
    wrapper.id = wrapperId;
    wrapper.className = 'itemlist-item-gaia itemlist-item-head-gaia';
    anchorLi.insertAdjacentElement('afterend', wrapper);

    mount(Questionnaire, {
      target: wrapper,
      props: { row: row.value },
    });
  });
}