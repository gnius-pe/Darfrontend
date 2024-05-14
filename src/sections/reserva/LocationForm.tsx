import * as React from 'react';
import { useState, useCallback, ChangeEvent, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { SelectChangeEvent } from '@mui/material';

interface LocationFormProps{
  formData: any ;
  onChange:(data:any) => void;
}

const LocationForm: React.FC<LocationFormProps>=({formData, onChange}) => {

  const [ dateReserva, setdateReserva] = useState(formData.fechareserva);
  const [ hora, setHora] = useState(formData.hora);
  const [ mensaje, setmensaje] = useState(formData.mensaje);
  const [ checkAnalisis, setcheckAnalisis] = useState(formData.analisis);
  const [ checkAyuda, setcheckAyuda] = useState(formData.ayuda);
  const [ checkVisita, setcheckVisita] = useState(formData.visita);

  useEffect(() => {
    setdateReserva(formData.fechareserva);
    setmensaje(formData.mensaje);
    setHora(formData.hora);
    setcheckAnalisis(formData.analisis);
    setcheckAyuda(formData.ayuda);
    setcheckVisita(formData.visita);
  },[formData])

  const handleDateReserva = (event: SelectChangeEvent<String>)=>{
    const newDateReserva = event.target.value;
    setdateReserva(newDateReserva);
    onChange({ ...formData, fechareserva: newDateReserva });
  };

  const handleHora = (event: ChangeEvent<HTMLInputElement>)=>{
    const newHora = event.target.value;
    setHora(newHora);
    onChange({ ...formData, hora: newHora });
  };

  const handleMensaje = (event: ChangeEvent<HTMLInputElement>)=>{
    const newMensaje = event.target.value;
    setmensaje(newMensaje);
    onChange({ ...formData,mensaje: newMensaje });
  };

  const hadnleCheckAnalisis = (event: ChangeEvent<HTMLInputElement>)=>{
    const isChecked = event.target.checked;
    setcheckAnalisis(isChecked);
    onChange({ ...formData, analisis: isChecked });
  };

  const hadnleCheckAyuda = (event: ChangeEvent<HTMLInputElement>)=>{
    const isChecked = event.target.checked;
    setcheckAyuda(isChecked);
    onChange({ ...formData, ayuda: isChecked });
  };
  const hadnleCheckVisita = (event: ChangeEvent<HTMLInputElement>)=>{
    const isChecked = event.target.checked;
    setcheckVisita(isChecked);
    onChange({ ...formData, visita: isChecked });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Detalles de Cita
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Fecha de reserva</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={dateReserva}
            onChange={handleDateReserva}
          >
            <FormControlLabel value='12/02/2024' control={<Radio />} label="12" />
            <FormControlLabel value="13/02/2024" control={<Radio />} label="13" />
            <FormControlLabel value="14/02/2024" control={<Radio />} label="14" />
          </RadioGroup>
        </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="Hora"
            label="Hora"
            fullWidth
            autoComplete="none"
            variant="standard"
            value={hora}
            onChange={handleHora}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="mensaje"
            label="Mensaje"
            fullWidth
            variant="standard"
            value={mensaje}
            onChange={handleMensaje}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" 
                              name="analisis" 
                              value={checkAnalisis} 
                              onChange={hadnleCheckAnalisis}/>}
            label="¿Cuentas con examenes o algun analisis sobre tu consulta que tenga menos de 30 dias?"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" 
                                name="ayuda"
                                value={checkAyuda}
                                onChange={hadnleCheckAyuda}/>}
            label="¿Estas interesado en recibir ayuda espiritual?"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" 
                                name="visita" 
                                value={checkVisita}
                                onChange={hadnleCheckVisita} />}
            label="¿Deseas ser contactado para futuras actividades o eventos religiosos?"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default LocationForm;