
import { createSlice } from '@reduxjs/toolkit';

const SearchCitySlice = createSlice({
  name: 'searchCity',
  initialState: { 
    cityOrAdresse:"",
    allAdresse:[],
  },
  reducers: {
    changeCode: (state,action) => { state.isCode = action.payload },
    changeModalOpen: (state,action) => { state.modalOpen = action.payload },
    changeIsRegisterVisible: (state,action) => { state.isRegisterVisible = action.payload},
    changeIsArtisanOrClients: (state,action) => { state.isArtisanOrClients = action.payload},
    changeIsAuth:(state,action)=>{state.isAuth = action.payload}
  },
})

export const { changeCode, changeIsRegisterVisible,changeIsArtisanOrClients,changeModalOpen,changeIsAuth} = SearchCitySlice.actions
export default SearchCitySlice.reducer