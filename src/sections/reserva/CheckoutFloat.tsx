import * as React from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationForm from './LocationForm';
import AddressForm from './AddressForm';
import Review from './Review';
import Cita from './Cita';
import { FC } from 'react';

interface NewUserModal{
    isOpen: boolean;
    onClose: () => void;
  }
  

interface FormData {
  typeId: string;
  numberId: string;
  name: string;
  lastName: string;
  email: string;
  firstNumberPhone: string;
  secondNumberPhone: string;
  sexo: string;
  birthDate: string;
  nacionality: string;
  departamento: string;
  provincia: string;
  distrito: string;
  direccion: string;
  fechareserva: string;
  especiality: string;
  hora: string;
  mensaje: string;
  analisis: boolean;
  ayuda: boolean;
  visita: boolean;
}

const steps = ['Datos', 'Ubicacion', 'Cita','revision'];



const CheckoutFloat: FC<NewUserModal> = ({isOpen, onClose}) => {

  if(!isOpen) return null;

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [formData, setFormData] = useState<FormData>({
    typeId: '',
    numberId: '',
    name: '',
    lastName: '',
    email: '',
    firstNumberPhone: '',
    secondNumberPhone: '',
    sexo: '',
    birthDate: formatDate(new Date()),
    nacionality: '',
    departamento: '',
    provincia: '',
    distrito: '',
    direccion: '',
    fechareserva: formatDate(new Date()),
    especiality: '',
    hora: '',
    mensaje: '',
    analisis: false,
    ayuda: false,
    visita: false,
  });

  const [activeStep, setActiveStep] = React.useState(0);

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <AddressForm formData={formData} onChange={(data)=> handleFormChange(data)}/>;
      case 1:
        return <LocationForm formData={formData} onChange={(data)=> handleFormChange(data)}/>;
      case 2:
        return < Cita formData={formData} onChange={(data)=> handleFormChange(data)} />;
      case 3:
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

  const handleSubmit = async () => {
    const dataFormPaciente = {
      personalInformation: {
        name: formData.name,
        lastName: formData.lastName,
        numberIdentification: formData.numberId,
        email: formData.email,
        firtsNumberPhone: formData.firstNumberPhone,
        secondNumberPhone: formData.secondNumberPhone,
        sexo: formData.sexo,
        birthDate: formData.birthDate,
      },
      location: {
        department: formData.departamento,
        province: formData.provincia,
        district: formData.distrito,
        reference: formData.direccion,
      },
      cita: {
        appointmentDate: formData.fechareserva,
        specialty: formData.especiality,
        appointmentdetail: formData.mensaje,
      },
      questionExamRecent: formData.analisis,
      spiritualSupport: formData.ayuda,
      futureActivities: formData.visita,
    };
  
    try {
      const response = await fetch('https://goldfish-app-sryot.ondigitalocean.app/api/patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataFormPaciente),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.text(); // Leer el mensaje de texto de la respuesta
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  
    console.log(dataFormPaciente);
  };  
  

  return (
    <React.Fragment>
      <div className='fixed inset-0 bg-black bg-opacity-50'>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <div className='relative'>
            <Typography component="h1" variant="h4" align="center">
              Reserva de cita
            </Typography>
            <button  
              className="absolute top-0 right-0 mt-2 mr-2 focus:outline-none "
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
              </svg>

            </button>
          </div>
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
      </div>
    </React.Fragment>
  );
};
export default CheckoutFloat;