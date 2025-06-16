'use client'
import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";

function HeaderForm() {
  
    return (
        <div className='flex gap-4 w-full items-center'>
        <FaLongArrowAltLeft 
        title='Retour'
        onClick={async() =>  await navigation.back()}
        className='justify-self-start cursor-pointer' style={{color:'white'}} size={45} />
        <div className='flex w-full justify-center'>
       <div>
         <h1 className='text-center text-white text-4xl'>COIFFEURPRO</h1>
        <span className='text-white text-sm'>L'application fait pour les coiffeurs</span>
       </div>
        </div>
       
        </div>
    )
}

export default HeaderForm
