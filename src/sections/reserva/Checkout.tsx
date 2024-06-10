import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FormModal from './CheckoutFloat';

export default function Checkout() {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleClose = () => setIsOpen(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            DAR Regsitro
          </Typography>
        </Toolbar>
      </AppBar>
      <FormModal isOpen={isOpen} onClose={handleClose}/>
    </React.Fragment>
  );
}