import { mount } from 'svelte';
import Config from '../Config.svelte';
import { setupI18n } from '../i18n.js';

const PLUGIN_ID = kintone.$PLUGIN_ID;

const formElement = document.querySelector('.settings');

if (!formElement) {
  throw new Error('Required elements do not exist.');
}

(async () => {
  await setupI18n();

  mount(Config, {
    target: formElement,
    props: { pluginId: PLUGIN_ID }
  });
})();