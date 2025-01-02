import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  user: null,
  role: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    loginFailed: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.user = null;
      state.role = null;
    },
    register: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    registerFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { login, loginFailed, logout, register, registerFailed } = authSlice.actions;

export default authSlice.reducer;
