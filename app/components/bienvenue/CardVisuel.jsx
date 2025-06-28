"use client"
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { BsGeoAlt } from "react-icons/bs";
import { COLORS } from '../../__design/colors'
import { useRouter } from 'next/navigation'
function CardVisuel({name,specialite,adresse}) {
  const router = useRouter()
    return (
  <div 
  onClick={() => router.push("/detail_barber")}
  className="card rounded-3xl text-white image-full w-96 h-50 shadow-sm cursor-pointer">
  <figure>
    <img
      src="/Barbershop.jpeg"
      alt="Shoes"
      className='w-full'
      />
  </figure>
  <div className="card-body p-2 justify-between">
    <ProfilName name={name} specialite={specialite}/>
    <div className="card-actions justify-between items-center">
        <div className='flex gap-1 items-center font-extralight'>
     <BsGeoAlt size={15} /> {adresse}
        </div>
      <IoIosArrowForward style={{background:COLORS.brown}} className='cursor-pointer py-2 rounded-xl' size={55} />
   </div>
  </div>
  
</div>
    )
}

function ProfilName({name,specialite}) {
    return(
<div className='flex items-center gap-3'>
<div className="avatar">
  <div className="w-18 rounded-full">
    <img src="/barber.jpeg" />
  </div>
</div>
<div>
<h2 className="card-title">{name}</h2>
<span className='font-extralight'>{specialite}</span>
</div>
</div>
)
}

export default CardVisuel
