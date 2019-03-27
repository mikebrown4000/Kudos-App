const axios = require('axios');
const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export const loginUser = async (loginData) => {
  const resp = await api.post(`/auth/login`, loginData);
  return resp.data
}

export const registerUser = async (resgisterData) => {
  const resp = await api.post(`/auth/register`, resgisterData);
  return resp.data;
}
