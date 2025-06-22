"use client";
import * as React from 'react'
import MyTitle from '@/app/components/dashboard/MyTitle';
import MyDatatable from '@/app/components/dashboard/MyDatatable'
import MyDialogCreateModal from '@/app/components/dashboard/MyDialogCreateModal'
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CalendarIcon, Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
function HeureTravail() {
    const products= [{heure_debut:"07",heure_fin:"20"}];
    const actionBodyTemplate = (rowData) => {
        return (
            <div className='flex gap-5 justify-center'>
                <MyDialogCreateModal myBg='black' title={"Modifier"} >
               <MyForm libelle={rowData.categorie} />
                </MyDialogCreateModal>
            </div>
        );
    }
        const columns = [
            {field: 'heure_debut', header: 'Début (Heure)'},
            {field: 'heure_fin', header: 'Fin (Heure)'},
            {field: 'quatite', header: 'Actions',body:actionBodyTemplate}
        ];
    return (
        <div>
            <MyTitle title="Mon Heure de travail" />
         
            {!products.length && <MyDialogCreateModal myBg='black' title={"Ajouter"} >
               <MyForm />
                </MyDialogCreateModal>}
            <MyDatatable items={products}  columns={columns} />
        </div>
    )
}

function MyForm({libelle}){
    const [categorie,setCategorie]=React.useState(libelle)
     const [startHour, setStartHour] = React.useState("");
         const [endHour, setEndHour] = React.useState("");
        const hours = Array.from({ length: 25 }, (_, i) => i);
    return(
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-bold">Mon Heure de travail</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-prix">Heure de travail</Label>
              <div className="flex justify-center gap-5 items-center">
                <div>
                   <span className="text-sm font-semibold">Heure début</span>
              <Select
              value={startHour}
              onValueChange={(value) => {
                setStartHour(value);
              }}
            >
              <SelectTrigger className="w-full">
                <Clock className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Heure" />
              </SelectTrigger>
              <SelectContent className="h-[200px]">
                {hours.map((hour) => (
                  <SelectItem key={hour} value={hour.toString()}>
                    {hour.toString().padStart(2, "0")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
                </div>
             
              <div>
                <span className="text-sm font-semibold">Heure fin</span>
                 <Select
              value={endHour}
              onValueChange={(value) => {
                setEndHour(value);
              }}
            >
              <SelectTrigger className="w-full">
                <Clock className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Heure" />
              </SelectTrigger>
              <SelectContent className="h-[200px]">
                {hours.map((hour) => (
                  <SelectItem key={hour} value={hour.toString()}>
                    {hour.toString().padStart(2, "0")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
                </div>
              </div>
              
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


export default HeureTravail
