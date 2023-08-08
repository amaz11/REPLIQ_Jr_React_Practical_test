import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../../components/Navbar/Topbar";
import Sidebar from "../../components/Navbar/Sidebar";
import jwt_Decode from "jwt-decode";


const Admin = () => {
  const [sidebarState, setSidebarState] = useState(false);
  let user = document.cookie.split("Bearer=")[1]
  const role = jwt_Decode(user);

  return (
    <div className="flex">
      <div className={`w-[250px] fixed top-0 left-0 h-full border-r-[1px] bg-white z-20 ${sidebarState ? "ml-[-250px] w-0":""} `}>
        <Sidebar sidebarState={sidebarState} setSidebarState={setSidebarState}/>
      </div>
      <div className={`w-full ${sidebarState?"":"md:ml-[250px]"} sm:ml-0`}>
        <Topbar admin={true} sidebarState={sidebarState} setSidebarState={setSidebarState} role={role} />
        <div className="p-4">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
