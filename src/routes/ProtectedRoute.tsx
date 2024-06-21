import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const ProtectedRoute = () => {
  const auth = useAuth();

  if (!auth.isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  if (auth.isAuthenticated() && window.location.pathname === "/") {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
