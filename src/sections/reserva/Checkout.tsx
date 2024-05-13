import * as React from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PaymentForm from './PaymentForm';
import AddressForm from './AddressForm';
import Review from './Review';


interface FormData {
  numberId: string;
  name: string;
  lastName: string;
  email: string;
  firstNumberPhone: string;
  sexo: string;
  birthDate: Date;
  nacionalidad: string;
  departamento: string;
  provincia: string;
  distrito: string;
  direccion: string;
  fechareserva: Date;
  mensaje: string;
  analisis: boolean;
  ayuda: boolean;
  visitador: boolean;
}

const steps = ['Datos personales', 'Detalles de atencion', 'Revisa tu cita'];



export default function Checkout() {

  const [formData, setFormData] = useState<FormData>({
    numberId: '',
    name: '',
    lastName: '',
    email: '',
    firstNumberPhone: '',
    sexo: '',
    birthDate: new Date(),
    nacionalidad: '',
    departamento: '',
    provincia: '',
    distrito: '',
    direccion: '',
    fechareserva: new Date(),
    mensaje: '',
    analisis: false,
    ayuda: false,
    visitador: false,
  });

  const [activeStep, setActiveStep] = React.useState(0);

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <AddressForm onChange={handleFormChange} />;
      case 1:
        return <PaymentForm onChange={handleFormChange} />;
      case 2:
        return <Review formData={formData} />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleFormChange = (data: any) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {
    console.log('datos del formulario', formData);
  };

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
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Reserva de cita
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Has reservado exitosamente
              </Typography>
              <Typography variant="subtitle1">
                Tu reserva es la #000001 recibiras un correo de con tu ficha de reserva.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Atras
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={() => {
                    handleNext();
                    if (activeStep === steps.length - 1) {
                      handleSubmit();
                    }
                  }}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Reservar cita' : 'Siguiente'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}