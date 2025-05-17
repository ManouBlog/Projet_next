'use client'
import * as React from 'react';
// import MyInputLabel from "../components/MyInputLabel"
import EmailCode from '../components/register/EmailCode';
import SaveInfoRegister from '../components/register/SaveInfoRegister';
import { useDispatch, useSelector } from 'react-redux';
import {changeIsRegisterVisible,changeCode,changeIsArtisanOrClients,changeModalOpen} from "../store/slice/AuthSlice"

export default function Connexionpage() {
  return (
    <div className='flex gap-3 flex-wrap items-center justify-center'>
      <RegisterArtisan />
      <RegisterClients />
    </div>
  )
}

function RegisterArtisan() {
     
      const isRegisterVisible = useSelector((state)=>state.auth.isRegisterVisible)
      const modalOpen = useSelector((state)=>state.auth.modalOpen)
      const dispatch = useDispatch()
    return(
        <div className="card w-96 bg-base-100 shadow-sm">
<dialog id="my_modal_2" className={`modal ${modalOpen ? "modal-open":""}`}>
  {
    modalOpen &&  <div className="modal-box">
    {isRegisterVisible  ? <SaveInfoRegister />:<EmailCode />}
  </div>
  }
 
  <form method="dialog" className="modal-backdrop">
    <button onClick={()=>{
      dispatch(changeModalOpen(false))
       dispatch(changeIsRegisterVisible(false))
      dispatch(changeCode(0))
      }}>close</button>
  </form>
</dialog>
  <div className="card-body">
     <h1 className='text-3xl font-bold'>Artisans</h1>
    <div className="mt-6">
      <button className="btn btn-primary btn-block"
      onClick={()=>{
        dispatch(changeIsArtisanOrClients("artisan"))
         dispatch(changeModalOpen(true))
        
      }}
      >S'inscrire</button>
    </div>
  </div>
</div>
    )
}

function RegisterClients() {
   const dispatch = useDispatch()
    return(
        <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
     <h1 className='text-3xl font-bold'>Clients</h1>
    <div className="mt-6">
      <button className="btn btn-primary btn-block"
      onClick={()=>{
        dispatch(changeIsArtisanOrClients("clients"))
         dispatch(changeModalOpen(true))
      }}
      >S'inscrire</button>
    </div>
  </div>
</div>
    )
}
