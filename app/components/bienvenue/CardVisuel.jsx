import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { BsGeoAlt } from "react-icons/bs";
import { COLORS } from '../../__design/colors'

function CardVisuel() {
    return (
  <div className="card rounded-3xl text-white image-full w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className='w-full'
      />
  </figure>
  <div className="card-body p-2 justify-between">
    <ProfilName />
    <div className="card-actions justify-between items-center">
        <div className='flex gap-1 items-center font-extralight'>
     <BsGeoAlt size={15} /> Abidjan,Marcory,rue 128
        </div>
      <IoIosArrowForward style={{background:COLORS.brown}} className='cursor-pointer py-2 rounded-xl' size={55} />
   </div>
  </div>
  
</div>
    )
}

function ProfilName() {
    return(
<div className='flex items-center gap-3'>
<div className="avatar">
  <div className="w-18 rounded-full">
    <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
  </div>
</div>
<div>
<h2 className="card-title">Adjobi Pierre</h2>
<span className='font-extralight'>Spécialité</span>
</div>

</div>
    )
}

export default CardVisuel
