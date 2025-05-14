'use client';

import * as React from "react";
import LoadingPage from '../loading';

async function getBooks(){
    const response = await fetch('http://192.168.1.66:3000/api/books')
    const json = await response.json()
    return json;
}

const Books =()=>{
    const [books,setBooks] = React.useState([]);
    const [isLoading,setIsLoading] = React.useState(true);

    async function handleBooks() {
        try{
            const books = await getBooks()
          setBooks(books)
          setIsLoading(false)
        }catch(error){
            console.log(error)
        }
    }

    React.useEffect(()=>{
   handleBooks()
    },[])

    if(isLoading){
        return <LoadingPage />
    }
    return(
        <div>
            <h1>Books</h1>
            {books.map((item,index)=>(
                <p key={index}>{item.username}</p>
            ))}
        </div>
    )
}
export default Books;