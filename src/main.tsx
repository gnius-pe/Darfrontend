import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './routes/Login.tsx'
import Signup from './routes/Signup.tsx'
import Dashboard from './routes/Dashboard.tsx'
import ProtectedRoute from './routes/ProtectedRoute.tsx'
import ReservaCita from './routes/CitaReserve.tsx'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: < Login />
  },
  {
    path: "/reserva",
    element: < ReservaCita />
  },
  {
    path: "/",
    element: < ProtectedRoute />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]); 


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

/*date time line en material ui 
react hook form o formics
y ver lo del dahsboard 
API para autorrellenado de lugares
estructurar ek router para desarrollar de la mejor manera 
VAMO A DARLE CON TODO*/