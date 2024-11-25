import axios from 'axios';

const httprequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (path, option = {}) => {
  const respone = await httprequest.get(path, option);
  return respone.data;
};
export default httprequest;
