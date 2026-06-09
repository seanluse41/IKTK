export async function searchDirectory(term, appId, recordId) {
  const params = new URLSearchParams();
  params.append('_lc', kintone.getLoginUser().language);
  params.append('_ref', encodeURI(window.location.href));

  const response = await fetch(`/k/api/directory/search.json?${params}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ term, appId, recordId, spaceId: null }),
  });

  const data = await response.json();
  console.log('directory search response:', data);

  if (!data.result) return [];

  const { users, orgs, groups } = data.result;

  return [
    ...users.map(u => ({ code: u.code, name: u.name, type: 'USER', avatar: u.photo?.size_24 || '' })),
    ...orgs.map(o => ({ code: o.code, name: o.name, type: 'ORGANIZATION', avatar: 'https://static.cybozu.com/contents/k/image/argo/preset/user/organization_48.png' })),
    ...groups.map(g => ({ code: g.code, name: g.name, type: 'GROUP', avatar: 'https://static.cybozu.com/contents/k/image/argo/preset/user/group_48.png' })),
  ];
}