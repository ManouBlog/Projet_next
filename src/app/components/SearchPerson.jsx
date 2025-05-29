import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {filterListUserReducer,addSearchQuery} from "../store/slice/userSlice"

export default function SearchPerson() {
  const dispatch = useDispatch();
  const querySearch = useSelector(state=>state.user.querySearch);
  async function rechercheByNom(){
    try{
  
    dispatch(filterListUserReducer(querySearch))
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>
      {/* <span className='font-semibold text-sm'>ChoissisTonPro_beta_v1</span> */}
      <input 
      type="search" 
      placeholder="Recherche par nom , métier ou lieu de travail" 
      className='w-full border p-5'
      value={querySearch ? querySearch:""}
      onChange={(e)=>{
        dispatch(addSearchQuery(e.target.value))
        rechercheByNom()
      }}
      />
    </div>
  )
}
