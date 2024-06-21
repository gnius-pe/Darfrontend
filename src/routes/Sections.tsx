import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login.tsx';
import Dashboard from '../pages/Dashboard.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';
import ReservaCita from '../pages/CitaReserve.tsx';
import CreateNewMision from '../sections/misiones/CreateNewMision.tsx';

import Pacientes from '../pages/Paciente.tsx';
import Areamedica from '../pages/Areamedica.tsx';
import Medico from '../pages/Medico.tsx';
import Mision from '../pages/Mision.tsx';
import User from '../pages/User.tsx';
import App from '../pages/AppView.tsx';
import Landing from '../pages/LandingMain.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/login",
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
          { path:"", element: <App />, index:true },
          {
            path: "pacientes",
            element: <Pacientes />
          },
          {
            path: "areamedica",
            element: <Areamedica />
          },
          {
            path: "medico",
            element: <Medico />
          },
          {
            path: "mision",
            element: <Mision />,
          },
          {
            path: "nuevaMision",
            element: <CreateNewMision />
          },
          {
            path: "user",
            element: <User />
          }
        ],
      },
    ]
  }
]);

export default router;
