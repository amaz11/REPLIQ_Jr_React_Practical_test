import React from "react";
import { Navigate } from "react-router-dom";

const EnrollHoc = ({ children }) => {
  const user = document.cookie.split("Bearer=")[1];
  const isLogin = window.location.pathname === "/auth/login";
  const isRegister = window.location.pathname === "/auth/register";

  if ((user && (isLogin || isRegister)) || user?.length>10) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default EnrollHoc;
