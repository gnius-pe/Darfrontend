import { AuthProvider } from './auth/AuthProvider.tsx';
import Router from './routes/Sections.tsx';

function App() {
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  );
}

export default App;