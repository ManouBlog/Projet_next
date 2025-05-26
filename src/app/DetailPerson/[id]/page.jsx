"use client";
import React from 'react'
import PhotoProfil from '../../components/PhotoProfil'
import ProfilInfo from "../../components/ProfilInfo"
import DescriptionAndPhoto from "../../components/DescriptionAndPhoto"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { usePathname, useSearchParams } from 'next/navigation';
import {changeIsLoading} from '../../store/slice/loadingSlice';
import { useDispatch } from 'react-redux';
export default function DetailPerson() {
  const dispatch = useDispatch();
    const pathname = usePathname()
  const searchParams = useSearchParams()
    console.log("searchParams",searchParams)
    console.log("pathname",pathname)
  const id = pathname.split('/DetailPerson/')[1];
  const [item, setItem] = React.useState(null);
  const fetchItem = async () => {
      if (!id) return;
      try {
        dispatch(changeIsLoading(true))
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("Document non trouvé!");
        }
      } catch (error) {
        console.error("Erreur:", error);
      } finally{
        dispatch(changeIsLoading(false))
      }
    };
  React.useEffect(() => {
    fetchItem();
  }, []);
  return (
    <div>
      <PhotoProfil nom={item?.nom} />
      <ProfilInfo item={item} />
      <DescriptionAndPhoto />
    </div>
  )
}



