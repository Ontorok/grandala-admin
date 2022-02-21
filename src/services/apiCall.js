import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
import { publicRequest } from './config';

export const login = async (reqBody, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', reqBody);
    dispatch(loginSuccess(res.data.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (reqBody, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', reqBody);
    console.log(res);
    dispatch(loginSuccess(res.data.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
