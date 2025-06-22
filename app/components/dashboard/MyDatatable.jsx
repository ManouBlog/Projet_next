
import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
        
export default function MyDatatable({items,columns}) {
    
  return (
    <div className='card'>
        {items.length>0 ? <DataTable 
        className='w-full'
      value={items} 
      showGridlines
       stripedRows
      paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
              {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} body={col.body}/>
                ))}
            </DataTable> : <div className='font-bold text-center'>Pas de données</div>}
      
    </div>
  )
}
