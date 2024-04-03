import { AuthProvider } from './auth/AuthProvider.tsx';
import router from './routes/Sections.tsx';
import { RouterProvider } from 'react-router-dom';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from './auth/AuthProvider.tsx';
import { useEffect } from 'react';
import Dashboard from './pages/Dashboard.tsx';

const PrivateRoute: React.FC = ({ children }) => {
  const auth = useAuth();
  return auth.isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  const auth = useAuth();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [auth.isAuthenticated, navigate]);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
/* ver lo del formulario para conservar temporalmente
segundo agregar los archivo del dashboard o revisar el video
agregar lo de autenticacion en el primer video que vi para el login*/