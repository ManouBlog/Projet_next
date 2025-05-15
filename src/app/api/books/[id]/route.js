import Books from '../data.json';

import { NextResponse } from 'next/server';


export async function DELETE(req,{params}){
    try{
 const { id } = await params
    const index = Books.findIndex((book)=>book.id == id)
    if(index !== -1){
     Books.splice(index,1)
     console.log("BooksID",Books)
    }
    return NextResponse.json('success DELETE')
    }catch(error){
     console.log(error)
    }
  
}