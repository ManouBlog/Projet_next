
import { createSlice } from '@reduxjs/toolkit';

const SearchCitySlice = createSlice({
  name: 'searchCity',
  initialState: { 
    cityOrAdresse:"",
    allAdresse:[],
  },
  reducers: {
    addCityOrAdresse: (state,action) => { state.cityOrAdresse = action.payload }
  },
})

export const { addCityOrAdresse} = SearchCitySlice.actions
export default SearchCitySlice.reducer