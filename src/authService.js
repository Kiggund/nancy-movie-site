import axios from 'axios';

const API_URL = 'https://your-api-url.com';

const signup = (username, password) => {
  return axios.post(`${API_URL}/signup`, { username, password });
};

const login = (username, password) => {
  return axios.post(`${API_URL}/login`, { username, password });
};

export { signup, login };