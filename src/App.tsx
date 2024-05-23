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