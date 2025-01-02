import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Your backend API

const authService = {
  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      throw new Error('Login failed: ' + error.message);
    }
  },

  register: async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw new Error('Registration failed: ' + error.message);
    }
  }
};

export default authService;
