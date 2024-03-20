import Login from './routes/Login.tsx'
import Dashboard from './routes/Dashboard.tsx'
import ProtectedRoute from './routes/ProtectedRoute.tsx'
import ReservaCita from './routes/CitaReserve.tsx'

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

function App() {
  return (
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
{/*aca tengo que empezar a estrucutrar mi proyecto para lograr los diseños y todo lo necesario*/}