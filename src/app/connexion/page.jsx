"use client";
import * as React from 'react';
import styles from './connexion.module.css';
// import MyInputLabel from "../components/MyInputLabel"
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import {changeIsAuth} from "../store/slice/AuthSlice";
import {changeIsLoading} from '../store/slice/loadingSlice';
import { facebookProvider,signInWithSocial,googleProvider} from "../lib/firebase";
import Link from 'next/link'
import {signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
import { auth,db } from '../lib/firebase';
import { setDoc,doc,getDoc} from 'firebase/firestore';
export default function ConnexionPage() {
const router = useRouter();
  const searchParams = useSearchParams();

  //  const redirectUrl = searchParams.get('redirect') || '/';
   const dispatch = useDispatch();
   
   const checkAuthStatus = async () => {
    try {
      const response = await fetch('https://projet-next-sandy.vercel.app/api/auth');
      const info = await response.json();
      // setInfoUser(info.userId)
      dispatch(changeIsAuth(info.userId))
      console.log("infoUser",info)
    } catch (error) {
    console.log(error)
    }
  }

  async function signWithCookies(myEmail){
    console.log("COOKIES EMAIL",myEmail)
try{
const response = await fetch("https://projet-next-sandy.vercel.app/api/connexion",{
    method:"POST",
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify({
        email:myEmail,
    })
    })
    console.log("REDIRECT WITH COOKIES",response)
    if(response.ok){
      checkAuthStatus()
      // console.log("redirectUrl",redirectUrl)
      router.push("/");
      dispatch(changeIsLoading(false))
    }
}catch(error){
  console.log(error)
}
  }

  async function integrateInfoIntoDb(idUser,email,nom,phone,prenoms){
    try{
     await setDoc(doc(db, "users", idUser), {
        email:email,
        nom:nom,
        phone:phone,
        prenoms:prenoms,
        id:idUser,
        artisan:0,
        createdAt: new Date()
      });
    }catch(error){
      console.log(error)
    }
  }

//    async function handleConnexion() {
//     if(email && password){
//  dispatch(changeIsLoading(true))
//     try{
//       signInWithEmailAndPassword(auth,email,password)
//             .then(async (response)=>{
//                 console.log(response)
//                 const user = response.user;
//                 console.log("User logged in:", user.uid);
//                 signWithCookies(email)
//             })
//             .catch(error=>{
//                 alert(error.message)
//                 dispatch(changeIsLoading(false))
//             })
 
//     }catch(error){
//    console.log(error)
//    dispatch(changeIsLoading(false))
//     }
//     }else{
//     alert("veuillez renseigner tous les champs")
//     }
//    }
async function checkUserExists(uid) {
  const userDocRef = doc(db, "users", uid); // "users" est le nom de votre collection
  const userDoc = await getDoc(userDocRef);
  
  return userDoc.exists();
}
      React.useEffect(() => {
        dispatch(changeIsLoading(true))
       const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log("USER", user);
      if (user) {
      console.log("ROOTNAVIGATOR_USER", user);
        checkUserExists(user.uid).then(exists => {
       if (exists) {
         signWithCookies(user.displayName)
        } else {
         integrateInfoIntoDb(user.uid,user.email,user.displayName,user.phoneNumber,null)
         signWithCookies(user.displayName)
         }
         dispatch(changeIsLoading(false));
     });  
    } else {
      console.log("User is not authenticated");
       dispatch(changeIsLoading(false));
    }
  });

  return () => unsubscribe();
 
}, [dispatch]);

  
   
  return (
    <div>
      <h1 className='font-bold text-3xl mb-10'>Connexion</h1>
      {/* <MyInputLabel 
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
      /> */}
      {/* <div className='my-5 tooltip' data-tip="Pas encore disponible">
      <Link className='text-xl font-bold my-5' href="/forgotPassword">Mot de passe Oublié</Link>
      </div> */}
      <div className={styles.title}>
   <Link className='text-1xl my-5 text-green-400 font-semibold' href="/inscription">Pas encore de compte</Link>
      </div>
      {/* <div className='flex justify-center'>
        <button className='btn w-80 bg-black font-bold text-white px-5 rounded my-10'
        onClick={handleConnexion}
        >Se connecter</button>
      </div> */}
       <div className='text-center texte-avec-traits my-5 text-xl font-semibold'>
        - Ou -
       </div>
      <SocialeAuth /> 
    </div>
  )
}

function SocialeAuth() {

  //  const [email,setEmail] = React.useState("");
  //  const [password,setPassword] = React.useState("");
 const handleGoogleLogin = async () => {
    const user = await signInWithSocial(googleProvider);
    if (user) {
      console.log("Connecté avec Google :", user.reloadUserInfo);
    }
  };
  
  return(
    <div className='flex justify-center gap-3 my-5'>
     <button 
     onClick={handleGoogleLogin}
     className="btn bg-white text-black border-[#e5e5e5]">
     <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
     Se connecter avec google
     </button>
      {/* <button 
      onClick={handleFacebookLogin}
      className="bg-blue-600 text-white p-2 rounded cursor-pointer"
    >
      Se connecter avec Facebook
    </button> */}
    </div>
   
  )
}
