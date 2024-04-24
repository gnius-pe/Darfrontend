import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Nav from '../sections/dashboard/nav';
import Main from '../sections/dashboard/main';
import Header from '../sections/dashboard/header';

export default function Dashboard() {

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
        <Nav />

        <Main />
      </Box>
    </>
  );
}

Dashboard.propTypes = {
  children: PropTypes.node,
};
