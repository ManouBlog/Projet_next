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
function Employes() {
    const products= [{employe:"Brice",email:"Brice@gmail.com",contact:8909787656}];
    const imageBodyTemplate = (rowData) => {
        return (
            <div className='flex gap-5 justify-center'>
                <MyDialogCreateModal myBg='black' title={"Modifier"} >
               <MyForm libelle={rowData.employe} />
                </MyDialogCreateModal>
                 <MyDialogCreateModal myBg='red' title={"Supprimer"} >
               <IsDeleteItem title={"la catégorie"}/>
                </MyDialogCreateModal>  
            </div>
        );
    }
        const columns = [
            {field: 'employe', header: 'Employé'},
            {field: 'email', header: 'Email'},
            {field: 'contact', header: 'Contact'},
            {field: 'quatite', header: 'Actions',body:imageBodyTemplate}
        ];
    return (
        <div>
            <MyTitle title="Mes employés" />
            {/* <MyCalendar /> */}
            <MyDialogCreateModal myBg='black' title={"Ajouter un personne"}>
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
            <DialogTitle className="font-bold">Ajouter une catégorie</DialogTitle>
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


export default Employes
