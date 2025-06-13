import React from 'react'
import { COLORS } from '@/app/__design/colors'

function HeroPage() {
    return (
        <div className="hero bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md mt-20">
      <h1 className="text-6xl font-bold my-2">CoiffeurPro</h1>
      <p className="text-3xl my-2">
       l'application indispensable pour chaque coiffeur
      </p>
      <button className="btn border-0 text-black p-8 mt-8 rounded-xl font-bold text-xl" style={{background:COLORS.light_green}} >Se connecter</button>
    </div>
  </div>
</div>
    )
}

export default HeroPage
