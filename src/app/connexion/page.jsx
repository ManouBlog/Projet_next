"use client";
import * as React from 'react'
import MyInputLabel from "../components/MyInputLabel"
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import {changeIsAuth} from "../store/slice/AuthSlice";
import {changeIsLoading} from '../store/slice/loadingSlice';
import { facebookProvider,signInWithSocial,googleProvider} from "../lib/firebase";
import Link from 'next/link'
import {signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import { auth } from '../lib/firebase';
export default function ConnexionPage() {

   const router = useRouter();
  const searchParams = useSearchParams();
   const [email,setEmail] = React.useState("")
   const [password,setPassword] = React.useState("")

   const redirectUrl = searchParams.get('redirect') || '/';
   const dispatch = useDispatch()
   const checkAuthStatus = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth');
      const info = await response.json();
      // setInfoUser(info.userId)
      dispatch(changeIsAuth(info.userId))
      // console.log("infoUser",infoUser)
    } catch (error) {
    console.log(error)
    }
  }

  async function signWithCookies(myEmail,myPassword){
try{
const response = await fetch("http://localhost:3000/api/connexion",{
    method:"POST",
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify({
        email:myEmail,
        password:myPassword
    })
    })
    if(response.ok){
      checkAuthStatus()
      router.push(redirectUrl);
      dispatch(changeIsLoading(false))
    }
}catch(error){
  console.log(error)
}
  }

   async function handleConnexion() {
    if(email && password){
 dispatch(changeIsLoading(true))
    try{
      signInWithEmailAndPassword(auth,email,password)
            .then(async (response)=>{
                console.log(response)
                const user = response.user;
                console.log("User logged in:", user.uid);
                signWithCookies(email,password)
            })
            .catch(error=>{
                alert(error.message)
                dispatch(changeIsLoading(false))
            })
 
    }catch(error){
   console.log(error)
   dispatch(changeIsLoading(false))
    }
    }else{
    alert("veuillez renseigner tous les champs")
    }
   }

      React.useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    console.log("USER", user);
    
    if (user) {
      console.log("ROOTNAVIGATOR_USER", user);
      signWithCookies(user.email,'000000')
    } else {
      console.log("User is not authenticated");
    }
    setIsLoading(false);
  });

  return () => unsubscribe(); // Nettoyage pour éviter les fuites mémoire
}, []);
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
   <Link className='text-sm font-bold' href="/forgotPassword">Mot de passe Oublié</Link>
      </div>
      <div className='text-end'>
   <Link className='text-sm text-green-800 font-bold' href="/inscription">Pas encore de compte</Link>
      </div>
      <div className='flex justify-center'>
        <button className='btn'
        onClick={handleConnexion}
        >Se connecter</button>
      </div>
       <div className='text-center texte-avec-traits'>
        -Ou-
       </div>
      <SocialeAuth /> 
    </div>
  )
}

function SocialeAuth() {


 
  const handleFacebookLogin = async () => {
    const user = await signInWithSocial(facebookProvider);
    if (user) {
      console.log("Connecté avec Facebook :", user.displayName);
    }
  };

   const handleGoogleLogin = async () => {
    const user = await signInWithSocial(googleProvider);
    if (user) {
      console.log("Connecté avec Google :", user.reloadUserInfo);
    }
  };
  return(
    <div className='flex justify-center gap-3'>
       <button 
      onClick={handleGoogleLogin}
      className="bg-red-500 text-white p-2 rounded"
    >
      Se connecter avec Google
    </button>
      <button 
      onClick={handleFacebookLogin}
      className="bg-blue-600 text-white p-2 rounded"
    >
      Se connecter avec Facebook
    </button>
    </div>
   
  )
}
