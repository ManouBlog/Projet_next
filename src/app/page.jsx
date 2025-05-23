'use client'
import SearchPerson from "./components/SearchPerson";
import ListPerson from "./components/ListPerson";
import * as React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./lib/firebase";

export default function Home() {
    React.useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    console.log("USER", user);
    
    if (user) {
      console.log("ROOTNAVIGATOR_USER", user);
      // // Envoyez l'objet user brut (pas stringifié)
      // dispatch(addUser(user));
    } else {
      console.log("User is not authenticated");
    }
    setIsLoading(false);
  });

  return () => unsubscribe(); // Nettoyage pour éviter les fuites mémoire
}, []);
  return (
    <div>
      <SearchPerson />
      <ListPerson />
    </div>
  
  );
}
