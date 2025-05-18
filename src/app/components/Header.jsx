'use client'
import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

  
export default function Header() {
  const [infoUser,setInfoUser] = React.useState("")
  const pathname = usePathname()
  const checkAuthStatus = async () => {
    try {
      const response = await fetch('http://192.168.1.66:3000/api/auth');
      const info = await response.json();
      setInfoUser(info.userId)
      console.log("infoUser",infoUser)
    } catch (error) {
    console.log(error)
    }
  }
  React.useEffect(()=>{
 checkAuthStatus()
},[])
  return (
     <div className="flex justify-between shadow-sm p-2">
      <Link className='text-2xl' href="/">Bonoua Online</Link>
      <section className='flex gap-3'>
        {infoUser ? infoUser : 
        <>
        <Link href="/inscription" className={`${pathname === '/inscription' ? 'active' : ''}`}>Inscription</Link>
        <Link href="/connexion" className={`${pathname === '/connexion' ? 'active' : ''}`}>Connexion</Link>
        </>
        }
      </section>
       
    </div>
  )
}


