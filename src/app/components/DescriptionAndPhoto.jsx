import React from 'react'
// import Image from 'next/image'

export default function DescriptionAndPhoto({quiSuis,phone,email}) {
  return (
    
    <div className='w-full my-5 card'>
      {
      quiSuis &&  <>
       <MyTitle title='Qui suis je ?' />
      <p>{quiSuis}
     </p>
      </>
    }
    
     {/* <section className='my-3'> 
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
     </section> */}

     <section className='my-3'> 
        <MyTitle title='Contacts' />
     <p>{phone}</p>
     <p>{email}</p>
     </section>
    
     
    </div>
  )
}

function MyTitle({title}) {
    return(
          <h1 className='text-xl my-3 font-semibold'>{title} :</h1>
    )
}
