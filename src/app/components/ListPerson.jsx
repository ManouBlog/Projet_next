"use client";
import * as React from 'react'
import PhotoProfil from './PhotoProfil'
import ProfilInfo from "./ProfilInfo"
import { collection, getDocs } from "firebase/firestore";
import {db} from "../lib/firebase";
import { useDispatch } from 'react-redux';
import {changeIsLoading} from "../store/slice/loadingSlice"

export default function ListPerson() {
  const [allArtisan,setAllArtisan] = React.useState([]);
  const dispatch = useDispatch();
   
  async function getUsers() {
    dispatch(changeIsLoading(true))
    const usersCol = collection(db, 'users');
    const snapshot = await getDocs(usersCol);
    const users = [];
    snapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
  
    console.log("Liste des utilisateurs:", users);
    const userFilterByArtisan = users.filter(item=>item.artisan === 1)
    setAllArtisan(userFilterByArtisan)
    dispatch(changeIsLoading(false))
  }
   React.useEffect(()=>{
   getUsers()
  },[])
  return (
    <>
    {allArtisan.map((item,index)=>(
     <div key={index} className='flex gap-5 my-5 shadow-md p-3'>
      <PhotoProfil nom={item?.nom}/>
      <ProfilInfo item={item} />
    </div>
    ))}
    </>
   
  )
}



