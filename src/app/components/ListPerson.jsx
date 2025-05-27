"use client";
import * as React from 'react'
import PhotoProfil from './PhotoProfil'
import ProfilInfo from "./ProfilInfo"
// import { collection, getDocs } from "firebase/firestore";
// import {db} from "../lib/firebase";
import { useDispatch, useSelector } from 'react-redux';
import {fectchListUser} from '../store/slice/userSlice'

export default function ListPerson() {

  const allArtisan = useSelector((state)=>state.user.listUser);
  const dispatch = useDispatch();

   React.useEffect(()=>{
   dispatch(fectchListUser())
  },[dispatch])
  return (
    <>
    <h1 className='text-right font-semibold my-3'>Nous avons {allArtisan.length} artisans disponibles</h1>
    {allArtisan.map((item,index)=>(
     <div key={index} className='flex gap-5 my-5 shadow-md p-3'>
      <PhotoProfil nom={item?.nom}/>
      <ProfilInfo item={item} />
    </div>
    ))}
    {!allArtisan.length && <h1 className='text-center font-bold'>Désole , pas d'artisans trouvé</h1>}
    </>
   
  )
}



