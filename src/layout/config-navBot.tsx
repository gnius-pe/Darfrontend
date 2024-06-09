import ic_especilidad from "../assets/images/navbar/ic_especil.svg"
import ic_admins from "../assets/images/navbar/ic_admin.svg";
import ic_mision from "../assets/images/navbar/ic_mision.svg";

const navBottom = [
  {
    title: 'Panel de control',
    path: '/dashboard',
    icon: (
      <img src={ic_admins} alt="User Icon" />
    ),
  },
  {
    title: 'Pacientes',
    path: '/dashboard/pacientes',
    icon: (
      <img src={ic_mision} alt="User Icon" />
    )
  },
  {
    title: 'Área Médica',
    path: '/dashboard/areamedica',
    icon: (
      <img src={ic_especilidad} alt="User Icon" />
    ),
  },
]

export default navBottom;