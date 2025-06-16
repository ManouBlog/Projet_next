import React from 'react'
import MyCard from '../components/dashboard/MyCard'

function DashboardPage() {
    return (
        <div className='flex gap-3 items-center flex-wrap justify-center'>
        <MyCard title='Total Clients' number='20'/>
        <MyCard title='Total Services' number='5'/>
        <MyCard title='Total Employés' number='2' />
        <MyCard title='Rendez-vous' number='2'/>
        </div>
    )
}

export default DashboardPage
