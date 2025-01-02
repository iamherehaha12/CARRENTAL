import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register, registerFailed } from '../features/auth/authSlice'; 

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const validateInputs = () => {
    if (username.length < 3) return 'Username must be at least 3 characters long.';
    if (!email.includes('@')) return 'Please enter a valid email address.';
    if (password.length < 6) return 'Password must be at least 6 characters long.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setSuccess(false);

    try {
      // Mock API call (replace with actual API call logic)
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'test') {
            reject({ message: 'Username already exists.' });
          } else {
            resolve({ data: { username, email, message: 'Registration successful!' } });
          }
        }, 1000);
      });

      dispatch(register(response.data)); // Dispatch success action to Redux
      setSuccess(true);
    } catch (error) {
      setError(error.message || 'Registration failed.');
      dispatch(registerFailed(error.message)); // Dispatch failure action to Redux
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Registration successful!</p>}
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
