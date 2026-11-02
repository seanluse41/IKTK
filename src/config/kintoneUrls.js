import { domain } from './state.svelte.js';

// This app may be in a guest space, whose admin pages live under
// /k/guest/{spaceId}/. The config page's own URL says which.
const thisAppBase = window.location.pathname.match(/^\/k\/(?:guest\/\d+\/)?/)?.[0] ?? '/k/';

/** The repository app's API token settings. It is always created outside any space. */
export const repositoryTokenUrl = (appId) => `${domain.origin}/k/admin/app/apitoken?app=${appId}`;

/** This app's API token settings. */
export const thisAppTokenUrl = (appId) => `${domain.origin}${thisAppBase}admin/app/apitoken?app=${appId}`;
