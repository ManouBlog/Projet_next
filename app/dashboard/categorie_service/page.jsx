"use client";
import React from 'react'
// import MyCalendar from '@/app/components/dashboard/MyCalendar'
import MyDatatable from '@/app/components/dashboard/MyDatatable'
import MyDialogCreateModal from '@/app/components/dashboard/MyDialogCreateModal'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
function CategorieService() {
    const products= [{code:1,name:"adjobi",category:"A",quantity:2}];
    const imageBodyTemplate = (rowData) => {
        return <p className='text-center text-red-500'>{rowData.quantity}</p>;
    }
        const columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity',body:imageBodyTemplate}
        ];
    return (
        <div>
            Catégorie de services
            {/* <MyCalendar /> */}
            <MyDialogCreateModal title={"Ajouter une catégorie"} >
                <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
                </MyDialogCreateModal> 
            <MyDatatable items={products}  columns={columns} />
        </div>
    )
}

export default CategorieService
