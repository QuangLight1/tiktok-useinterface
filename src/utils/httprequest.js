import axios from 'axios';

const httprequest = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (path, option = {}) => {
  const respone = await httprequest.get(path, option);
  return respone.data;
};
export default httprequest;
