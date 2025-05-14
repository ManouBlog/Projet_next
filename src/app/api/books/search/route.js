import { NextResponse } from "next/server";
import Books from "../data.json";

export async function GET(req) {
    const {searchParams} = new URL(req.url);
    const query = searchParams.get('query');

    const filteredBooks = Books.filter(book=>{
        return book.username.toLowerCase().includes(query.toLowerCase());
    })
    return NextResponse.json(filteredBooks);
}