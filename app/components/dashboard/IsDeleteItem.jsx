import React from 'react'
import { Button } from "@/components/ui/button"
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function IsDeleteItem({title}) {
  return (
  <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-bold">Voulez-vous vraiment supprimer la {title} ?</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Annuler</Button>
            </DialogClose>
            <Button type="submit" className="bg-red-900 text-white">Enregistrer</Button>
          </DialogFooter>
        </DialogContent>
  )
}
