import * as React from 'react';
import { useState, useEffect } from 'react';

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
import axios from 'axios';

import Calendar from '../../components/Date';
import nacionalidades from '../../assets/nacionalidades.json';
import departamentos from '../../assets/departamentos.json';
import provincias from '../../assets/provincias.json';
import distritos from '../../assets/distritos.json';

export default function AddressForm({ children }) {

  const [tipoDocumento, setTipoDocumento] = useState('');
  const [dni, setDni] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [provincia, setProvincia] = useState('');
  const [distrito, setDistrito] = useState('');

  useEffect(() => {
    if (tipoDocumento !== 'DNI') {
      // Si el tipo de documento no es "DNI", restablecer los nombres y apellidos
      setNombres('');
      setApellidos('');
      return; // Salir del efecto si no es "DNI"
    }

    if (!dni) return; // No hacer la solicitud si el DNI está vacío


    // Hacer la solicitud a la API
    axios.get(`https://dniruc.apisperu.com/api/v1/dni/${dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InBhdWxlbGRvdGVybzQ1NkBnbWFpbC5jb20ifQ.w3QyBrX1rCtVfaNT496rClCWWIBFnWzGGLCtWj8yDAs`)
      .then(response => {
        const data = response.data;
        if (data.success) {
          setNombres(data.nombres);
          setApellidos(`${data.apellidoPaterno} ${data.apellidoMaterno}`);
        } else {
          // Manejar caso de error o DNI no encontrado
          console.error('Error al obtener datos del DNI');
          setNombres('');
          setApellidos('');
        }
      })
      .catch(error => {
        console.error('Error al obtener datos del DNI:', error);
        setNombres('');
        setApellidos('');
      });
  }, [tipoDocumento, dni]);

  const handleTipoDocumentoChange = event => {
    setTipoDocumento(event.target.value);
  };

  const handleDniChange = event => {
    setDni(event.target.value);
  };

  const handleNombresChange = event => {
    setNombres(event.target.value);
  };

  const handleApellidosChange = event => {
    setApellidos(event.target.value);
  };

  //nacionalidad
  const handleNacionality = (event) => {
    setNacionalidad(event.target.value);
  };

  //departamento
  const handleDepartamento = (event) => {
    const selectDepartamento = event.target.value;
    setDepartamento(selectDepartamento);

    const provinciasFiltradas = provincias.filter(provincia => provincia.department_id === selectDepartamento);
    setProvincia('');
    setDistrito('');

    const distritosFiltrados = distritos.filter(distrito => distrito.department_id === selectDepartamento);
    setDistrito('');
  };  

  //provinvcia
  const handleProvincia = (event) => {
    setProvincia(event.target.value);
    setDistrito('');
  };

  //distritos
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
          <FormControl fullWidth>
          <InputLabel id="tipo-documento-label">Documento</InputLabel>
          <Select
            labelId="tipo-documento-label"
            id="documento"
            value={tipoDocumento}
            label="Documento"
            onChange={handleTipoDocumentoChange}
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
            id="document-id"
            name="document-id"
            label="N° de Documento"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={dni}
            onChange={handleDniChange}
            inputProps={tipoDocumento === 'DNI' ? { maxLength: 8 } : {}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombres"
            name="nombres"
            label="Nombres"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={nombres}
            onChange={handleNombresChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="apellidos"
            name="apellidos"
            label="Apellidos"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={apellidos}
            onChange={handleApellidosChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Correo electornico"
            fullWidth
            autoComplete="off"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Calendar/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="celnumber"
            name="celnumber"
            label="celular o Telefono"
            fullWidth
            autoComplete="off"
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
          <InputLabel id="tipo-documento-label">Nacionalidad</InputLabel>
          <Select
            labelId="tipo-documento-label"
            id="demo-simple-select"
            value={nacionalidad}
            label="Nacionalidad"
            onChange={handleNacionality}
            fullWidth
          >
            {nacionalidades.map((nacionalidad) => (
              <MenuItem key={nacionalidad.id} value={nacionalidad.title}>
                {nacionalidad.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
          <InputLabel id="tipo-documento-label">Departamento</InputLabel>
          <Select
            labelId="tipo-documento-label"
            id="demo-simple-select"
            value={departamento}
            label="Departamento"
            onChange={handleDepartamento}
            fullWidth
          >
            {departamentos.map((departamento) => (
              <MenuItem key={departamento.id} value={departamento.id}>
               {departamento.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
          <InputLabel id="tipo-documento-label">Provincia</InputLabel>
          <Select
            labelId="tipo-documento-label"
            id="demo-simple-select"
            value={provincia}
            label="Provincia"
            onChange={handleProvincia}
            fullWidth
            disabled={!departamento}
          >
            {provincias
            .filter(provincia => provincia.department_id === departamento)
            .map((provincia) => (
              <MenuItem key={provincia.id} value={provincia.id}>
                {provincia.name}
              </MenuItem>
          ))}
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
          <InputLabel id="tipo-documento-label">Distrito</InputLabel>
          <Select
            labelId="tipo-documento-label"
            id="demo-simple-select"
            value={distrito}
            label="Distrito"
            onChange={handleDistrito}
            fullWidth
            disabled={!provincia}
          >
             {distritos
            .filter(distrito => distrito.province_id === provincia)
            .map((distrito) => (
              <MenuItem key={distrito.id} value={distrito.id}>
                {distrito.name}
              </MenuItem>
            ))}
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
            autoComplete="off"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}