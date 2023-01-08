import axios from 'axios'
import { api_base_url } from './constants';

export const axiosInstance = axios.create({
    baseURL: api_base_url,
    timeout: 1000,

  });


