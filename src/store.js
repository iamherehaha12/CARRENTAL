import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/loggedSlice';

const store = configureStore({
  reducer: {
    auth: authReducer
  }
});

export default store;
