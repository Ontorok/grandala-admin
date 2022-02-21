import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../services/apiCall';
import './login.css';

const initialState = {
  username: '',
  password: ''
};

const Login = function () {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const onLogin = (e) => {
    e.preventDefault();
    login(state, dispatch);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={onLogin}
      className="from"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh'
      }}
    >
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={state.username}
        onChange={onInputChange}
        style={{ padding: '10px', marginBottom: '20px' }}
      />
      <input
        type="text"
        placeholder="Password"
        name="password"
        value={state.password}
        onChange={onInputChange}
        style={{ padding: '10px', marginBottom: '20px' }}
      />
      <button type="submit" style={{ padding: '10px', width: '100px' }}>
        Login
      </button>
    </form>
  );
};

export default Login;
