import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token"); 
const passwordEntered = sessionStorage.getItem("passwordEntered");

if (!token || !passwordEntered) {
  return <Navigate to="/" replace />;
}

  return children; 
}

export default ProtectedRoute;
