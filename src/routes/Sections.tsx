import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login.tsx';
import Dashboard from '../pages/Dashboard.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';
import ReservaCita from '../pages/CitaReserve.tsx';
import Paciente from '../pages/Paciente.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/reserva",
    element: <ReservaCita />
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "usuarios",
        element: <Paciente />,
      },
    ],
  },
]);

export default router;
