import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';

export default function PaymentForm() {
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
          >
            <FormControlLabel value='12' control={<Radio />} label="12" />
            <FormControlLabel value="13" control={<Radio />} label="13" />
            <FormControlLabel value="14" control={<Radio />} label="14" />
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="mensaje"
            label="Mensaje"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="analisis" value="yes" />}
            label="¿Cuentas con examenes o algun analisis sobre tu consulta que tenga menos de 30 dias?"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="ayuda" value="yes" />}
            label="¿Estas interesado en recibir ayuda espiritual?"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="visita" value="yes" />}
            label="¿Deseas ser contactado para futuras actividades o eventos religiosos?"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}