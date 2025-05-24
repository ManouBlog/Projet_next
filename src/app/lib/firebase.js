// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider, 
  FacebookAuthProvider,signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const app = initializeApp(firebaseConfig);
export const signInWithSocial = async (provider) => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("signInWithSocialRESULT",result)
    return result.user;
  } catch (error) {
    console.error("Erreur :", error.message);
    return null;
  }
};
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);