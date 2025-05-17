import React from 'react'
import Image from 'next/image'

export default function DescriptionAndPhoto() {
  return (
    <div className='w-full my-5 card'>
     <MyTitle title='Qui suis je ?' />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type 
         specimen book. It has survived not only five centuries, 
         but also the leap into electronic typesetting, 
         remaining essentially unchanged. 
         It was popularised in the 1960s with the 
         release of Letraset sheets containing Lorem Ipsum passages, 
         and more recently with desktop publishing software 
         like Aldus PageMaker including versions of Lorem Ipsum.
     </p>
     <section className='my-3'> 
      <MyTitle title='Galeries' />
     <div className='flex gap-3 justify-center flex-wrap'>
    <Image
      src="/photos.jfif"
      alt="Picture of the author"
      width={500}
      height={500}
    />
     <Image
      src="/photos.jfif"
      alt="Picture of the author"
      width={500}
      height={500}
    />
     </div>
     </section>

     <section className='my-3'> 
        <MyTitle title='Contacts' />
     <p>0545749741</p>
     </section>
    
     
    </div>
  )
}

function MyTitle({title}) {
    return(
          <h1 className='text-xl my-3 font-semibold'>{title} :</h1>
    )
}
