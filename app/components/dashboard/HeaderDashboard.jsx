import React from 'react'

function HeaderDashboard() {
    return (
           <div className="navbar bg-base-100 shadow-xl">
  <div className="flex-1">
    <a className="btn btn-ghost text-2xl font-bold">Tableau de bord</a>
  </div>
  <div className="flex gap-2">
    {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between text-xl">
            Profile
            {/* <span className="badge">New</span> */}
          </a>
        </li>
        <li><a className='text-xl'>Settings</a></li>
        <li><a className='text-xl'>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    )
}

export default HeaderDashboard
