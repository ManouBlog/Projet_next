import * as React from 'react'
import { useDispatch } from 'react-redux';
import {filterListUserReducer} from "../store/slice/userSlice"

export default function SearchPerson() {
  const dispatch = useDispatch();
  const [querySearch,setQuerySearch] = React.useState("");

  async function rechercheByNom(searchName){
    try{
    console.log("searchName",searchName)
    dispatch(filterListUserReducer(searchName))
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>
      <input 
      type="search" 
      placeholder="Recherche par nom , métier ou lieu de travail" 
      className='w-full border p-5'
      value={querySearch}
      onChange={(e)=>{
        setQuerySearch(e.target.value)
        rechercheByNom(e.target.value)
      }}
      />
    </div>
  )
}
