import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Nav from '../sections/dashboard/nav';
import Header from '../sections/dashboard/header';
import Main from '../sections/dashboard/main';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <Header />
      
      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)}/>

        <Outlet/>
      </Box>
    </>
  );
}

Dashboard.propTypes = {
  children: PropTypes.node,
};
