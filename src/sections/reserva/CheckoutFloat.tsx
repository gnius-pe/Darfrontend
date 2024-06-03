// CheckoutModal.tsx
import * as React from 'react';
import { useState, FC } from 'react';
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

interface NewUserModal {
  isOpen: boolean;
  onClose: () => void;
  useBackdrop?: boolean; // Nueva prop opcional
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

const steps = ['Datos', 'Ubicacion', 'Cita', 'Revision'];

export const FormModal: FC<NewUserModal> = ({ isOpen, onClose, useBackdrop = false }) => {
  if (!isOpen) return null;

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
    especiality: '',
    hora: '',
    mensaje: '',
    analisis: false,
    ayuda: false,
    visita: false,
  });

  const [activeStep, setActiveStep] = React.useState(0);
  const [errors, setErrors] = useState<any>({});

  const validatePage = (pageIndex: number) => {
    const newErrors: any = {};
    if (pageIndex === 0) {
      if (!formData.typeId) newErrors.typeId = 'seleccione un documento';
      if (!formData.name) newErrors.name = 'Ingrese un nombre';
      if (!formData.lastName) newErrors.lastName = 'Ingrese apellidos';
      if (!formData.numberId) newErrors.numberId = 'Ingrese su DNI';
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
      if (!formData.especiality) newErrors.especiality = 'seleccione una especialidad';
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
        email: formData.email || undefined,  
        firtsNumberPhone: formData.firstNumberPhone,
        secondNumberPhone: formData.secondNumberPhone || undefined,
        sexo: formData.sexo,
        birthDate: formData.birthDate,
      },
      location: {
        department: formData.departamento,
        province: formData.provincia,
        district: formData.distrito,
        reference: formData.direccion || undefined,
      },
      cita: {
        appointmentDate: formData.fechareserva,
        specialty: formData.especiality,
        appointmentdetail: formData.mensaje || undefined,
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

  const modalContent = (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <div className='relative'>
            <Typography component="h1" variant="h4" align="center">
              Reserva de cita
            </Typography>
            <button
              className="absolute top-0 right-0 mt-2 mr-2 focus:outline-none"
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
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
        </Paper>
      </Container>
    </>
  );

  return useBackdrop ? (
    <div className='fixed inset-0 bg-black bg-opacity-50'>
      {modalContent}
    </div>
  ) : (
    modalContent
  );
};

export default FormModal;

///solamente falta el segundo numero para que se quede libre