import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Calendar from '../../components/Date';

export default function AddressForm() {


  const [document, setDocument] = React.useState('');

  const handleChange = (event) => {
    setDocument(event.target.value);
  };

  const [nacionalidad, setNacionalidad] = React.useState('');

  const handleNacionality = (event) => {
    setNacionalidad(event.target.value);
  };

  const [departamento, setDepartamento] = React.useState('');

  const handleDepartamento = (event) => {
    setDepartamento(event.target.value);
  };

  const [provincia, setProvincia] = React.useState('');

  const handleProvincia = (event) => {
    setProvincia(event.target.value);
  };

  const [distrito, setDistrito] = React.useState('');

  const handleDistrito = (event) => {
    setDistrito(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos Personales
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombres"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Apellidos"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Documento</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={document}
            label="Documento"
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value={'DNI'}>DNI</MenuItem>
            <MenuItem value={'Pasaporte'}>Pasaporte</MenuItem>
            <MenuItem value={'Carnet de extranjeria'}>Carnet de extr.</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="N° de Documento"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Correo electornico"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Calendar
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="celular o Telefono"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Sexo</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="femenino" control={<Radio />} label="F" />
            <FormControlLabel value="masculino" control={<Radio />} label="M" />
          </RadioGroup>
        </FormControl>
       </Grid>
       <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Nacionalidad</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={nacionalidad}
            label="Nacionalidad"
            onChange={handleNacionality}
            fullWidth
          >
            <MenuItem value={'Peru'}>Peru</MenuItem>
            <MenuItem value={'Venezuela'}>Venezuela</MenuItem>
            <MenuItem value={'Brasil'}>Brasil</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Departamento</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={departamento}
            label="Departamento"
            onChange={handleDepartamento}
            fullWidth
          >
            <MenuItem value={'Lima'}>Lima</MenuItem>
            <MenuItem value={'Tumbes'}>Tumbes</MenuItem>
            <MenuItem value={'Huancayo'}>Huancayo</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Provincia</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={provincia}
            label="Provincia"
            onChange={handleProvincia}
            fullWidth
          >
            <MenuItem value={'Huaral'}>Huaral</MenuItem>
            <MenuItem value={'Huacho'}>Huacho</MenuItem>
            <MenuItem value={'Miraflores'}>Miraflores</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Distrito</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={distrito}
            label="Distrito"
            onChange={handleDistrito}
            fullWidth
          >
            <MenuItem value={'Miraflores'}>Miraflores</MenuItem>
            <MenuItem value={'Surco'}>Surco</MenuItem>
            <MenuItem value={'SJL'}>SJL</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="city"
            name="city"
            label="Direccion"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}