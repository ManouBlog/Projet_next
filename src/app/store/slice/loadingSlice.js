
import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: { 
    isLoading:false,
  },
  reducers: {
    changeIsLoading: (state,action) => { state.isLoading = action.payload },
  },
})

export const { changeIsLoading } = loadingSlice.actions
export default loadingSlice.reducer
