import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import Stack from '@mui/material/Stack';

import { usePathname } from '../../routes/hooks/index';
import navConfig from '../../layout/config-navigation.tsx';
import navBottom from "../../layout/config-navBot.tsx";
import { Link } from "react-router-dom";
import logoHead from "../../assets/images/header/ic_logo.svg"
import userPhoto from '../../assets/images/navbar/user_photo.svg';
import { getAccessibleRoutes } from "../../routes/roleUtils.ts";

interface NavPropItems {
  navbarOpen: boolean;
  setnavbarOpen: (arg: boolean) => void;
}

const Nav = ({ navbarOpen, setnavbarOpen}: NavPropItems) => {

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !navbarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setnavbarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!navbarOpen || keyCode !== 27) return;
      setnavbarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const userInfo = JSON.parse(sessionStorage.getItem("userInfo") || "{}");
  const accessibleRoutes = getAccessibleRoutes();

  const renderHeaderNav = (
    <div className="flex items-center justify-center relative gap-2 px-1 py-5.5 lg:py-6.5 mt-2">
      <img className="absolute left-1/2 transform -translate-x-1/2" src={logoHead} alt="logo" />
  
      <button
        ref={trigger}
        onClick={() => setnavbarOpen(!navbarOpen)}
        aria-controls="sidebar"
        aria-expanded={navbarOpen}
        className="block lg:hidden absolute left-0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
          <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
        </svg>
      </button>
  
      {/* Contenedor que envuelve el contenido y la línea */}
      <div className="flex items-center w-full">
        <div className="ml-auto w-0 h-8 border border-teal-300 rounded-lg overflow-hidden"></div>
      </div>
    </div>
  );
    
  const renderAccount = (
    <div className=" flex flex-col items-center gap-2 py-4 mt-2 text-white"
    >
      <h2 className="font-bold text-teal-300">Mision San Diego</h2>
      <div className="w-full flex justify-center items-center">
        <img className="h-16" src={userPhoto} alt="photoURL" />

        <div >
          <h2 >{userInfo.role}</h2>
          <h3>
            {userInfo.username}
          </h3>
        </div>
      </div>
      <div className="w-48 h-0 border border-teal-300 rounded-lg overflow-hidden self-end"></div>
    </div>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 0 }} >
      {navConfig.filter((item) => accessibleRoutes.includes(item.path)).map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderMenuBottom = (
    <Stack component="nav" spacing={0.5} sx={{ px: 0 }} className={`mt-12`}>
      {navBottom.filter((item) => accessibleRoutes.includes(item.path)).map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-64 flex-col overflow-y-hidden bg-custom-blue duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        navbarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full items-center justify-between gap-2 py-1 lg:py-1.5">
        <div>
          { renderHeaderNav }
          { renderAccount }
          { renderMenu }
          { renderMenuBottom }
        </div>
      </div>
    </aside>
  );
}

interface NavItemProps{
  item: any;
}

const NavItem: React.FC<NavItemProps> =({ item }) =>{
  const pathname = usePathname();
  const active = item.path === pathname;

  return (
    <Link to={item.path} className="block">
      <div
        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium capitalize transition
          ${ active ? 'text-primary-600 font-semibold bg-gray-700 hover:bg-primary-200' : 'text-gray-600 hover:bg-blue-800'}`}
        style={{ minHeight: '44px' }}
      >
        <div className="w-6 h-6 mr-2">
          {item.icon}
        </div>
        <span className="text-white">{ item.title }</span>
      </div>
    </Link> 
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};

export default Nav;