import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL, TOKEN_CYBERSOFT } from 'constants/config';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    TokenCybersoft: TOKEN_CYBERSOFT,
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const user = localStorage.getItem('user');
    if (user) {
      // nếu có đăng nhập thì thực hiện
      const { accessToken } = JSON.parse(user);
      config.headers.common.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
