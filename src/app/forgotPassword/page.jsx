import React from 'react'
import MyInputLabel from "../components/MyInputLabel";

export default function ForgotPassword() {
  return (
    <div>
         <h1 className='text-center font-bold text-3xl'>Mot de passe oublié</h1>
      <MyInputLabel 
            labelName="Email"
            typeInput="email"
            placeholder="adresse email"
            />
        <div className='flex justify-center'>
        <button className='btn'>Envoyer</button>
      </div>
    </div>
  )
}
