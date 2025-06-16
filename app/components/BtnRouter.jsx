'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { COLORS } from '@/app/__design/colors';
function BtnRouter({route,title}) {
     const router = useRouter()
    return (
        <button 
                   onClick={() => router.push(route)}
                   className="btn border-0 text-black p-5 mt-5 rounded-xl 
                    font-semibold text-xl" 
                    style={{background:COLORS.light_green}}
                      >{title}</button>
    )
}

export default BtnRouter
