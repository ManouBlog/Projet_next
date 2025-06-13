import React from 'react'
import { COLORS } from '@/app/__design/colors';
import Link from 'next/link'

function HeroPage() {
    return (
        <div className="hero bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md mt-20">
      <h1 className="text-6xl font-bold my-2">CoiffeurPro</h1>
      <p className="text-3xl my-2">
       l'application indispensable pour chaque coiffeur
      </p>
      <Link 
      className="btn border-0 text-black p-8 mt-8 rounded-xl 
      font-bold text-xl" 
      style={{background:COLORS.light_green}} href="/auth/login">Se connecter</Link>
    </div>
  </div>
</div>
    )
}

export default HeroPage
