import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login.tsx';
import Dashboard from '../pages/Dashboard.tsx';
import ProtectedRoute from '../pages/ProtectedRoute.tsx';
import ReservaCita from '../pages/CitaReserve.tsx';
import Areamedica from '../pages/Areamedica.tsx';
import Medico from '../pages/Medico.tsx';
import Mision from '../pages/Mision.tsx';
import Paciente from '../pages/Paciente.tsx';
import User from '../pages/User.tsx';

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
        children: [
            {   path: "/user", element: <User /> },
            {   path: "/pacientes", element: <Paciente /> },
            {   path: "/misiones", element: <Mision /> },
            {   path: "/area", element: <Areamedica /> },
            {   path: "/medicos", element: <Medico /> },
        ],
      },
    ],
  },
]);

export default router;

/*agregar user, misiones. medicos, areas medicas y ver la parte del figma

primero agregamos el codigo completo a un componente en Sections y luego algo que lo llame a pages
y optimizar el path cuidado que estemos haciendo algo mal */
