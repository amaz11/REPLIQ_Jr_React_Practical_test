import React from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidebar = ({sidebarState,setSidebarState}) => {
  let activeStyle = {
    color: "#d1d5db",
    background: "rgba(255, 255, 255, 0.07)",
    borderRadius: "5px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(2.7px)",
    WebkitBackdropFilter: "blur(2.7px)",
    border: "1px solid rgba(255, 255, 255, 0.26)",
  };
  return (
    <div className="p-4">
      <div className="flex">
      <div className='w-[100%] flex justify-center items-center mb-4'>
            <img className='w-20 border-0' src="https://wpbingosite.com/wordpress/furety/wp-content/uploads/2023/05/logo.png" alt="logo" />
            </div>
            <div className="mb-4 md:hidden sm:block"><RiBarChartHorizontalLine size={24} onClick={()=>{setSidebarState(!sidebarState)}}/></div>
      </div>
      
      <NavLink
        className={`flex gap-2 items-center p-2 nav-link-Hover`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/dashboard"
        end
      >
        <p className="text-slate-800 font-[550]">Dashboard</p>
      </NavLink>
      <NavLink
        className={`flex gap-2 items-center p-2 nav-link-Hover`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/dashboard/products"
        end
      >
        <p className="text-slate-800 font-[550]">Products</p>
      </NavLink>
      <NavLink
        className={`flex gap-2 items-center p-2 nav-link-Hover`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/dashboard/orders"
        end
      >
        <p className="text-slate-800 font-[550]">Orders</p>
      </NavLink>
      <NavLink
        className={`flex gap-2 items-center p-2 nav-link-Hover`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/dashboard/customers"
        end
      >
        <p className="text-slate-800 font-[550]">Cutomers</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
