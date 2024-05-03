import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import Nav from '../sections/dashboard/nav';
import Header from '../sections/dashboard/header';

export default function Paciente() {
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
      </Box>
    </>
  );
}

Paciente.propTypes = {
  children: PropTypes.node,
};
