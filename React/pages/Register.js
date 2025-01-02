import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register, registerFailed } from '../redux/loggedSlice';
import authService from '../services/authService';
import DefaultLayout from '../components/DefaultLayout';



const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.register({ username, email, password });
      dispatch(register(response));
    } catch (error) {
      dispatch(registerFailed(error.message));
    }
  };

  return (
    <DefaultLayout>
      <h2>Registration</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </DefaultLayout>
  );
};

export default RegistrationPage;
