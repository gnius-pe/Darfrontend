import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import Stack from '@mui/material/Stack';

import { usePathname } from '../../routes/hooks/index';

import { account } from '../../_mock/account';

import navConfig from '../../layout/config-navigation.tsx';
import navBottom from "../../layout/config-navBot.tsx";
import { Link } from "react-router-dom";

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

  const renderHeaderNav = (
    <div className="flex items-center justify-between gap-2 px-1 py-5.5 lg:py-6.5">
      <img src="" alt="Logo" />

      <button
        ref={trigger}
        onClick={() => setnavbarOpen(!navbarOpen)}
        aria-controls="sidebar"
        aria-expanded={navbarOpen}
        className="block lg:hidden"
      >
        flc
      </button>
    </div>
  );
    
  const renderAccount = (
    <div className=" flex flex-col items-center gap-2 py-4 text-white"
    >
      <h2 className="font-bold text-teal-300">Mision San Diego</h2>
      <div className="flex gap-2">
        <img src={account.photoURL} alt="photoURL" />

        <div >
          <h2 >{userInfo.role}</h2>
          <h3>
            {userInfo.username}
          </h3>
        </div>
      </div>
      <div className="w-48 h-0 border border-teal-300 rounded-lg overflow-hidden"></div>
    </div>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 0 }} >
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderMenuBottom = (
    <Stack component="nav" spacing={0.5} sx={{ px: 0 }}
      className={`mt-12`}
    >
      {navBottom.map((item) => (
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