import * as httprequest from '~/utils/httprequest';

export const search = async (q, type = 'less') => {
  if (!q || !q.trim()) {
    return [];
  }

  try {
    const res = await httprequest.get('users/search', {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

search();
