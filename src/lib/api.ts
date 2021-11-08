import axios from 'axios';
import { config } from '~config';

const { accessToken } = config;

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
});
