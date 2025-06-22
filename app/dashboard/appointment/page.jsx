import * as React from 'react'
import MyCalendar from '@/app/components/dashboard/MyCalendar'
import MyTitle from '@/app/components/dashboard/MyTitle';

function Appointment() {
   
    return (
        <div>
            <MyTitle title="Rendez-vous" />
            <MyCalendar />
        </div>
    )
}


export default Appointment
