const axios = require('axios');
const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export const loginUser = async (loginData) => {
  const resp = await api.post(`/user/login`, loginData);
  return resp.data
}

export const registerUser = async (resgisterData) => {
  const resp = await api.post(`/user/register`, resgisterData);
  return resp.data;
}

export const putBudget = async (budget, id) => {
  const resp = await api.put(`/user/${id}`, budget, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } })
  return resp.data
}
