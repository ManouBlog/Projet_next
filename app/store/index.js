import { configureStore } from '@reduxjs/toolkit'
import SearchCitySlice from "./slice/SearchCitySlice";


export const store = configureStore({
  reducer: {
    searchCity:SearchCitySlice,
  },
})