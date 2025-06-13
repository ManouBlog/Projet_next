import React from 'react'
import { COLORS } from '../__design/colors'
import CardVisuel from '../components/bienvenue/CardVisuel'

function Bienvenue() {
    return (
        <div>
            <p style={{color:COLORS.light_green}}>Hello</p>
            <section className='flex w-full place-content-center flex-wrap gap-2'>
             <CardVisuel />
             <CardVisuel />
             <CardVisuel />
             <CardVisuel />
            </section>
           
        </div>
    )
}

export default Bienvenue
