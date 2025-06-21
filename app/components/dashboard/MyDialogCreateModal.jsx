import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function MyDialogCreateModal({children,title}) {
  return (
    <Dialog>
        <div className='flex justify-end'>
  <DialogTrigger>{title}</DialogTrigger>
        </div>
  {children}
   
</Dialog>
  )
}
