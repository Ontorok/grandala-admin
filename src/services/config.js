import axios from 'axios';

export const publicRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

export const userRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWE3NzViMTFmMzc1YzNhYjEzN2E5OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzk0ODYxNSwiZXhwIjoxNjM3OTUwNDE1fQ.XscrefCax9wh95qBqlT8PSdnnn2AAYg--rfltBzS0GI'
  }
});
