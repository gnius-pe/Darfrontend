import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute.tsx';
import { Landing, Login, Dashboard, App, Areamedica, ReservaCita, CreateNewMision, Pacientes, Medico, Mision, User, CuposDisp, ConfCupos } from '../routes/index.tsx';

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
          <Route path='areamedica' element={<ProtectedRoute><Areamedica /></ProtectedRoute>} />
          <Route path='pacientes' element={<ProtectedRoute><Pacientes /></ProtectedRoute>} />
          <Route path='medico' element={<ProtectedRoute><Medico /></ProtectedRoute>} />
          <Route path='mision' element={<ProtectedRoute><Mision /></ProtectedRoute>} />
          <Route path='user' element={<ProtectedRoute><User /></ProtectedRoute>}/>
          <Route path='nuevaMision' element={<ProtectedRoute><CreateNewMision /></ProtectedRoute>} />
          <Route path='cupos' element={<ProtectedRoute><CuposDisp/></ProtectedRoute>} />
          <Route path='configcupos' element={<ProtectedRoute><ConfCupos/></ProtectedRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
