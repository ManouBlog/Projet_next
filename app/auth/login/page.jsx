import React from 'react'
import { COLORS } from '@/app/__design/colors';
import Link from 'next/link'

function LoginPage() {
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <h1 className='text-center text-white text-4xl'>COIFFEURPRO</h1>
    <span className='text-white text-sm'>L'application fait pour les coiffeurs</span>
    <div className="card bg-white w-full shrink-0 shadow-2xl text-black">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input border-gray-600 border-2 mb-8 w-full" placeholder="Email" />
          <label className="label">Mot de passe</label>
          <input type="password" className="input border-gray-600 border-2 w-full" placeholder="Password" />
          <div><a className="link link-hover">Mot de passe oublié?</a></div>
          <button className="btn border-0 text-black p-5 mt-5 rounded-xl 
      font-semibold text-xl" 
      style={{background:COLORS.light_green}}
      >Se connecter</button>
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
