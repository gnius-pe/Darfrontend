import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Login from '../pages/Login.tsx';
import Dashboard from '../pages/Dashboard.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';
import ReservaCita from '../pages/CitaReserve.tsx';

export const Pacientes = lazy(() => import('../pages/Paciente.tsx'));
export const Areamedica = lazy(() => import('../pages/Areamedica.tsx'));
export const Medico = lazy(() => import('../pages/Medico.tsx')) ;
export const Mision = lazy(() => import('../pages/Mision.tsx'));
export const User = lazy(() => import('../pages/User.tsx'));
export const App = lazy(() => import('../pages/AppView.tsx'));

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
        element: (
          <Dashboard>
            <Suspense>
              <Outlet />
            </Suspense>
          </Dashboard>
        ),
        children: [
          { element: <App />, index:true },
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
            element: <Mision />
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
