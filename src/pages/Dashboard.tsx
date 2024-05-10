import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Nav from '../sections/dashboard/nav';
import Header from '../sections/dashboard/header';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <Header/>
      
      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
        className="bg-white"
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
