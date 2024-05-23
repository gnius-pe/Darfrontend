import SvgColor from '../components/svg-color';

// ----------------------------------------------------------------------

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: (
      <Icon name="ic_analytics" />
    ),
  },
  {
    title: 'Pacientes',
    path: '/dashboard/pacientes',
    icon: (
      <Icon name="ic_user" />
    ),
  },
  {
    title: 'Área Médica',
    path: '/dashboard/areamedica',
    icon: (
      <Icon name="" /> // Puedes añadir el icono correspondiente aquí
    ),
  },
  {
    title: 'Usuarios',
    path: '/dashboard/user',
    icon: (
      <Icon name="" /> // Puedes añadir el icono correspondiente aquí
    ),
  },
  {
    title: 'Misiones',
    path: '/dashboard/mision',
    icon: (
      <Icon name="" /> // Puedes añadir el icono correspondiente aquí
    ),
  },
  {
    title: 'Médicos',
    path: '/dashboard/medico',
    icon: (
      <Icon name="" /> // Puedes añadir el icono correspondiente aquí
    ),
  },
];

export default navConfig;