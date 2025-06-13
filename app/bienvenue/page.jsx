import React from 'react'
import Header from '../components/bienvenue/Header'
import CardVisuel from '../components/bienvenue/CardVisuel'

function Bienvenue() {
    return (
        <div>
            <Header />
            <section className='flex w-full place-content-center flex-wrap gap-2'>
             <CardVisuel />
             <CardVisuel />
             <CardVisuel />
             <CardVisuel />
             <CardVisuel />
             <CardVisuel />
             <CardVisuel />
             <CardVisuel />
            </section>
           
        </div>
    )
}

export default Bienvenue
