import axios from 'axios';

export const baseUrl = axios.create({
  baseURL: process.env.API_URL,
});
