"use client";
import * as React from 'react'
// import MyCalendar from '@/app/components/dashboard/MyCalendar'
import MyTitle from '@/app/components/dashboard/MyTitle';
import MyDatatable from '@/app/components/dashboard/MyDatatable'
import MyDialogCreateModal from '@/app/components/dashboard/MyDialogCreateModal'
import IsDeleteItem from '@/app/components/dashboard/IsDeleteItem';
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
function AllServices() {
    const products= [{libelle:"test-service",prix:1000,duration:30,hour_or_min:"min",isActif:true}];
    const imageBodyTemplate = (rowData) => {
        return (
            <div className='flex gap-5 justify-center'>
                <MyDialogCreateModal myBg='black' title={"Modifier"} >
               <MyForm libelle={rowData.categorie} />
                </MyDialogCreateModal>
                 <MyDialogCreateModal myBg='red' title={"Supprimer"} >
               <IsDeleteItem title={"categorie"}/>
                </MyDialogCreateModal>  
            </div>
        );
    }
        const columns = [
            {field: 'libelle', header: 'Service'},
            {field: 'prix', header: 'Prix (Fcfa)'},
            {field: 'duration', header: 'Durée'},
            {field: 'hour_or_min', header: 'Temps'},
            {field: 'isActif', header: 'Status'},
            {field: 'quatite', header: 'Actions',body:imageBodyTemplate}
        ];
    return (
        <div>
            <MyTitle title="Services" />
            {/* <MyCalendar /> */}
            <MyDialogCreateModal myBg='black' title={"Ajouter une catégorie"} >
               <MyForm />
                </MyDialogCreateModal> 
            <MyDatatable items={products}  columns={columns} />
        </div>
    )
}

function MyForm({libelle}){
    const [categorie,setCategorie]=React.useState(libelle)
    return(
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-bold">Ajouter un service</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Le nom de la catégorie</Label>
              <Input id="name-1" name="name" defaultValue={categorie} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Annuler</Button>
            </DialogClose>
            <Button type="submit">Enregistrer</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    )
}


export default AllServices
