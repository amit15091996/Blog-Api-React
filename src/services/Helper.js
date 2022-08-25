import axois from "axios";
import { getToken } from "../auth";

export const BASE_URL = "http://localhost:9090/api/v1/";

export const myAxios = axois.create({
  baseURL: BASE_URL,
});

export const privateAxios = axois.create({
  baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`;
      return config;
    }
  },
  (error) => Promise.reject(error)
);

// export const myAxios = axois.create()

// myAxios.post('http://localhost:9090/api/v1/auth/register');
