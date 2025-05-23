'use client'
import SearchPerson from "./components/SearchPerson";
import ListPerson from "./components/ListPerson";
import * as React from 'react';


export default function Home() {
   
  return (
    <div>
      <SearchPerson />
      <ListPerson />
    </div>
  
  );
}
