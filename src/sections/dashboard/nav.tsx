import { useEffect } from "react";
import PropTypes from "prop-types";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';

import { usePathname } from '../../routes/hooks/index';
import { RouterLink } from '../../routes/components/index';

import { account } from '../../_mock/account';

import navConfig from '../../layout/config-navigation.tsx';
import navBottom from "../../layout/config-navBot.tsx";

interface NavProps {
  openNav: boolean;
  onCloseNav: () => void;
}

const Nav: React.FC<NavProps> = ({ openNav, onCloseNav }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  const userInfo = JSON.parse(sessionStorage.getItem("userInfo") || "{}");

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
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }} >
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderMenuBottom = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }} >
      {navBottom.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );


  return (
    <div className="fixed h-svh overflow-y-auto w-64 pt-14 flex flex-col justify-between bg-custom-blue"
    >
      <div>
        { renderAccount}
       
        {renderMenu}
      </div>
        { renderMenuBottom}
    </div>
  );
}



// ----------------------------------------------------------------------
interface NavItemProps{
  item: any;
}

const NavItem: React.FC<NavItemProps> =({ item }) =>{
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <div className="w-6 h-6 mr-2">
        {item.icon}
      </div>


      <Box component="span" className="text-white">{item.title} </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};

export default Nav;