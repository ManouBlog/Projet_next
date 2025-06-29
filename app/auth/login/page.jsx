import React from 'react'
import { COLORS } from '@/app/__design/colors';
import Link from 'next/link'
import HeaderForm from '@/app/components/headerForm';
import BtnRouter from '@/app/components/BtnRouter';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

function LoginPage() {
   
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content sm:w-full md:w-150 flex-col">
         <HeaderForm />
    <div className="card bg-white w-full shrink-0 shadow-2xl text-black">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input border-gray-600 border-2 mb-8 w-full" placeholder="Email" />
          <label className="label">Mot de passe</label>
          <input type="password" className="input border-gray-600 border-2 w-full" placeholder="Password" />
          <div>
            <Link href={'/auth/passwordforgot'}>Mot de passe oublié?</Link>
            </div>
            <BtnRouter 
            route={'/dashboard'}
            title={'Se connecter'}
            />
            <div className='flex justify-center items-center gap-5 my-5'> 
            <button className='btn bg-black text-white'> <FcGoogle />Google</button>
            <button  className='btn bg-black text-white'> <BsFacebook /> Facebook</button>
            </div>
          {/* <button 
           onClick={() => router.push('/dashboard')}
           className="btn border-0 text-black p-5 mt-5 rounded-xl 
            font-semibold text-xl" 
            style={{background:COLORS.light_green}}
              >Se connecter</button> */}
        </fieldset>
      </div>
    </div>
    <Link  style={{color:COLORS.light_green}}
     className='text-sm' href={"/auth/register"}>Créer un compte</Link>
  </div>
        </div>
    )
}

export default LoginPage
