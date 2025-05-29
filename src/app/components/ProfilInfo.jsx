"use client";
// import Link from 'next/link'
// import { useRouter } from 'next/navigation';
import * as React from "react";


export default function ProfilInfo({item}) {
   
   // const router = useRouter()
//   const handleClick = () => {
//    setIsClick(true)
//     router.push('/DetailPerson/'+item.id)
//   }
   return(
<div 
className='flex gap-3 items-center justify-between w-full flex-wrap'
>
 <section>
  <h1 className='text-xl font-bold'>{item?.nom} {item?.prenoms}</h1>
  <p className='text-md badge badge-xs badge-warning font-bold'>{item?.metier}</p>
  <p className='text-sm my-3'>Lieu de travail : {item?.lieu}</p>
 </section>
</div>
    )
}
