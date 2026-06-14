export async function postComment(body) {
  const response = await kintone.api(
    kintone.api.url('/k/v1/record/comment.json', true),
    'POST',
    body
  );

  return response.id;
}