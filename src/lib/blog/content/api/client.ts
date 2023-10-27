import axios from 'axios';
import { env } from '@/env.mjs';

export const api = axios.create({
  baseURL: env.WORDPRESS_API_URL,
  method: 'post',
});
