import React from 'react'
import CardVisuel from '@/app/components/bienvenue/CardVisuel'
import MyTitle from '@/app/components/dashboard/MyTitle';
function PageFavoris() {
    return (
        <React.Fragment>
        <MyTitle title="Mes favoris" />
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
        </React.Fragment>
    )
}

export default PageFavoris
