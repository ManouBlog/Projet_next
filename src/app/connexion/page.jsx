"use client";
import * as React from 'react'
import MyInputLabel from "../components/MyInputLabel"
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link'
export default function ConnexionPage() {

   const router = useRouter();
  const searchParams = useSearchParams();
   const [email,setEmail] = React.useState("")
   const [password,setPassword] = React.useState("")

   const redirectUrl = searchParams.get('redirect') || '/';

   async function handleConnexion() {
    try{
 const response = await fetch("http://192.168.1.66:3000/api/connexion",{
    method:"POST",
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify({
        email:email,
        password:password
    })
    })
    if(response.ok){
      alert("success")
      router.push(redirectUrl);
    }
    }catch(error){
   console.log(error)
    }
   
   }
  return (
    <div>
      <h1 className='text-center font-bold text-3xl'>Connexion</h1>
      <MyInputLabel 
      labelName="Email"
      typeInput="email"
      value={email}
      placeholder="adresse email"
      onHandleValue={(e)=>setEmail(e.target.value)}
      />
      <MyInputLabel 
      labelName="Mot de passe"
      typeInput="password"
      value={password}
      placeholder="Votre mot de passe"
      onHandleValue={(e)=>setPassword(e.target.value)}
      />
      <div className='text-end'>
   <Link className='text-sm' href="/forgotPassword">Mot de passe Oublié</Link>
      </div>
      <div className='flex justify-center'>
        <button className='btn'
        onClick={handleConnexion}
        >Se connecter</button>
      </div>
    </div>
  )
}
