import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (axiosConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      axiosConfig.headers.token = token;
    }
    return axiosConfig;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default instance;
