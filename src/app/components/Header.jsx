'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  return (
     <div className="flex justify-between shadow-sm p-2">
      <Link className='text-2xl' href="/">Bonoua Online</Link>
      <section className='flex gap-3'>
     <Link href="/inscription" className={`${pathname === '/inscription' ? 'active' : ''}`}>Inscription</Link>
     <Link href="/connexion" className={`${pathname === '/connexion' ? 'active' : ''}`}>Connexion</Link>
      </section>
       
    </div>
  )
}


