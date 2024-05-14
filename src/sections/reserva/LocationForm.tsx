import * as React from 'react';
import { useState, useEffect, ChangeEvent } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { SelectChangeEvent } from '@mui/material/Select';

import departamentos from '../../assets/departamentos.json';
import provincias from '../../assets/provincias.json';
import distritos from '../../assets/distritos.json';

interface LocationForProps{
  formData:any;
  onChange: (data:any) => void;
}

const LocationForm: React.FC<LocationForProps> = ({ formData, onChange}) => {

  
  const [departamento, setDepartamento] = useState(formData.departamento);
  const [provincia, setProvincia] = useState(formData.provincia);
  const [distrito, setDistrito] = useState(formData.distrito);
  const [ direccion, setDireccion] = useState(formData.direccion);

  useEffect(() => {
    setDepartamento(formData.departamento);
    setProvincia(formData.provincia);
    setDistrito(formData.distrito);
    setDireccion(formData.direccion);
  },[formData])

   //departamento
   const handleDepartamento = (event: SelectChangeEvent<string>)  => {
    const newDepartamento = event.target.value;
    setDepartamento(newDepartamento);
    onChange({ ...formData, departamento: newDepartamento});
  };

  //provinvcia
  const handleProvincia = (event: SelectChangeEvent<string>) => {
    const newProvincia = event.target.value;
    setProvincia(newProvincia);
    setDistrito(formData.distrito);
    onChange({ ...formData, provincia: newProvincia});
  };

  //distritos
  const handleDistrito =(event: SelectChangeEvent<string>)  => {
    const newDistrito = event.target.value;
    setDistrito(newDistrito);
    onChange({ ...formData, distrito: newDistrito});
  };
  
  const handleDireccion = (event: ChangeEvent<HTMLInputElement>) => {
    const newDireccion = event.target.value;
    setDireccion(newDireccion);
    onChange({ ...formData, direccion: newDireccion});
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Locacion
      </Typography>
      <Grid container spacing={3}>
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
            value={direccion}
            onChange={handleDireccion}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default LocationForm;
