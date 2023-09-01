import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const { FEEDBACK_PORT } = process.env;

class HTTPService {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: `http://feedback:${FEEDBACK_PORT}/api`,
    });
  }

  get = (
    url: string,
    options: AxiosRequestConfig = {},
  ): Promise<AxiosResponse> => {
    return this.axios.get(url, {
      ...options,
    });
  };

  delete = (
    url: string,
    options: AxiosRequestConfig = {},
  ): Promise<AxiosResponse> => {
    return this.axios.delete(url, {
      ...options,
    });
  };

  patch = (
    url: string,
    data: any,
    options: AxiosRequestConfig = {},
  ): Promise<AxiosResponse> => {
    return this.axios.patch(url, data, {
      ...options,
    });
  };

  post = (
    url: string,
    data: any,
    options: AxiosRequestConfig = {},
  ): Promise<AxiosResponse> => {
    return this.axios.post(url, data, {
      ...options,
    });
  };

  put = (
    url: string,
    data: any,
    options: AxiosRequestConfig = {},
  ): Promise<AxiosResponse> => {
    return this.axios.put(url, data, {
      ...options,
    });
  };
}

export default new HTTPService();
