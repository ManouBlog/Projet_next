"use client";
import * as React from 'react'
import PhotoProfil from './PhotoProfil'
import ProfilInfo from "./ProfilInfo"
// import { collection, getDocs } from "firebase/firestore";
// import {db} from "../lib/firebase";
import Metiers  from '../metiers.json'
import { useDispatch, useSelector } from 'react-redux';
import {fectchListUser,addSearchQuery,filterByBtnClickTableau} from '../store/slice/userSlice'

export default function ListPerson() {

  const allArtisan = useSelector((state)=>state.user.listUser);
  const dispatch = useDispatch();

   React.useEffect(()=>{
   dispatch(fectchListUser())
  },[dispatch])
  return (
    <>
    <h1 className='text-right font-semibold my-3'>Nous avons {allArtisan.length} artisans disponibles</h1>
    <AllBtnPro />
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
let element = [];

function AllBtnPro(){
  const [chooseBtn,setChooseBtn] = React.useState([]);
    const dispatch = useDispatch();
  return(  
    <>
    {element.length > 0 && <p className='cursor-pointer' onClick={()=>{
      element = []
      setChooseBtn(element);
      dispatch(filterByBtnClickTableau([]))
    }}>Afficher tous</p>}
   
    <div className='flex gap-2 my-8' style={{
  width: '90%',
  height:'auto',
  overflow: 'auto',
}}>

       {
              Metiers.metiers.map((item,index)=>(
               <button
               style={{background:chooseBtn.some(el=>el.includes(item.nom)) ? 'black':null,color:chooseBtn.some(el=>el.includes(item.nom)) ? 'white':null}} 
               key={index}
                className='btn'
               value={item.nom}
               onClick={e=>{
               dispatch(addSearchQuery(null))
              element = element.includes(e.target.value)
? element.filter(item => item !== e.target.value) // Retire si déjà présent
    : [...element, e.target.value] 
             setChooseBtn(element);
    dispatch(filterByBtnClickTableau(element))
              console.log("setChooseBtn",element)
              }}
               >{item.nom} {item.icone}</button>
              ))
          }
      
    </div>
    </>

  );
}



