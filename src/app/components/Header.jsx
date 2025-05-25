'use client'
import * as React from 'react'
import Link from 'next/link'
import { usePathname,useRouter } from 'next/navigation'
import { useSelector ,useDispatch} from 'react-redux'
import {changeIsAuth} from "../store/slice/AuthSlice"
import {changeIsLoading} from '../store/slice/loadingSlice';
import { signOut as SignOutFirebase } from 'firebase/auth';
import {auth} from "../lib/firebase"
  
export default function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state=>state.auth.isAuth)
  const pathname = usePathname()
  const checkAuthStatus = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth');
      const info = await response.json();
       dispatch(changeIsAuth(info.userId))
      // console.log("infoUser",infoUser)
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
        {isAuth ? <NameWithMenu infoUser={isAuth} checkAuthStatus={checkAuthStatus}/> : 
        <>
        <Link href="/inscription" className={`${pathname === '/inscription' ? 'active' : ''}`}>Inscription</Link>
        <Link href="/connexion" className={`${pathname === '/connexion' ? 'active' : ''}`}>Connexion</Link>
        </>
        }
      </section>
       
    </div>
  )
}

function NameWithMenu({infoUser,checkAuthStatus}) {
  const router = useRouter()
  const dispatch = useDispatch();
  const handleDeconnexion = async()=>{
     dispatch(changeIsLoading(true))
   try{
const response = await fetch('http://localhost:3000/api/connexion',{
  method:"DELETE"
});
if(response.ok){
  checkAuthStatus()
  SignOutFirebase(auth).catch(error=>alert(error))
  router.push("/")
  dispatch(changeIsLoading(false))
 }
   }catch(error){
    console.log(error)
   }
  }
  const seeProfil = ()=>{
    router.push("/Profile")
  }
  return(
    <div className="dropdown dropdown-hover -mx-48">
  <div tabIndex={0} role="button" className="btn m-1">{infoUser}</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm">
    <li
    onClick={seeProfil}
    ><a>Profil</a></li>
    <li
    onClick={handleDeconnexion}
    ><a>Déconnexion</a></li>
  </ul>
</div>
  )
}


