'use client';

import * as React from "react";
import LoadingPage from '../loading';
import AddBooks from './AddBooks'
async function getBooks() {
  try {
    const response = await fetch('http://192.168.1.66:3000/api/books');

    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Erreur lors de la récupération des livres :', error);
    return []; // ou null selon ton besoin
  }
}


const Books =()=>{
    const [books,setBooks] = React.useState([]);
    const [isLoading,setIsLoading] = React.useState(true);
    const [myQuery,setMyQuery] = React.useState("");

    async function handleBooks() {
        try{
            const books = await getBooks()
          setBooks(books)
          setIsLoading(false)
        }catch(error){
            console.log(error)
        }
    }

    const handleSubmit = async(e)=>{
      e.preventDefault();
      setIsLoading(true)
      const res = await fetch('http://192.168.1.66:3000/api/books/search?query='+myQuery)
      const books = await res.json();
      console.log("booksSEARCH",books)
      setBooks(books)
      setIsLoading(false)
    }

    const handleDelete = async(id)=>{
     try{
      const res = await fetch("http://192.168.1.66:3000/api/books/"+id,{
      method:"DELETE",
     })
     console.log("handleDeleteRES",res)
     if(res.ok){
      handleBooks()
     }
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
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="search"
                onChange={(e)=>setMyQuery(e.target.value)} 
                value={myQuery} 
                className="input input-bordered w-full"
                />
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
            <AddBooks refreshBooks={handleBooks}/>
            {books.map((item,index)=>(
              <div className="flex gap-9" key={index}>
                <p>{item.username}</p>
                <button className="btn" onClick={()=>handleDelete(item.id)}>Delete</button>
              </div>
            ))}
        </div>
    )
}
export default Books;