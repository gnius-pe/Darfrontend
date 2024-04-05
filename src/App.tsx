import { AuthProvider } from './auth/AuthProvider.tsx';
import router from './routes/Sections.tsx';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
/* ver lo del formulario para conservar temporalmente
segundo agregar los archivo del dashboard
ya esta el login
me falta agregar la parte de lo hecho con el dashboard*/