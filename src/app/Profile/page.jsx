"use client";
import * as React from 'react'

export default function ProfilInfo() {
    
  return (
    <>
    <h1 className='text-2xl font-bold'>Mon Profil</h1>
<div className="tabs tabs-border">
  <input type="radio" name="my_tabs_2" className="tab" aria-label="Détails du profil" defaultChecked />
  <div className="tab-content border-base-300 bg-base-100 p-10">
   <DetailProfil />
  </div>
   <input type="radio" name="my_tabs_2" className="tab" aria-label="Changer le mot de passe" />
  <div className="tab-content border-base-300 bg-base-100 p-10">
    <DetailPassword />
  </div>
</div>
    </>
  )
}

function DetailProfil() {
    const [nom,setNom] = React.useState("")
      const [prenoms,setPrenoms] = React.useState("")
      const [email,setEmail] = React.useState("")
      const [phone,setPhone] = React.useState("")
    //   const [password,setPassword] = React.useState("")
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

{/* <input type="password" 
onChange={(e)=>setPassword(e.target.value)} 
value={password}
className="input w-full my-4 validator" required placeholder="Mot de passe" minLength="8" 
  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" /> */}

  <div className='my-4'>
    <button className='btn' type='submit'
    // onClick={handleSignUpWithEmailAndPassword}
    >Modifier</button>
  </div>
        </form>
    );
}

function DetailPassword() {
   
      const [password,setPassword] = React.useState("")
    return(
          <form className="overflow-y-auto h-95">
     

<input type="password" 
onChange={(e)=>setPassword(e.target.value)} 
value={password}
className="input w-full my-4 validator" required placeholder="Mot de passe" minLength="8" 
  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />

  <div className='my-4'>
    <button className='btn' type='submit'
    // onClick={handleSignUpWithEmailAndPassword}
    >Modifier</button>
  </div>
        </form>
    );
}
