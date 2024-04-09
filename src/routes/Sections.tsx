import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login.tsx';
import Dashboard from '../pages/Dashboard.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';
import ReservaCita from '../pages/CitaReserve.tsx';

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
    ],
  },
]);

export default router;

/*agregar user, misiones. medicos, areas medicas y ver la parte del figma

primero agregamos el codigo completo a un componente en Sections y luego algo que lo llame a pages
y optimizar el path cuidado que estemos haciendo algo mal */
/*children: [
            {   path: "/user", element: <User /> },
            {   path: "/pacientes", element: <Paciente /> },
            {   path: "/misiones", element: <Mision /> },
            {   path: "/area", element: <Areamedica /> },
            {   path: "/medicos", element: <Medico /> },
        ],*/