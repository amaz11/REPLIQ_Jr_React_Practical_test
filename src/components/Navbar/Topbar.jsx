import React from 'react'
import { Link } from 'react-router-dom'
import {BsBag} from 'react-icons/bs'
import {LiaBarsSolid} from 'react-icons/lia'
import {RiBarChartHorizontalLine} from 'react-icons/ri'
import Dropdown from '../dropdown/Dropdown'

const Topbar = ({admin,sidebarState,setSidebarState,role}) => {

  return (
    <div className={`flex justify-between items-center py-5 shadow-sm px-2 w-full md:px-14 ${admin?"lg:px-20":"lg:px-80"}`}>
        <div>
          {
            admin?sidebarState?<LiaBarsSolid size={24} onClick={()=>{setSidebarState(!sidebarState)}}/>:<RiBarChartHorizontalLine size={24} onClick={()=>{setSidebarState(!sidebarState)}}/>:<Link to={'/'}>
            <div className='w-[100%]'>
            <img className='w-20 border-0' src="https://wpbingosite.com/wordpress/furety/wp-content/uploads/2023/05/logo.png" alt="logo" />
            </div>
            </Link>
          }
            
        </div>
        
        <div className='flex justify-between items-center'>
            <div className='relative z-10 pr-2 mr-2'>
            <BsBag size={24}/>
            <span className='bg-orange-400 absolute w-5 h-5 text-[12px] rounded-full -top-1 flex justify-center items-center right-0 text-white'>0</span>
            </div>
            {
             role && role.role === "admin"?<Dropdown role={role}/>:<Link to="auth/login" className='hover:text-orange-400'>Login</Link>
            } 
        </div>
    </div>
  )

}

export default Topbar