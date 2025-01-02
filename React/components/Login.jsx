import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, loginFailed } from '../redux/loggedSlice'; 
import authService from '../services/authService';
import DefaultLayout from './DefaultLayout';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { username, password };
    console.log('Sending login data:', JSON.stringify(credentials));

    try {
      const response = await authService.login(credentials);
      console.log('Login response:', response);

      dispatch(login(response));

    } catch (error) {
      console.error('Error during login:', error.message);
      dispatch(loginFailed(error.message)); 
    }
  };

  return (
    <DefaultLayout>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </DefaultLayout>
  );
};

export default Login;
