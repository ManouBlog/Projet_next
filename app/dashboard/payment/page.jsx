"use client";
import * as React from 'react'
import MyTitle from '@/app/components/dashboard/MyTitle';
import MyDatatable from '@/app/components/dashboard/MyDatatable'
function HistoriquePayment() {
    const products= [{date:"2025-10-05",method:'MTN',
        montant:'25000',status:'En cours',client:'Adjobi'}];
        const columns = [
            {field: 'date', header: 'Date'},
            {field: 'method', header: 'Methode de paiement'},
             {field: 'montant', header: 'Montant (Fcfa)'},
             {field: 'status', header: 'Status'},
             {field: 'client', header: 'Client'}
        ];
    return (
        <div>
            <MyTitle title="Historique de paiement" />
            <MyDatatable items={products}  columns={columns} />
        </div>
    )
}

export default HistoriquePayment
