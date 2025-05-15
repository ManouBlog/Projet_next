import Books from './data.json';

import { NextResponse } from 'next/server';

export async function GET(req) {
    return NextResponse.json(Books)
}

export async function POST(req){
    console.log("POST REQ",req)
    const {username,name,email} = await req.json();
    console.log("POST reçu :", { username, name, email });
    const newEntry = {
        id:Date.now(),
        role:"Admin",
        email:email,
        username:username,
        name:name
    } 
    console.log("newEntry",newEntry)
  
    Books.push(newEntry)
    console.log("BOOKS",Books)
    return NextResponse.json('success')

}