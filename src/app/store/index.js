import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterReducer'
import authSlice from "./slice/AuthSlice";
import loadingSlice from './slice/loadingSlice';
import userSlice from './slice/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth:authSlice,
    loading:loadingSlice,
    user:userSlice
  },
})