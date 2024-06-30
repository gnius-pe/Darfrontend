import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import React from "react";

interface ProtectedRouteProps {
  children?: React.ReactNode;
  redirectTo?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirectTo='/login'}) => {
  const auth = useAuth();

  console.log(auth)
  if (!auth.isAuthenticated()) {
    return <Navigate to={redirectTo} />;
  }

  return children ? <>{children}</> : <Outlet />;
};
