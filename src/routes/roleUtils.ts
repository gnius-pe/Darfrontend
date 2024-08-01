// Definir los roles disponibles
type Role = 'admin' | 'medico' | 'controlador' | 'consejero' | 'recepcionista';

// Definir la estructura de roleRoutes
const roleRoutes: Record<Role, string[]> = {
  admin: ['/', '/dashboard', '/dashboard/areamedica', '/dashboard/pacientes', '/dashboard/medico', '/dashboard/mision', '/dashboard/user', '/dashboard/nuevaMision','/dashboard/cupos', '/dashboard/configcupos'],
  medico: ['/', '/dashboard', '/dashboard/pacientes', '/dashboard/medico'],
  recepcionista: ['/', '/dashboard', '/dashboard/pacientes', '/dashboard/medico'],
  controlador: ['/', '/dashboard', '/dashboard/pacientes'],
  consejero: ['/', '/dashboard', '/dashboard/pacientes']
};

export const hasAccess = (path: string) => {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo") || "{}");
  const role = userInfo.role as Role;
  return role && roleRoutes[role]?.includes(path);
};

export const getAccessibleRoutes = () => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo") || "{}");
    const role = userInfo.role as Role;
    return roleRoutes[role] || [];
};