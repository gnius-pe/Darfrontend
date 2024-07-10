// CheckoutModal.tsx
import * as React from 'react';
import { useState, FC } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationForm from './LocationForm';
import AddressForm from './AddressForm';
import Review from './Review';
import Cita from './Cita';
import ReservaExitosa from './ReservaExitosa';
import MobileStepper from './cita/MobileStepper';

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
  especiality: string[];
  hora: string;
  mensaje: string;
  analisis: boolean;
  ayuda: boolean;
  visita: boolean;
}

const steps = ['Datos', 'Ubicacion', 'Cita', 'Revision'];

export const FormModal: FC = () => {
  
  const [formData, setFormData] = useState<FormData>({
    typeId: '',
    numberId: '',
    name: '',
    lastName: '',
    email: '',
    firstNumberPhone: '',
    secondNumberPhone: '',
    sexo: '',
    birthDate: '',
    nacionality: '',
    departamento: 'default',
    provincia: 'default',
    distrito: 'default',
    direccion: '',
    fechareserva: '',
    especiality: [],
    hora: '',
    mensaje: '',
    analisis: false,
    ayuda: false,
    visita: false,
  });

  const [activeStep, setActiveStep] = React.useState(0);
  const [errors, setErrors] = useState<any>({});
  const [success, setSuccess] = useState(false);
  const [numberFile, setNumberFile] = useState<number | null>(null);

  const validatePage = (pageIndex: number) => {
    const newErrors: any = {};
    if (pageIndex === 0) {
      if (!formData.typeId) newErrors.typeId = 'seleccione un documento';
      if (!formData.name) newErrors.name = 'Ingrese un nombre';
      if (!formData.lastName) newErrors.lastName = 'Ingrese apellidos';
      if (!formData.numberId) newErrors.numberId = 'Ingrese su DNI';
      if (errors.numberId === 'El DNI ya está registrado') newErrors.numberId = 'El DNI ya está registrado';
      if (!formData.firstNumberPhone) newErrors.firstNumberPhone = 'Ingrese su número';
      if (!formData.birthDate) newErrors.birthDate = 'Ingrese su fecha de nacimiento';
      if (!formData.sexo) newErrors.sexo = 'Seleccione su sexo';
    }
    else if (pageIndex === 1) {
      if (!formData.departamento) newErrors.departamento = 'seleccione un departamento';
      if (!formData.provincia) newErrors.provincia = 'seleccione una provincia';
      if (!formData.distrito) newErrors.distrito = 'seleccione un distrito';
    }
    else if (pageIndex === 2) {
      if (!formData.fechareserva) newErrors.fechareserva = 'seleccione un fecha';
      if (formData.especiality.length === 0) newErrors.especiality = 'seleccione al menos una especialidad';
      if (!formData.hora) newErrors.hora = 'seleccione un hora';
    }
    return newErrors;
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <AddressForm formData={formData} errors={errors} onChange={(data) => handleFormChange(data)} />;
      case 1:
        return <LocationForm formData={formData} errors={errors} onChange={(data) => handleFormChange(data)} />;
      case 2:
        return <Cita formData={formData} errors={errors} onChange={(data) => handleFormChange(data)} />;
      case 3:
        return <Review formData={formData} />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleFormChange = (data: any) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));

    // Remueve los errores del formulario 
    const newErrors = { ...errors };
    for (const key in data) {
      if (data[key]) {
        delete newErrors[key];
      }
    }
    setErrors(newErrors);
  };

  const handleNext = () => {
    const newErrors = validatePage(activeStep);
    if (Object.keys(newErrors).length === 0) {
      setActiveStep(activeStep + 1);
    } else {
      setErrors(newErrors);
    }
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
        specialties: formData.especiality,
        appointmentdetail: formData.mensaje,
      },
      question:{
      questionExamRecent: formData.analisis,
      spiritualSupport: formData.ayuda,
      futureActivities: formData.visita,
      },
      estate : "ESPERA"
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

      const result = await response.json(); // Leer el mensaje de texto de la respuesta
      console.log('Success:', result);
      setNumberFile(result.numberFile);
      setSuccess(true);
    } catch (error) {
      console.error('Error:', error);
    }

    console.log(dataFormPaciente);
  };

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          { success ? (numberFile !== null && <ReservaExitosa numberFile={numberFile}/>) 
          : ( 
            <>
              <MobileStepper activeStep={activeStep} steps={steps.length} />
          <div className='relative'>
            <Typography component="h1" variant="h4" align="center">
              Reserva de cita
            </Typography>
          </div>
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
                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Reservar
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Siguiente
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
            </> )}
          
        </Paper>
      </Container>
    </>
  );
};

export default FormModal;