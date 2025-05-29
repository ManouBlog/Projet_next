// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider, 
  FacebookAuthProvider,signInWithPopup } from "firebase/auth";
  import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_API_KEY,
  authDomain: process.env.NEXT_AUTH_DOMAIN,
  projectId: process.env.NEXT_PROJECT_ID,
  storageBucket: process.env.NEXT_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_APP_ID
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
