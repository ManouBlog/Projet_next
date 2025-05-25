"use client";
import React from 'react'
import PhotoProfil from '../../components/PhotoProfil'
import ProfilInfo from "../../components/ProfilInfo"
import DescriptionAndPhoto from "../../components/DescriptionAndPhoto"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
export default function DetailPerson() {
  const dispatch = useDispatch();
    const router = useRouter();
    console.log(router)
  const { id } = router.query;
  const [item, setItem] = React.useState(null);
  React.useEffect(() => {
    const fetchItem = async () => {
        dispatch(changeIsLoading(true))
      if (!id) return;
      try {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("Document non trouvé!");
        }
      } catch (error) {
        console.error("Erreur:", error);
      } finally {
        dispatch(changeIsLoading(true))
      }
    };

    fetchItem();
  }, [id,dispatch]);
  return (
    <div>
      <PhotoProfil nom={item?.nom} />
      <ProfilInfo item={item} />
      <DescriptionAndPhoto />
    </div>
  )
}



