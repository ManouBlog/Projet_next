"use client";
import * as React from 'react'
import BtnLink from '../BtnLink'
import { FaLocationArrow } from "react-icons/fa6";
import { COLORS } from '@/app/__design/colors';
import opencage from "opencage-api-client";
  const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
  };

function Header() {
  const [longitude, setLongitude] = React.useState("");
  const [latitude, setLatitude] = React.useState("");
  const [adress,setAdress] = React.useState("");
  const [isLoading,setIsLoading] = React.useState(false);
  const [allAdresse,setAllAdresse] = React.useState([]);
  const [cityOrAdresse,setCityOrAdresse] = React.useState("");
  const reverseGeocode = (coords) => {
    setIsLoading(true)
    const key = "";
    setTimeout(()=>{
 opencage.geocode({ key, q: coords})
      .then((response) => {
        const africanResults = response.results.filter(result => 
      result.components.continent === "Africa" && result.components.state === "Abidjan"
    );
    
    if (africanResults.length > 0) {
      const result = africanResults[0];
      console.log("africanResults",africanResults)
      console.log("Résultat géocodage (Afrique) :", result);
      setAdress(result.formatted);
      setCityOrAdresse(result.formatted)
      setAllAdresse(africanResults)
    } else {
      console.error("Aucun résultat trouvé en Afrique.");
    } 
     setIsLoading(false)
    })
    .catch(error=>{
      alert(error)
    })
    .finally(()=>{
     setIsLoading(false)
    });
    },250)
  
  };
function success(pos) {
   const crd = pos.coords;
   setLongitude(crd.longitude)
   setLatitude(crd.latitude)
   const data = `${crd.latitude},${crd.longitude}`;
   console.log("DATAURL",data)
   reverseGeocode(data);
  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}
function error(err) {
  alert(`ERROR(${err.code}): ${err.message}`)
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
  function getGeolocationCurrently(){
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  function writeCityOrAddressForGeolocation(cityOrAddress) {
    if(cityOrAddress.trim().length >= 3){
   reverseGeocode(cityOrAddress.trim());
    }else{
      return;
    }
  }
   
    return (
        <>
        <NavBar />
        <div className='flex justify-end gap-2 p-5 flex-wrap'>
<div className='mt-20 md:mx-8'>
  <div className='relative'>
<input type="search" 
value={cityOrAdresse}
className="input border-2 w-full rounded p-6 border-gray-600 bg-white"
placeholder="Ville,commune" 
onChange={(e)=>{
  setCityOrAdresse(e.target.value)
  writeCityOrAddressForGeolocation(e.target.value)
  if(e.target.value === ''){
setAllAdresse([])
  }
  }}
/>
{allAdresse.length > 0 &&  <div className='absolute left-0 right-0 bottom-0
 top-13 h-35 rounded z-9 p-2 overflow-y-auto w-full bg-white
  shadow-2xs border-1 border-black'>
 <ul>
 {allAdresse.map((item,index)=>(
  <li key={index} className='cursor-pointer my-2 text-sm font-semibold'
  onClick={()=>{
    setCityOrAdresse(item.formatted)
    setAllAdresse([])
  }}
  >{item.formatted}</li>
))}
 </ul>

</div>}

  </div>



<button className='flex items-center gap-1 cursor-pointer font-bold text-sm mt-3'
onClick={getGeolocationCurrently}
 style={{color:COLORS.light_green}}> <FaLocationArrow  size={15}/>
<span>Localisation actuelle</span>
{isLoading && <span className="loading loading-spinner loading-xs"></span>}

</button>
</div>

        </div>
        </>
        
    )
}

function NavBar() {
    return(
       <div className="navbar text-black bg-white shadow-sm fixed z-10 w-full">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl font-bold">COIFFEURPRO </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <BtnLink title={"Se connecter"} href={"/auth/login"} />
      </li>
    </ul>
  </div>
</div>
    )
}

export default Header
