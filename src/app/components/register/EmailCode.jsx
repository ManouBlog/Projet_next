'use client'
import * as React from 'react';
import MyInputLabel from "../../components/MyInputLabel"
import { useDispatch, useSelector } from 'react-redux';
import {changeCode,changeIsRegisterVisible} from "../../store/slice/AuthSlice"

export default function EmailCode() {
     const [email,setEmail] = React.useState("");
     const [code,setCode] = React.useState("");
     const isAuthCode = useSelector((state)=>state.auth.isCode); 
     const dispatch = useDispatch() 
     function handleRegisterCode(e){
      e.preventDefault();
      dispatch(changeCode(1))
     }
  return (
    <>
       <MyInputLabel 
    labelName="Email"
    typeInput="email"
    placeholder="Entrer votre email"
    onHandleValue={e=>setEmail(e.target.value)}
     value={email}
    />
    {
        isAuthCode !== 0 && <MyInputLabel 
    labelName="Code"
    typeInput="text"
    placeholder="Entrer le code"
    onHandleValue={e=>setCode(e.target.value)}
     value={code}
    />
    }
    
    <div className='my-3'>
        {isAuthCode !== 0 ? <button className='btn'
        onClick={()=>dispatch(changeIsRegisterVisible(true))}
        type="submit"
        >Enregistrer</button>:<button className='btn'
        onClick={handleRegisterCode}
        type="submit"
        >Envoyer</button>}
        
    </div>
    </>
  )
}
