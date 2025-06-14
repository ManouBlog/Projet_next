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
  const reverseGeocode = (coords) => {
    const key = "";
     let result;
    opencage.geocode({ key, q: coords })
      .then((response) => {
      result = response.results[0];
        console.log("RESULTAT GEO CODE NAME : ", result);
        setAdress(result.formatted)
    });
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
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
  function getGeolocationCurrently(){
    navigator.geolocation.getCurrentPosition(success, error, options);
  }
   
    return (
        <>
        <NavBar />
        <div className='flex justify-end gap-2 p-5 flex-wrap'>
        
<div className='mt-20 md:mx-8'>
<input type="text" className="input border-2 w-full rounded p-6 border-gray-600" placeholder="Choisir une commune" list="browsers" />
<datalist id="browsers">
  <option value="Yopougon"></option>
  <option value="Marcory"></option>
  <option value="Koumassi"></option>
  <option value="Abobo"></option>
  <option value="Port-bouet"></option>
</datalist>
<button className='flex items-center gap-1 cursor-pointer font-bold text-sm mt-3'
onClick={getGeolocationCurrently}
 style={{color:COLORS.light_green}}> <FaLocationArrow  size={15}/>
<span>Localisation actuelle</span>
</button>
<span>{adress}</span>
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
