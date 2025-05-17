import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterReducer'
import authSlice from "./slice/AuthSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth:authSlice
  },
})