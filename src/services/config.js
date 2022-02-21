import axios from 'axios';

const {
  currentUser: { accessToken }
} = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user);

export const publicRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

export const userRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    token: `Bearer ${accessToken}`
  }
});
