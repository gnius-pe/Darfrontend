import * as React from 'react';
import { useState, ChangeEvent, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material';

interface CitaFormProps {
  formData: any;
  onChange: (data: any) => void;
}

const FechasReserva = [
  { id: "2", extendFecha: 'vie 12 Jul', fecha: '2024-07-12' },
  { id: "3", extendFecha: 'sab 13 Jul', fecha: '2024-07-13' },
  { id: "4", extendFecha: 'dom 14 Jul', fecha: '2024-07-14' },
];

const Especialidades = [
  { id: "001", especialidad: "medicina interna" },
  { id: "002", especialidad: "medicina interna" },
  { id: "003", especialidad: "medicina interna" },
  { id: "004", especialidad: "medicina interna" },
  { id: "005", especialidad: "medicina interna" },
  { id: "006", especialidad: "medicina interna" },
];

const CitaForm: React.FC<CitaFormProps> = ({ formData, onChange }) => {
  const [dateReserva, setDateReserva] = useState( formData.fechareserva || '');
  const [hora, setHora] = useState(formData.hora);
  const [especialidad, setEspecialidad] = useState(formData.especiality);
  const [mensaje, setMensaje] = useState(formData.mensaje);
  const [checkAnalisis, setCheckAnalisis] = useState(formData.analisis);
  const [checkAyuda, setCheckAyuda] = useState(formData.ayuda);
  const [checkVisita, setCheckVisita] = useState(formData.visita);
  const [errors, setErrors] = useState({
    fechareserva: false,
    hora: false,
    especiality: false,
    mensaje: false,
  });

  useEffect(() => {
    setDateReserva(formData.fechareserva);
    setMensaje(formData.mensaje);
    setHora(formData.hora);
    setEspecialidad(formData.especiality);
    setCheckAnalisis(formData.analisis);
    setCheckAyuda(formData.ayuda);
    setCheckVisita(formData.visita);
  }, [formData]);

  const handleDateReserva = (event: SelectChangeEvent<string>) => {
    const newDateReservaString = event.target.value;
    if (FechasReserva.some(fecha => fecha.fecha === newDateReservaString)) {
        setDateReserva(newDateReservaString);
        onChange({ ...formData, fechareserva: newDateReservaString });
    }
    setErrors((prev) => ({ ...prev, fechareserva: !newDateReservaString }));
};

  
  const handleHora = (event: ChangeEvent<HTMLInputElement>) => {
    const newHora = event.target.value;
    setHora(newHora);
    onChange({ ...formData, hora: newHora });
    setErrors((prev) => ({ ...prev, hora: !newHora }));
  };

  const handleEspecialidad = (event: SelectChangeEvent<string>) => {
    const newEspecialidad = event.target.value;
    setEspecialidad(newEspecialidad);
    onChange({ ...formData, especiality: newEspecialidad });
    setErrors((prev) => ({ ...prev, especiality: !newEspecialidad }));
  };

  const handleMensaje = (event: ChangeEvent<HTMLInputElement>) => {
    const newMensaje = event.target.value;
    setMensaje(newMensaje);
    onChange({ ...formData, mensaje: newMensaje });
    setErrors((prev) => ({ ...prev, mensaje: !newMensaje }));
  };

  const handleCheckAnalisis = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setCheckAnalisis(isChecked);
    onChange({ ...formData, analisis: isChecked });
  };

  const handleCheckAyuda = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setCheckAyuda(isChecked);
    onChange({ ...formData, ayuda: isChecked });
  };

  const handleCheckVisita = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setCheckVisita(isChecked);
    onChange({ ...formData, visita: isChecked });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Detalles de Cita
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth error={errors.fechareserva}>
            <InputLabel id="fecha-label">{errors.fechareserva ? "Fecha de reserva":" Seleccione"}</InputLabel>
            <Select
              labelId="fecha-label"
              id="fecha-select"
              value={dateReserva}
              label="Fecha"
              onChange={handleDateReserva}
              onBlur={() => setErrors((prev) => ({ ...prev, fechareserva: !dateReserva }))}
              fullWidth
            >
              {FechasReserva.map((fecha) => (
                <MenuItem key={fecha.id} value={fecha.fecha.toString()} >
                  {fecha.extendFecha}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="Hora"
            label={errors.hora ? "Agregue una hora" : "Hora"}
            fullWidth
            autoComplete="none"
            variant="standard"
            value={hora}
            onChange={handleHora}
            onBlur={() => setErrors((prev) => ({ ...prev, hora: !hora }))}
            error={errors.hora}
            color={hora ? "success" : "secondary"}  
            focused
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth error={errors.especiality}>
            <InputLabel id="especialidad-label">
              {errors.especiality ? "Seleccione" : "Especialidad"}
            </InputLabel>
            <Select
              labelId="especialidad-label"
              id="select-especialidad"
              value={especialidad}
              label="Especialidad"
              onChange={handleEspecialidad}
              onBlur={() => setErrors((prev) => ({ ...prev, especiality: !especialidad }))}
              fullWidth
            >
              {Especialidades.map((especialidad) => (
                <MenuItem key={especialidad.id} value={especialidad.especialidad}>
                  {especialidad.especialidad}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="mensaje"
            label={errors.mensaje ? "Agregue un mensaje" : "Mensaje"}
            fullWidth
            variant="standard"
            value={mensaje}
            onChange={handleMensaje}
            onBlur={() => setErrors((prev) => ({ ...prev, mensaje: !mensaje }))}
            error={errors.mensaje}
            color={mensaje ? "success" : "secondary"}  
            focused={errors.mensaje || Boolean(mensaje)}  
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              name="analisis"
              checked={checkAnalisis}
              onChange={handleCheckAnalisis} />}
            label="¿Cuentas con examenes o algun analisis sobre tu consulta que tenga menos de 30 dias?"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              name="ayuda"
              checked={checkAyuda}
              onChange={handleCheckAyuda} />}
            label="¿Estas interesado en recibir ayuda espiritual?"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary"
              name="visita"
              checked={checkVisita}
              onChange={handleCheckVisita} />}
            label="¿Deseas ser contactado para futuras actividades o eventos religiosos?"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CitaForm;
