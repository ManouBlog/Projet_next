// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider, 
  FacebookAuthProvider,signInWithPopup } from "firebase/auth";
  import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLyLuz3QizJ9iI7bHRs25SGNmcJczc69M",
  authDomain: "fir-connect-547da.firebaseapp.com",
  projectId: "fir-connect-547da",
  storageBucket: "fir-connect-547da.firebasestorage.app",
  messagingSenderId: "894057349076",
  appId: "1:894057349076:web:c125c55205116b9eec2041"
};

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
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);