import axios from 'axios';

const API_URL = 'https://goldfish-app-sryot.ondigitalocean.app/api';

interface LoginData {
  username: string;
  password: string;
}

export const login = async (userData: LoginData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};