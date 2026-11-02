// src/services/questionnaireCommentInsertor.js
import { mount, unmount } from 'svelte';
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
//
// Removing the wrapper from the DOM doesn't stop the Svelte component
// mounted inside it, so every mount is tracked here and unmounted before
// it's replaced.
const mounted = new Map();

export function insertQuestionnaires(polls, context) {
  const lists = document.querySelectorAll('.itemlist-gaia');
  if (lists.length === 0) return;

  polls.forEach((poll) => {
    const { commentID } = poll;

    const selector = `a[href*="comment=${commentID}"]`;
    let anchorLink = null;
    for (const list of lists) {
      anchorLink = list.querySelector(selector);
      if (anchorLink) break;
    }

    const anchorLi = anchorLink?.closest('.itemlist-item-gaia');
    if (!anchorLi) return; // comment not rendered (e.g. deleted, or older page not loaded)

    const wrapperId = `questionnaire-${commentID}`;
    const existing = mounted.get(wrapperId);

    if (existing?.wrapper.isConnected && existing.wrapper.previousElementSibling === anchorLi) {
      return; // already correctly positioned
    }

    if (existing) {
      // stale position (or detached by a re-render) — recreate below
      unmount(existing.component);
      existing.wrapper.remove();
      mounted.delete(wrapperId);
    }

    const wrapper = document.createElement('li');
    wrapper.id = wrapperId;
    wrapper.className = 'itemlist-item-gaia itemlist-item-head-gaia';
    anchorLi.insertAdjacentElement('afterend', wrapper);

    const component = mount(Questionnaire, {
      target: wrapper,
      props: { poll, ...context },
    });

    mounted.set(wrapperId, { wrapper, component });
  });
}