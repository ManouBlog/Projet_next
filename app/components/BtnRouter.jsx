'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { COLORS } from '@/app/__design/colors';
function BtnRouter({route,title}) {
     const router = useRouter()
    return (
      <div className='flex justify-center w-full'>
            <button 
                   onClick={() => router.push(route)}
                   className="btn w-50 border-0 text-black p-5 mt-5 rounded-xl 
                    font-semibold text-xl" 
                    style={{background:COLORS.light_green}}
                      >{title}</button>
      </div>
        
    )
}

export default BtnRouter
