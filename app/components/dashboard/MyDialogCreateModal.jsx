import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function MyDialogCreateModal({children,title,myBg}) {
  return (
    <Dialog>
        <div className='flex justify-end'>
  <DialogTrigger style={{background:myBg}} className="btn text-white rounded">{title}</DialogTrigger>
        </div>
  {children}
   
</Dialog>
  )
}
