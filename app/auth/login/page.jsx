import React from 'react'
import { COLORS } from '@/app/__design/colors';

function LoginPage() {
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card p-5 bg-amber-50 w-full shrink-0 shadow-2xl text-black">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input border-gray-600 border-2 mb-8" placeholder="Email" />
          <label className="label">Mot de passe</label>
          <input type="password" className="input border-gray-600 border-2" placeholder="Password" />
          <div><a className="link link-hover">Mot de passe oublié?</a></div>
          <button className="btn border-0 text-black p-8 mt-8 rounded-xl 
      font-bold text-xl" 
      style={{background:COLORS.light_green}}
      >Se connecter</button>
        </fieldset>
      </div>
    </div>
  </div>
        </div>
    )
}

export default LoginPage
