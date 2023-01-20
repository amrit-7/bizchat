import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";
export const PrivateRoutes = () => {
  const [loggedUser] = useState(JSON.parse(localStorage.getItem("user")));
  return loggedUser ? <Outlet /> : <Navigate to="/" />;
};
