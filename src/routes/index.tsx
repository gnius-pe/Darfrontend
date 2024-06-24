import LoginPage from '../pages/Login.tsx';
import DashboardPage from '../pages/Dashboard.tsx';
import ReservaCitaPage from '../pages/CitaReserve.tsx';
import CreateNewMisionPage from '../sections/misiones/CreateNewMision.tsx';
import PacientesPage from '../pages/Paciente.tsx';
import AreamedicaPage from '../pages/Areamedica.tsx';
import MedicoPage from '../pages/Medico.tsx';
import MisionPage from '../pages/Mision.tsx';
import UserPage from '../pages/User.tsx';
import AppViewPage from '../pages/AppView.tsx';
import LandingMainPage from '../pages/LandingMain.tsx';

export const Landing = () => <LandingMainPage />;

export const Login = () => <LoginPage />;

export const Dashboard = () => <DashboardPage />;

export const ReservaCita = () => <ReservaCitaPage />;

export const CreateNewMision = () => <CreateNewMisionPage />;

export const Pacientes = () => <PacientesPage />;

export const Areamedica = () => <AreamedicaPage />;

export const Medico = () => <MedicoPage />;

export const Mision = () => <MisionPage />;

export const User = () => <UserPage />;

export const App = () => <AppViewPage />;
