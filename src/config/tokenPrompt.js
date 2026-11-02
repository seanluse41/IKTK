import { Text } from 'kintone-ui-component';
import { t } from '../i18n.js';

/**
 * Dialog content asking for the repository app's API token, which is never
 * stored in Kintone, so it is asked for at the moment it's needed. Returns the
 * content for ui.dialog and a function that reads what was typed.
 */
export const repositoryTokenPrompt = (helpText) => {
  const field = new Text({ label: t('config.repositoryToken'), value: '' });

  const content = document.createElement('div');
  const help = document.createElement('p');
  help.className = 'repository-token-help';
  help.textContent = helpText;
  content.append(help, field);

  return { content, token: () => field.value.trim() };
};
