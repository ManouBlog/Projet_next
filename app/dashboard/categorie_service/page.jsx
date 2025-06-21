"use client";
import React from 'react'
// import MyCalendar from '@/app/components/dashboard/MyCalendar'
import MyDatatable from '@/app/components/dashboard/MyDatatable'
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
            <MyDatatable items={products}  columns={columns} />
        </div>
    )
}

export default CategorieService
