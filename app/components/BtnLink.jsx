import React from 'react'
import Link from 'next/link'
import { COLORS } from '@/app/__design/colors';
export default function BtnLink({href,title}) {
  return (
            <Link 
          className="btn border-0 text-black px-2 rounded-xl text-sm" 
          style={{background:COLORS.light_green}} href={href}>{title}</Link>
  )
}
