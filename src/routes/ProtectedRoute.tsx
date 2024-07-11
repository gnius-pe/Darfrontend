import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { hasAccess } from "./roleUtils";
import React from "react";

interface ProtectedRouteProps {
  children?: React.ReactNode;
  redirectTo?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirectTo='/login'}) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.isAuthenticated() || !hasAccess(location.pathname)) {
    return <Navigate to={redirectTo} />;
  }

  return children ? <>{children}</> : <Outlet />;
};
