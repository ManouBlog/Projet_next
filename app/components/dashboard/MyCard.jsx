import React from 'react'

function MyCard({title,icons,number}) {
    return (
        <section className='card shadow-2xl bg-white p-5 text-black rounded-xl w-96'>
         <div className='my-2'>
            <h1 className='text-2xl'>{title}</h1>
         </div>
         <div>
             <p className='font-semibold text-xl text-center'>{number}</p>
         </div>
        </section>
    )
}

export default MyCard
