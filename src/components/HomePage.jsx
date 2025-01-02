import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../features/auth/authSlice'; 

const HomePage = () => {
  const { loggedIn, user } = useSelector((state) => state.auth); 
  const dispatch = useDispatch();

  const handleLogout = () => { 
    dispatch(logout()); 
  };

  if (!loggedIn) {
    return (
      <div>
        <h2>Please Login or Register</h2>
        <p>You need to be logged in or registered to access this page.</p>
        <Link to="/login">Login Now</Link> <br />
        <Link to="/register">Register Here</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome, {user?.name || 'User'}!</h2> 
      <p>You are logged in.</p>
      <button onClick={handleLogout}>Logout</button> 
    </div>
  );
};

export default HomePage;
