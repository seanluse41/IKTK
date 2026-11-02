import { t } from '../i18n.js';

export function validateFormData(formData) {
  const { title, options, deadline, mentions } = formData;

  if (!title.trim()) {
    return t('validation.titleRequired');
  }

  const filledOptions = options.filter((o) => o.trim());
  if (filledOptions.length < 2) {
    return t('validation.optionsMinimum');
  }

  if (!deadline) {
    return t('validation.deadlineRequired');
  }

  if (new Date(deadline) <= new Date()) {
    return t('validation.deadlineInPast');
  }

  // Kintone refuses a comment that mentions more than 10.
  if (mentions.length > 10) {
    return t('validation.tooManyMentions');
  }

  return null;
}
