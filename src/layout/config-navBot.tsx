import ic_especilidad from "../assets/images/navbar/ic_especil.svg"
import ic_admins from "../assets/images/navbar/ic_admin.svg";
import ic_mision from "../assets/images/navbar/ic_mision.svg";

const navBottom = [
  {
    title: 'Usuarios',
    path: '',
    icon: (
      <img src={ic_admins} alt="User Icon" />
    ),
  },
  {
    title: 'Pacientes',
    path: '/dashboard/nuevaMision',
    icon: (
      <img src={ic_mision} alt="User Icon" />
    )
  },
  {
    title: 'Área Médica',
    path: '',
    icon: (
      <img src={ic_especilidad} alt="User Icon" />
    ),
  },
]

export default navBottom;