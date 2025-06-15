"use client";
import * as React from 'react'
import { COLORS } from '@/app/__design/colors';
import Link from 'next/link'
import Input from "@/app/components/Input"

function RegisterPage() {
    const [btnChosen,setBtnChosen] = React.useState("coiffeur")
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content sm:w-full md:w-150 flex-col">
    <h1 className='text-center text-white text-4xl'>COIFFEURPRO</h1>
    <span className='text-white text-sm'>L'application fait pour les coiffeurs</span>
    <div className="card bg-white w-full shrink-0 shadow-2xl text-black">
        <div className='flex gap-5 items-center justify-center my-4 flex-wrap'>
            <button className='btn rounded cursor-pointer'
            onClick={()=>setBtnChosen("coiffeur")}
            style={{background:btnChosen === 'coiffeur' ? COLORS.light_green:null}}
            >Je suis un Coiffeur</button>
              <button 
              onClick={()=>setBtnChosen("client")}
              style={{background:btnChosen !== 'coiffeur' ? COLORS.light_green:null}}
              className='btn rounded cursor-pointer'>Je suis un client</button>
        </div>
        {btnChosen === 'coiffeur' &&  <CoiffeurPro /> }
  {btnChosen === 'client' &&  <Clients /> }
   
    </div>
    <Link  style={{color:COLORS.light_green}}
     className='text-sm' href={"/auth/login"}>Se connecter</Link>
  </div>
        </div>
    )
}


function CoiffeurPro() {
  const [entreprise,setEntreprise] = React.useState('');
  const [nom,setNom] = React.useState('');
  const [prenoms,setPrenoms] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [contact,setContact] = React.useState('');
  const [password,setPassword] = React.useState('');
  const [profil,setProfil] = React.useState(null);

  function registerCoiffeurPro() {
     const data = {
      entreprise:entreprise,
      nom:nom,
      prenoms:prenoms,
      email:email,
      contact:contact,
      password:password,
      profil:profil
     }
     console.log(data)
  }
    return(
   <div className="card-body w-full">
        <fieldset className="fieldset">
          <Input label={"Entreprise"} 
          valueInput={entreprise}
          onChange={setEntreprise}
          placeholder={"Le nom de l'entreprise"} 
          type={"text"} isRequired/>
          <Input label={"Nom du coiffeur"}  
          valueInput={nom}
          onChange={setNom}
          placeholder={"Nom du coiffeur"} 
          type={"text"} isRequired/>
          <Input label={"Prénoms du coiffeur"} 
           valueInput={prenoms}
          onChange={setPrenoms}
          placeholder={"Prénoms du coiffeur"} type={"text"} isRequired/>
            <Input label={"Email de l'entreprise"}  
            valueInput={email}
          onChange={setEmail}
            placeholder={"Email"} type={"email"} isRequired/>
            <Input label={"Contact de l'entreprise"} 
            valueInput={contact}
          onChange={setContact}
            placeholder={"Contact"} type={"number"} isRequired/>
           <label className="label">Photo de profil
        <span style={{color:'red'}}>*</span>
         </label>
          <input 
          onChange={(e)=>{
            const image = e.target.files[0];
            console.log(image)
            setProfil(image)
          }}
          type="file"
          className="input border-gray-600 rounded py-4 border-2 mb-8 w-full" 
         />
         <Input label={"Mot de passe"}
         valueInput={password}
          onChange={setPassword}
         placeholder={"Mot de passe"} type={"password"} isRequired/>
          <div><a className="link link-hover">Mot de passe oublié?</a></div>
          <button 
          onClick={registerCoiffeurPro}
          className="btn border-0 text-black p-5 mt-5 rounded-xl 
      font-semibold text-xl" 
      style={{background:COLORS.light_green}}
      >Enregistrer</button>
        </fieldset>
      </div>
    )
}

function Clients() {
    return(
   <div className="card-body w-full">
        <fieldset className="fieldset">
            <Input label={"Nom"}  placeholder={"Nom"} type={"text"} isRequired/>
                     <Input label={"Prénoms"}  placeholder={"Prénoms"} type={"text"} isRequired/>
                      <Input label={"Contact"}  placeholder={"Contact"} type={"text"} isRequired/>
                      <Input label={"Mon adresse géographique"}  placeholder={"Mon adresse"} type={"search"}/>
            <Input label={"Email"}  placeholder={"Email"} type={"email"} isRequired/>

         <Input label={"Mot de passe"}  placeholder={"Mot de passe"} type={"password"} isRequired/>
          <div><a className="link link-hover">Mot de passe oublié?</a></div>
          <button className="btn border-0 text-black p-5 mt-5 rounded-xl 
      font-semibold text-xl" 
      style={{background:COLORS.light_green}}
      >Enregistrer</button>
        </fieldset>
      </div>
    )
}

export default RegisterPage
