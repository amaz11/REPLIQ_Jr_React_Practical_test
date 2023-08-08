import React from 'react'
import './dropdown.css'
import { Link, useNavigate } from 'react-router-dom'


const Dropdown = ({role}) => {
  const navigate = useNavigate()
  const logout = ()=>{
    document.cookie = "Bearer="
    navigate('/')
  }
  return (   
<div className="">
  <div className="dropdown inline-block relative">
    <button className=" text-gray-700 font-semibold py-2 px-4 rounded-full w-10 h-10 inline-flex items-center bg-slate-300 ">
      <span className="mr-1 text-center">{role.name[0].toUpperCase()}</span>
    </button>
    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-40 bg-white z-20 right-2">
      <li className><Link className="rounded-t bg-gray-100 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" >{role.name}</Link></li>
      <li className><Link to={"/dashboard"} className="bg-gray-100 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" >Dashboard</Link></li>
      <li className><Link className="rounded-b bg-gray-100 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" onClick={logout}>Logout</Link></li>
    </ul>
  </div>
</div>

  )
}

export default Dropdown