'use client';
import * as React from 'react';


export default function AddBooks({refreshBooks}) {
    const [modalOpen,setModalOpen] = React.useState(false);
    const [name,setDataName] = React.useState("");
    const [email,setDataEmail] = React.useState("");
    const [username,setDataUsername] = React.useState("");
    async function handleAdd(e){
       try{
   e.preventDefault()
   const res = await fetch("https://projet-next-sandy.vercel.app/api/books",{
    method:"POST",
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify({
        username:username,
        name:name,
        email:email,
    })
   })
   console.log(res)
   if(res.ok){
    setModalOpen(false)
    refreshBooks()
   }
       }catch(error){
        console.log(error);
       }
    }
  return (
    <div>
<button className="btn"
onClick={()=>setModalOpen(true)}
>Ajouter +</button>
<dialog id="my_modal_2" className={`modal ${modalOpen ? "modal-open":""}`}>
  <div className="modal-box">
    <input type="text" onChange={e=>setDataName(e.target.value)}
    value={name}
    className="input input-bordered w-full" placeholder='name' />
    <input type="text" onChange={e=>setDataEmail(e.target.value)}
    value={email}
    className="input input-bordered w-full" placeholder='email' />
    <input type="text" onChange={e=>setDataUsername(e.target.value)}
    value={username}
    className="input input-bordered w-full" placeholder='username' />
    <div className='my-3'>
        <button className='btn'
        type="submit"
        onClick={handleAdd}
        >ADD</button>
    </div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button onClick={()=>setModalOpen(false)}>close</button>
  </form>
</dialog>
    </div>
  )
}
