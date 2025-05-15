import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})