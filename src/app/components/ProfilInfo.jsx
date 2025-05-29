import * as React from "react";


export default function ProfilInfo({item}) {

   return(
<div 
className='flex gap-3 items-center cursor-pointer justify-between w-full flex-wrap'
>
 <section>
  <h1 className='text-xl font-bold'>{item?.nom} {item?.prenoms}</h1>
  <p className='text-md badge badge-xs badge-warning font-bold'>{item?.metier}</p>
  <p className='text-sm my-3'>Lieu de travail : {item?.lieu}</p>
 </section>
</div>
    )
}
