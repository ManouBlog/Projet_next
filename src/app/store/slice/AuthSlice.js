
import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { isCode: 0 ,isRegisterVisible:false,isArtisanOrClients:"artisan",modalOpen:false},
  reducers: {
    changeCode: (state,action) => { state.isCode = action.payload },
    changeModalOpen: (state,action) => { state.modalOpen = action.payload },
    changeIsRegisterVisible: (state,action) => { state.isRegisterVisible = action.payload},
    changeIsArtisanOrClients: (state,action) => { state.isArtisanOrClients = action.payload},
  },
})

export const { changeCode, changeIsRegisterVisible,changeIsArtisanOrClients,changeModalOpen } = authSlice.actions
export default authSlice.reducer
