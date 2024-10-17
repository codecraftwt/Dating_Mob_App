import axios from 'axios';
import { baseURL } from './api';
// import { getToken } from './StorageUtils';

const instance = axios.create({
  baseURL: `${baseURL}`,
});

instance.interceptors.request.use(
  async config => {
    // const token = await getToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;