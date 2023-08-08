import jwt_Decode from "jwt-decode";
import React from "react";
import { Navigate } from "react-router-dom";

const AdminHoc = ({ children }) => {
  let user = document.cookie.split("Bearer=")[1]
  if(user === undefined || user<10){
    return <Navigate to={"/auth/login"} replace />;

  }else{
    const role = jwt_Decode(user)
    if (role?.role === "admin") {
      return children;
  }else{
    return <Navigate to={"/auth/login"} replace />;
  }
  }

};

export default AdminHoc;
