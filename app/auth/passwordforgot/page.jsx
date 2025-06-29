'use client';
import * as React from 'react'
import { COLORS } from '@/app/__design/colors';
import Link from 'next/link'
import Input from "@/app/components/Input"
import HeaderForm from '@/app/components/headerForm'

function PasswordForgot() {
    const [email,setEmail]=React.useState('');
    return (
       <div className="hero bg-black min-h-screen">
  <div className="hero-content sm:w-full md:w-150 flex-col">
   <HeaderForm />
    <div className="card bg-white w-full shrink-0 shadow-2xl text-black">
      <div className="card-body">
        <fieldset className="fieldset">
         <Input label={"Email"}  
                     valueInput={email}
                   onChange={setEmail}
                     placeholder={"Email"} 
                     type={"email"} 
                     isRequired/>
          <button className="btn border-0 text-black p-5 mt-5 rounded-xl 
      font-semibold text-xl" 
      style={{background:COLORS.light_green}}
      >Envoyer</button>
        </fieldset>
      </div>
    </div>
    <Link  style={{color:COLORS.light_green}}
     className='text-sm' href={"/auth/register"}>Créer un compte</Link>
  </div>
        </div>
    )
}

export default PasswordForgot

