import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

export default function SearchCityOrCommune() {

  return (
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
  )
}
