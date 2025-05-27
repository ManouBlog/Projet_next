
import { createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../lib/firebase";
import {changeIsLoading} from "./loadingSlice";

export const fectchListUser = () => async (dispatch) => {
  try {
    dispatch(changeIsLoading(true))
        const usersCol = collection(db, 'users');
        const snapshot = await getDocs(usersCol);
        const users = [];
        snapshot.forEach((doc) => {
          users.push({ id: doc.id, ...doc.data() });
        });
        console.log("Liste des utilisateurs:", users);
        const userFilterByArtisan = users.filter(item=>item.artisan === 1)
        dispatch(getListUserReducer(JSON.stringify(userFilterByArtisan)))
        dispatch(changeIsLoading(false))
  } catch (error) {
    console.error(error);
    dispatch(changeIsLoading(false))
  }
};

const usersSlice = createSlice({
  name: 'users',
  initialState: { 
    listUser: [],
    listForFilterUser:[]
  },
  reducers: {
    getListUserReducer: (state,action) => { 
      console.log("getListUserReducer",action.payload)
      state.listUser = JSON.parse(action.payload) 
      state.listForFilterUser = JSON.parse(action.payload)
    },
    filterListUserReducer:(state,action)=>{
      state.listUser = state.listForFilterUser.filter(book=>{
        return book.nom.toLowerCase().includes(action.payload.toLowerCase()) || book.metier.toLowerCase().includes(action.payload.toLowerCase()) || book.lieu.toLowerCase().includes(action.payload.toLowerCase()) ;
    })
    }
  },
})

export const { getListUserReducer,filterListUserReducer} = usersSlice.actions
export default usersSlice.reducer
