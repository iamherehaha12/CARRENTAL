import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, loginFailed } from '../redux/loggedSlice'; 
import authService from '../services/authService';
import DefaultLayout from '../components/DefaultLayout';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await authService.login({ email, password });
      console.log('Login Response:', loginResponse); 
      dispatch(login(loginResponse));

    } catch (error) {
      console.error('Login Failed:', error);
      dispatch(loginFailed(error.message));
    }
  };

  return (
    <DefaultLayout>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
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
