import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../../components/Navbar/Topbar'
import Footer from '../../components/Footer/Footer'
import jwt_Decode from "jwt-decode";
const Client = () => {
  let user = document.cookie.split("Bearer=")[1]
  if(user=== undefined || user<10){
    return (
      <div>
          <Topbar/>
          <div className='xl:px-64 '>
          <Outlet/>
          </div>
          <Footer/>
      </div>
    )
  }
  else{
    const role = jwt_Decode(user);
    return (
    <div>
    <Topbar role={role}/>
    <div className='xl:px-80 '>
    <Outlet/>
    </div>
    <Footer/>
</div>
    )
  }
}

export default Client