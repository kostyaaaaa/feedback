import axios from 'axios';
import { apiVersion } from './utils';
import { LOCAL_STORAGE_ITEMS } from '@/constants';

const httpClient = axios.create({
  baseURL: apiVersion(1),
});

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCAL_STORAGE_ITEMS.TOKEN);
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default httpClient;
