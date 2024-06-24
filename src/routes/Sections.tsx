import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute.tsx';

import { Landing, Login, Dashboard, App, Areamedica, ReservaCita, CreateNewMision, Pacientes, Medico, Mision, User } from '../routes/index.tsx';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/reserva' element={<ReservaCita/>}/>
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }>
          <Route index element={<App/>} />
          <Route path='areamedica' element={<Areamedica />} />
          <Route path='pacientes' element={<Pacientes />} />
          <Route path='medico' element={<Medico />} />
          <Route path='mision' element={<Mision />} />
          <Route path='user' element={<User />} />
          <Route path='nuevaMision' element={<CreateNewMision/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
