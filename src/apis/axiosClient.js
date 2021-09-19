import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "constants/config";
import { GET_USER } from "constants/localStorage";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    TokenCybersoft: TOKEN_CYBERSOFT,
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const user = JSON.parse(localStorage.getItem(GET_USER));
    if (user && typeof user !== "string") {
      // nếu có đăng nhập thì thực hiện
      const { accessToken } = user;
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
