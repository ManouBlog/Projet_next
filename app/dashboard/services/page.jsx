"use client";
import { Textarea } from "@/components/ui/textarea"
import * as React from 'react'
// import MyCalendar from '@/app/components/dashboard/MyCalendar'
import MyTitle from '@/app/components/dashboard/MyTitle';
import MyDatatable from '@/app/components/dashboard/MyDatatable'
import MyDialogCreateModal from '@/app/components/dashboard/MyDialogCreateModal'
import IsDeleteItem from '@/app/components/dashboard/IsDeleteItem';
import { Switch } from "@/components/ui/switch"
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
function AllServices() {
    const products= [{libelle:"test-service",prix:1000,duration:30,hour_or_min:"min",isActif:true}];
    const imageBodyTemplate = (rowData) => {
        return (
            <div className='flex gap-5 justify-center'>
                <MyDialogCreateModal myBg='black' title={"Modifier"} >
               <MyForm libelle={rowData.categorie} />
                </MyDialogCreateModal>
                 <MyDialogCreateModal myBg='red' title={"Supprimer"} >
               <IsDeleteItem title={"le service"}/>
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
            <MyDialogCreateModal myBg='black' title={"Ajouter un service"} >
               <MyForm />
                </MyDialogCreateModal> 
            <MyDatatable items={products}  columns={columns} />
        </div>
    )
}

function MyForm({libelle}){
     const [myHour, setMyHour] = React.useState("");
     const [myMinutes, setMyMinutes] = React.useState("");
    const hours = Array.from({ length: 13 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

    const [categorie,setCategorie]=React.useState(libelle)
    return(
      <form>
        <DialogContent className="sm:max-w-[425px] h-100 overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-bold">Ajouter un service</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Nom du service</Label>
              <Input id="name-1" name="name" placeholder="le nom du service" defaultValue={categorie} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Description du service</Label>
              <Textarea placeholder="Type your message here." />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-prix">Prix du service</Label>
              <Input type="number" id="name-prix" name="prix" defaultValue={categorie} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-prix">Durée du service</Label>
              <div className="flex justify-center gap-5 items-center">
                <div>
                   <span className="text-sm font-semibold">Heure</span>
              <Select
              value={myHour}
              onValueChange={(value) => {
                setMyHour(value);
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
                <span className="text-sm font-semibold">Minutes</span>
               <Select
                             value={myMinutes}
                             onValueChange={(value) => {
                               setMyMinutes(value);
                             }}
                           >
                             <SelectTrigger className="w-full">
                               <SelectValue placeholder="Minute" />
                             </SelectTrigger>
                             <SelectContent className="h-[200px]">
                               {minutes.map((minute) => (
                                 <SelectItem key={minute} value={minute.toString()}>
                                   {minute.toString().padStart(2, "0")}
                                 </SelectItem>
                               ))}
                             </SelectContent>
                           </Select>
                </div>
              </div>
              
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-prix">Catégorie</Label>
               <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selectionne une catégorie" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Catégories</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>
             <div className="grid gap-3">
              <Label htmlFor="name-prix">Visibilité</Label>
               <div className="flex items-center space-x-2">
      <Switch id="visibility" 
      checked={true}
    //   onCheckedChange={field.onChange} 
      />
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


export default AllServices
