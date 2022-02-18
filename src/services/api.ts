import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://cursos-develop.apikeepedu.com.br',
});
