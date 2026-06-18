export function validateFormData(formData) {
  const { title, options, deadline } = formData;

  if (!title.trim()) {
    return 'タイトルを入力してください';
  }

  const filledOptions = options.filter((o) => o.trim());
  if (filledOptions.length < 2) {
    return '選択肢を2つ以上入力してください';
  }

  if (!deadline) {
    return '締め切りを入力してください';
  }

  if (new Date(deadline) <= new Date()) {
    return '締め切りは未来の日時を指定してください';
  }

  return null;
}