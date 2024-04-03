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
segundo agregar los archivo del dashboard o revisar el video
agregar lo de autenticacion en el primer video que vi para el login*/