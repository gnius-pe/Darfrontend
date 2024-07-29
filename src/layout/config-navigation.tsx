import ic_user  from '../assets/images/navbar/ic_user.svg';
import ic_calendar from '../assets/images/navbar/ic_calendar.svg';
import ic_config from '../assets/images/navbar/ic_config.svg';
import ic_list from '../assets/images/navbar/ic_list.svg';
import ic_medical from '../assets/images/navbar/ic_medical.svg';
import ic_home from '../assets/images/navbar/ic_home.svg';

const navConfig = [
  {
    title: 'Panel de control',
    path: '/dashboard',
    icon: (
      <img src={ic_home} alt="User Icon" />
    ),
  },
  {
    title: 'Pacientes',
    path: '/dashboard/pacientes',
    icon: (
      <img src={ic_user} alt="User Icon" />
    )
  },
  {
    title: 'Medicos',
    path: '/dashboard/medico',
    icon: (
      <img src={ic_medical} alt="User Icon" />
    ),
  },
  {
    title: 'Cupos disp.',
    path: '/dashboard/cupos',
    icon: (
      <img src={ic_list} alt="services Icons" />
    ),
  },
  {
    title: 'Misiones',
    path: '/dashboard/mision',
    icon: (
      <img src={ic_calendar} alt="calendar" />
    ),
  },
  
  {
    title: 'Conf Cupos',
    path: '/dashboard/configcupos',
    icon: (
      <img src={ic_config} alt="admin" />
    ),
  },
];

export default navConfig;