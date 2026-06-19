import i18next from 'i18next';

// Thin wrapper so components can just call t('config.heading') after
// setupI18n() has resolved. No svelte-i18next dependency needed since
// our usage is simple (no language switching at runtime).
export function t(key, options) {
  return i18next.t(key, options);
}