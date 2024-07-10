import ic_especilidad from "../assets/images/navbar/ic_especil.svg"
import ic_admins from "../assets/images/navbar/ic_admin.svg";
import ic_mision from "../assets/images/navbar/ic_mision.svg";

const navBottom = [
  {
    title: 'Usuarios',
    path: '/dashboard/mision',
    icon: (
      <img src={ic_admins} alt="User Icon" />
    ),
  },
  {
    title: 'Nuevo Mision',
    path: '/dashboard/nuevaMision',
    icon: (
      <img src={ic_mision} alt="User Icon" />
    )
  },
  {
    title: 'Área Médica',
    path: '/dashboard/medico',
    icon: (
      <img src={ic_especilidad} alt="User Icon" />
    ),
  },
]

export default navBottom;