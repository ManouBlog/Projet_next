'use client'
import * as React from 'react';
// import EmailCode from '../components/register/EmailCode';
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
     
      // const isRegisterVisible = useSelector((state)=>state.auth.isRegisterVisible)
      const modalOpen = useSelector((state)=>state.auth.modalOpen)
      const dispatch = useDispatch()
    return(
        <div className="card w-96 bg-base-100 shadow-sm">
<dialog id="my_modal_2" className={`modal ${modalOpen ? "modal-open":""}`}>
  {
    modalOpen &&  <div className="modal-box">
    <SaveInfoRegister />
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
     <ul>
  <li>🛠 "Gagnez +30% de clients locaux en vous inscrivant gratuitement !"</li>
  <li>🔧 "Vos compétences méritent d'être vues. Inscrivez-vous dès maintenant !"</li>
  <li>📱 "Des missions près de chez vous, sans prise de tête. Inscription en 2 minutes !"</li>
  {/* <li>💼 "Arrêtez de chercher des clients, laissez-les vous trouver !"</li> */}
  <li>💰 "Augmentez votre chiffre d'affaires avec des clients qualifiés."</li>
  {/* <li>📈 "0% de commission sur votre première mission ! 🎁"</li> */}
  {/* <li>🏆 "Rejoignez la communauté des artisans les mieux notés de [Ville]."</li> */}
  {/* <li>✅ "Certifié par des centaines de clients satisfaits."</li> */}
</ul>
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
     <ul>
  <li>⏱ "Un artisan disponible près de chez vous en moins de 24h !"</li>
  <li>🚪 "Votre problème résolu avant demain. Essayez gratuitement !"</li>
  {/* <li>🛡 "Des artisans vérifiés, avec avis réels. 100% sans arnaque."</li> */}
  {/* <li>⭐ "Nos artisans notés 4,9/5 vous attendent !"</li> */}
  {/* <li>💸 "Payez le juste prix, sans intermédiaire abusif."</li> */}
  {/* <li>🔎 "Comparez gratuitement les devis et économisez jusqu'à 30%."</li> */}
  <li>🏠 "Confiez votre maison à des experts de confiance."</li>
  <li>😌 "Enfin une plateforme où tout se passe bien !"</li>
</ul>
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
