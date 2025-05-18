'use client'
import * as React from 'react'
import Metiers  from '../../metiers.json'
import City from "../../city.json"
import { useSelector,useDispatch } from 'react-redux';
import {changeIsRegisterVisible,changeCode,changeModalOpen} from "../../store/slice/AuthSlice"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db  } from "../../lib/firebase";
export default function SaveInfoRegister() {
    const isArtisanOrClients = useSelector((state)=>state.auth.isArtisanOrClients);
    const dispatch = useDispatch()
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
    const [valueMetiers,setValueMetiers] = React.useState("");
    return(
        <form className="overflow-y-auto h-95">
            <label className='my-4'>Nom</label>
            <input type="text"  className="input w-full my-4 validator" required placeholder="Nom" 
  pattern="[A-Za-z][A-Za-z0-9\-]*" minLength="3" maxLength="30" title="Only letters, numbers or dash" />
<label className='my-4'>Prénoms</label>
 <input type="text" className="input w-full my-4 validator" required placeholder="Prénoms" 
  pattern="[A-Za-z][A-Za-z0-9\-]*" minLength="3" maxLength="30" title="Only letters, numbers or dash" />
<label className='my-4'>Email</label>
<input className="input w-full my-4 validator" type="email" required placeholder="email@gmail.com" />
<label className='my-4'>Numéro de téléphone</label>
<input type="tel" className="input w-full my-4 validator tabular-nums" required placeholder="Numéro de téléphone" 
  pattern="[0-9]*" minLength="10" maxLength="10" title="Must be 10 digits" />
  <label className='my-4'>Votre Métier</label>
  <select className="select validator my-4 w-full" 
  defaultValue={valueMetiers}
  required>
    <option disabled value="">Choisir ton métier:</option>
    {
        Metiers.metiers.map((item,index)=>(
         <option key={index}>{item.nom} {item.icone}</option>
        ))
    }
  </select>
  <label className='my-4'>Lieu de Travail</label>
   <select className="select validator my-4 w-full" 
  defaultValue={valueMetiers}
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
  <textarea className="textarea h-24 w-full" placeholder="Qui suis je ?"></textarea>
</fieldset>
<label className='my-4'>Ajouter 2 images de votre oeuvre</label>
<input type="file" className='border w-full my-4 p-3' multiple onChange={(e) => {
    const files = e.target.files;
    if (files.length > 2) {
      alert("Vous ne pouvez sélectionner que 2 fichiers maximum.");
      e.target.value = null; // Reset input
    }
  }} />
  <label className='my-4'>Photo de profil</label>
<input type="file" className='border w-full my-4 p-3' />

  <div className='my-4'>
    <button className='btn' type='submit'>Enregistrer</button>
  </div>
        </form>
    )
}

function RegisterClients() {

  const [nom,setNom] = React.useState("")
  const [prenoms,setPrenoms] = React.useState("")
  const [email,setEmail] = React.useState("")
  const [phone,setPhone] = React.useState("")
  const [password,setPassword] = React.useState("")
  const handleSignUpWithEmailAndPassword = async (e) => {
    e.preventDefault()
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    console.log("Utilisateur créé :", userCredential.user);
    addUsers(email,nom,prenoms,phone)
  } catch (error) {
    console.error("Erreur :", error.message);
  }
};

const addUsers = async (email,nom,prenoms,phone) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
     email,nom,prenoms,phone,
      createdAt: new Date(),
    });
    console.log("Document écrit avec l'ID :", docRef.id);
  } catch (error) {
    console.error("Erreur Firestore :", error);
  }
};

    return(
        <form className="overflow-y-auto h-95">
            <input type="text"  className="input w-full my-4 validator" required placeholder="Nom" 
  pattern="[A-Za-z][A-Za-z0-9\-]*" 
  minLength="3" maxLength="30" 
  title="Only letters, numbers or dash"
  onChange={(e)=>setNom(e.target.value)}
  value={nom}
  />

 <input type="text" 
 className="input w-full my-4 validator"
  required 
  placeholder="Prénoms" 
  value={prenoms}
   onChange={(e)=>setPrenoms(e.target.value)}
  pattern="[A-Za-z][A-Za-z0-9\-]*" 
  minLength="3" 
  maxLength="30" 
  title="Only letters, numbers or dash" />

<input className="input w-full my-4 validator" 
type="email"
value={email}
required
onChange={(e)=>setEmail(e.target.value)} 
placeholder="email@gmail.com" />

<input
onChange={(e)=>setPhone(e.target.value)}  
type="tel"
value={phone}
 className="input w-full my-4 validator tabular-nums" placeholder="Numéro de téléphone" 
  pattern="[0-9]*" minLength="10" maxLength="10" title="Must be 10 digits" />

<input type="password" 
onChange={(e)=>setPassword(e.target.value)} 
value={password}
className="input w-full my-4 validator" required placeholder="Mot de passe" minLength="8" 
  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />

  <div className='my-4'>
    <button className='btn' type='submit'
    onClick={handleSignUpWithEmailAndPassword}
    >Enregistrer</button>
  </div>
        </form>
    )
}
