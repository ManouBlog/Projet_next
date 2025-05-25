'use client'
import * as React from 'react'
import Metiers  from '../../metiers.json'
import City from "../../city.json"
import { useSelector,useDispatch } from 'react-redux';
import {changeIsRegisterVisible,changeCode,changeModalOpen} from "../../store/slice/AuthSlice"
import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { setDoc,doc,getDoc} from 'firebase/firestore';
import { useRouter,useSearchParams } from 'next/navigation';
import {changeIsAuth} from "../../store/slice/AuthSlice";
import {changeIsLoading} from '../../store/slice/loadingSlice';
import { facebookProvider,signInWithSocial,googleProvider} from "../../lib/firebase";

import { auth, db  } from "../../lib/firebase";
export default function SaveInfoRegister() {
    const isArtisanOrClients = useSelector((state)=>state.auth.isArtisanOrClients);
    const dispatch = useDispatch()
     const router = useRouter();
    const searchParams = useSearchParams();

    const redirectUrl = searchParams.get('redirect') || '/';

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

    async function signWithCookies(myEmail){
  try{
  const response = await fetch("http://localhost:3000/api/connexion",{
      method:"POST",
      headers:{
          'Content-type':'application/json'
      },
      body:JSON.stringify({
          email:myEmail,
      })
      })
      if(response.ok){
        dispatch(changeModalOpen(false))
        checkAuthStatus()
        router.push(redirectUrl);
        dispatch(changeIsLoading(false))

      }
  }catch(error){
    console.log(error)
  }
    }

    async function checkUserExists(uid) {
      try{
      const userDocRef = doc(db, "users", uid); // "users" est le nom de votre collection
      const userDoc = await getDoc(userDocRef);
      
      return userDoc.exists();
      }catch(error){
     console.log(error)
      }
     
    }

    React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("USER", user);
      dispatch(changeIsLoading(true))
      if (user) {
        console.log("ROOTNAVIGATOR_USER", user);
         checkUserExists(user.uid).then(exists => {
  if (exists) {
    signWithCookies(user.displayName)
  } else {
 integrateInfoIntoDb(user.uid,user.email,user.displayName,user.phoneNumber,null)
  signWithCookies(user.displayName)
  }
});
     
   } else {
        console.log("User is not authenticated");
      }
      dispatch(changeIsLoading(false))
    });
  
    return () => unsubscribe(); // Nettoyage pour éviter les fuites mémoire
  }, []);
  return (
    <div className='p-5'>
      <h1 className='font-bold my-4 text-3xl'>Inscription</h1>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-10 top-5"
     onClick={()=>{
           dispatch(changeModalOpen(false))
            dispatch(changeIsRegisterVisible(false))
           dispatch(changeCode(0))
           }}
      >✕</button>
      {isArtisanOrClients === 'artisan' ? <RegisterProfessionnel />:<RegisterClients />}
    </div>

  )
}

function RegisterProfessionnel() {
  const dispatch = useDispatch()
    const [valueMetiers,setValueMetiers] = React.useState("");
    const [nom,setNom] = React.useState("");
    const [prenoms,setPrenoms] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [phone,setPhone] = React.useState("");
     const [lieu,setLieu] = React.useState("");
     const [quiSuis,setQuiSuis] = React.useState("");

     async function onHandleSubmit(e) {
       e.preventDefault()
       dispatch(changeIsLoading(true))
      try{
         const userCredential = await createUserWithEmailAndPassword(auth,email,"000000");
    const user = userCredential.user;
    console.log("User created:", user.uid);
    if(user){
    await setDoc(doc(db, "users", user.uid), {
        email:email,
        nom:nom,
        phone:phone,
        prenoms:prenoms,
        id:user.uid,
        metier:valueMetiers,
        lieu:lieu,
        quiSuis:quiSuis,
        artisan:1,
        createdAt: new Date()
      });
    }
    alert("Compte créé")
   dispatch(changeModalOpen(false))
            dispatch(changeIsRegisterVisible(false))
             dispatch(changeIsLoading(false))
    }catch(error){
      console.log(error)
      alert(error.message)
       dispatch(changeIsLoading(false))
    }
     }
    return(
        <form className="overflow-y-auto h-95"
        onSubmit={onHandleSubmit}
        >
          <h1 className='text-center font-semibold text-red'>Les champs suivis d'un * sont obligatoires</h1>
            <label className='my-4'>Nom *</label>
            <input 
            type="text"  
            className="input w-full my-4 validator" 
            required 
            placeholder="Nom" 
            pattern="[A-Za-z][A-Za-z0-9\-]*" 
            minLength="3" 
            maxLength="30" 
            title="Only letters, numbers or dash"
            value={nom}
            onChange={e=>setNom(e.target.value)}
            />
<label className='my-4'>Prénoms *</label>
 <input type="text" className="input w-full my-4 validator" required placeholder="Prénoms" 
  pattern="[A-Za-z][A-Za-z0-9\-]*" minLength="3"
   maxLength="30" title="Only letters, numbers or dash"
   value={prenoms}
   onChange={e=>setPrenoms(e.target.value)}
   />
<label className='my-4'>Email *</label>
<input className="input w-full my-4 validator"
value={email}
   onChange={e=>setEmail(e.target.value)}
type="email"  placeholder="email@gmail.com" />
<label className='my-4'>Numéro de téléphone *</label>
<input type="tel" 
value={phone}
   onChange={e=>setPhone(e.target.value)}
className="input w-full my-4 validator tabular-nums" required placeholder="Numéro de téléphone" 
  pattern="[0-9]*" minLength="10" maxLength="10" title="Must be 10 digits" />
  <label className='my-4'>Votre Métier *</label>
  <select className="select validator my-4 w-full" 
     value={valueMetiers}
      onChange={e=>setValueMetiers(e.target.value)}
      required>
    <option disabled value="">Choisir ton métier:</option>
    {
        Metiers.metiers.map((item,index)=>(
         <option key={index}>{item.nom} {item.icone}</option>
        ))
    }
  </select>
  <label className='my-4'>Lieu de Travail *</label>
   <select className="select validator my-4 w-full" 
  value={lieu}
      onChange={e=>setLieu(e.target.value)}
  required>
    <option disabled value="">Lieu de Travail :</option>
    {
        City.city.map((item,index)=>(
         <option key={index}>{`${item}`}</option>
        ))
    }
  </select>
   <label className='my-4'>Qui suis je ?</label>
<fieldset className="fieldset w-full">
  <textarea className="textarea h-24 w-full" 
  value={quiSuis}
      onChange={e=>setQuiSuis(e.target.value)}
  placeholder="Qui suis je ?"></textarea>
</fieldset>
{/* <label className='my-4'>Ajouter 2 images de votre oeuvre</label>
<input type="file" className='border w-full my-4 p-3' multiple onChange={(e) => {
    const files = e.target.files;
    if (files.length > 2) {
      alert("Vous ne pouvez sélectionner que 2 fichiers maximum.");
      e.target.value = null; // Reset input
    }
  }} /> */}
  {/* <label className='my-4'>Photo de profil</label>
<input type="file" className='border w-full my-4 p-3' /> */}

  <div className='my-4'>
    <button className='btn' type='submit'
    
    >Enregistrer</button>
  </div>
        </form>
    )
}

function RegisterClients() {  
  // const [nom,setNom] = React.useState("")
  // const [prenoms,setPrenoms] = React.useState("")
  // const [email,setEmail] = React.useState("")
  // const [phone,setPhone] = React.useState("")
  // const [password,setPassword] = React.useState("")
//   const handleSignUpWithEmailAndPassword = async (e) => {
//     e.preventDefault()
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
//     console.log("Utilisateur créé :", userCredential.user);
//     addUsers(email,nom,prenoms,phone)
//   } catch (error) {
//     console.error("Erreur :", error.message);
//   }
// };

// const addUsers = async (email,nom,prenoms,phone) => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//      email,nom,prenoms,phone,
//       createdAt: new Date(),
//     });
//     console.log("Document écrit avec l'ID :", docRef.id);
//   } catch (error) {
//     console.error("Erreur Firestore :", error);
//   }
// };



 const handleGoogleLogin = async () => {
    const user = await signInWithSocial(googleProvider);
    if (user) {
      console.log("Connecté avec Google :", user.reloadUserInfo);
    }
  };

  

    return(
      <div className='text-center'>
     <button 
     onClick={handleGoogleLogin}
     className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  S'inscrire avec Google
</button>
      </div>
//         <form className="overflow-y-auto h-95">
//             <input type="text"  className="input w-full my-4 validator" required placeholder="Nom" 
//   pattern="[A-Za-z][A-Za-z0-9\-]*" 
//   minLength="3" maxLength="30" 
//   title="Only letters, numbers or dash"
//   onChange={(e)=>setNom(e.target.value)}
//   value={nom}
//   />

//  <input type="text" 
//  className="input w-full my-4 validator"
//   required 
//   placeholder="Prénoms" 
//   value={prenoms}
//    onChange={(e)=>setPrenoms(e.target.value)}
//   pattern="[A-Za-z][A-Za-z0-9\-]*" 
//   minLength="3" 
//   maxLength="30" 
//   title="Only letters, numbers or dash" />

// <input className="input w-full my-4 validator" 
// type="email"
// value={email}
// required
// onChange={(e)=>setEmail(e.target.value)} 
// placeholder="email@gmail.com" />

// <input
// onChange={(e)=>setPhone(e.target.value)}  
// type="tel"
// value={phone}
//  className="input w-full my-4 validator tabular-nums" placeholder="Numéro de téléphone" 
//   pattern="[0-9]*" minLength="10" maxLength="10" title="Must be 10 digits" />

// <input type="password" 
// onChange={(e)=>setPassword(e.target.value)} 
// value={password}
// className="input w-full my-4 validator" required placeholder="Mot de passe" minLength="8" 
//   title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />

//   <div className='my-4'>
//     <button className='btn' type='submit'
//     onClick={handleSignUpWithEmailAndPassword}
//     >Enregistrer</button>
//   </div>
//         </form>
    )
}
