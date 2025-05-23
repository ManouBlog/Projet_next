"use client";
// import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ProfilInfo({isBtnVisible}) {

   const router = useRouter()
 

  const handleClick = async () => {
    router.push('/DetailPerson')
  }

   return(
<div className='flex gap-3 items-center cursor-pointer justify-between w-full flex-wrap'
onClick={handleClick}
>
 <section>
  <h1 className='text-xl font-bold'>Adjobi Kadjo Pierre</h1>
  <p className='text-md badge badge-xs badge-warning font-bold'>Développeur</p>
  <p className='text-sm'>Bonoua-Résidenciel</p>
 </section>
 {isBtnVisible && <section>
    <button onClick={handleClick} className='btn'>Voir plus</button>
 </section> }
</div>
    )
}
