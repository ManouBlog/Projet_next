"use client";
import * as React from 'react'
// import MyCalendar from '@/app/components/dashboard/MyCalendar'
import MyTitle from '@/app/components/dashboard/MyTitle';
import MyDatatable from '@/app/components/dashboard/MyDatatable'
import MyDialogCreateModal from '@/app/components/dashboard/MyDialogCreateModal'
import IsDeleteItem from '@/app/components/dashboard/IsDeleteItem';
// import {
//   DialogClose,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
function Clients() {
    const products= [{nom:"Adjobi",prenoms:'kadjo',email:'adjobikadjopierre27@gmail.com',contact:'0898787876'}];
   
       const fullNameTemplate = (rowData) => {
        return (
            <div className='flex gap-5 justify-center'>
                {rowData.nom} {rowData.prenoms}
            </div>
        );
    }
        const columns = [
            {field: 'nom', header: 'Clients',body:fullNameTemplate},
            {field: 'email', header: 'Email'},
             {field: 'contact', header: 'Contact'}
        ];
    return (
        <div>
            <MyTitle title="Mes clients" />
            <MyDatatable items={products}  columns={columns} />
        </div>
    )
}

export default Clients
