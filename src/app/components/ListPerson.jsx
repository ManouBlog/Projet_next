import React from 'react'
import PhotoProfil from './PhotoProfil'
import ProfilInfo from "./ProfilInfo"
export default function ListPerson() {
  return (
    <div className='flex gap-5 my-5 shadow-md p-3'>
      <PhotoProfil />
      <ProfilInfo  isBtnVisible/>
    </div>
  )
}



