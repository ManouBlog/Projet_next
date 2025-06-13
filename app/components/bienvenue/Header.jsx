import React from 'react'
import HeroPage from './HeroPage'

function Header() {
    return (
        <>
        <NavBar />
        <HeroPage />
        <div className='flex justify-end gap-2 p-5 flex-wrap'>
            <label className="input">
  <input type="search" className="grow w-full border-2 rounded p-2 border-gray-600" placeholder="Search" />
</label>
<div>
<input type="text" className="input border-2 w-96 rounded p-2 border-gray-600" placeholder="Choisir une commune" list="browsers" />
<datalist id="browsers">
  <option value="Yopougon"></option>
  <option value="Marcory"></option>
  <option value="Koumassi"></option>
  <option value="Abobo"></option>
  <option value="Port-bouet"></option>
</datalist>
</div>
        </div>
        </>
        
    )
}

function NavBar() {
    return(
       <div className="navbar text-black bg-white shadow-sm fixed z-10 w-full">
  <div className="flex-1">
    <a className="btn btn-ghost  text-xl">COIFFEURPRO</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    )
}

export default Header
