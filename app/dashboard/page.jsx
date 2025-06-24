import React from 'react'
import MyCard from '../components/dashboard/MyCard'

function DashboardPage() {
    return (
        <>
         <div className='flex gap-10 my-10'>
            <div>
                <p>Revenu du mois</p>
            <h1 className='text-xl font-semibold'>35000 Fcfa</h1>
            </div>
            <div>
                <p>Profit du mois</p>
            <h1 className='text-xl font-semibold'>35000 Fcfa</h1>
            </div>
         </div>
        <div className='flex gap-3 items-center flex-wrap justify-center'>
        <MyCard title='Total Clients' number='20'/>
        <MyCard title='Total Services' number='5'/>
        <MyCard title='Total Employés' number='2' />
        <MyCard title='Rendez-vous' number='2'/>
        </div>
        
        </>
    )
}

export default DashboardPage
