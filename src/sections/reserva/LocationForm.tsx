import * as React from 'react';
import { useState, useEffect, ChangeEvent } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import departamentos from '../../assets/departamentos.json';
import provincias from '../../assets/provincias.json';
import distritos from '../../assets/distritos.json';

interface LocationForProps{
  formData:any;
  errors: any;
  onChange: (data:any) => void;
}

const LocationForm: React.FC<LocationForProps> = ({ formData, errors,onChange}) => {

  
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
   const handleDepartamento = (event: ChangeEvent<HTMLSelectElement>)  => {
    const newDepartamento = event.target.value;
    setDepartamento(newDepartamento);
    onChange({ ...formData, departamento: newDepartamento});
  };

  //provinvcia
  const handleProvincia = (event: ChangeEvent<HTMLSelectElement>) => {
    const newProvincia = event.target.value;
    setProvincia(newProvincia);
    setDistrito(formData.distrito);
    onChange({ ...formData, provincia: newProvincia});
  };

  //distritos
  const handleDistrito =(event: ChangeEvent<HTMLSelectElement>)  => {
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
        Ubicación
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div>
            <select
              id="select-departamento"
              value={departamento}
              aria-placeholder="Departamento"
              onChange={handleDepartamento}
              className={`w-full border ${errors.departamento ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:border-blue-500`}
            >
              <option value="" disabled  hidden>Departamento</option>
              {departamentos.map((departamento) => (
                <option key={departamento.id} value={departamento.name}>
                  {departamento.name}
                </option>
              ))}
            </select>
          </div>
          {errors.departamento && <span className='text-red-800 text-sm'>{errors.departamento}</span>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <select
              id="select-provincia"
              value={provincia}
              onChange={handleProvincia}
              className={`w-full border ${errors.provincia ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:border-blue-500`}
            >
              <option value="" disabled hidden>Provincia</option>
              {provincias
                .filter(provincia => provincia.department_id === departamentos.find(dep => dep.name === departamento)?.id)
                .map((provincia) => (
                  <option key={provincia.id} value={provincia.name}>
                    {provincia.name}
                  </option>
                ))}
            </select>
          </div>
          {errors.provincia && <span className='text-red-800 text-sm'>{errors.provincia}</span>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <select
              id="select-distrito"
              value={distrito}
              onChange={handleDistrito}
              disabled={!provincia}
              className={`w-full border ${errors.distrito ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:border-blue-500`}
            >
              <option value="" disabled hidden>Distrito</option>
              {distritos
                .filter(distrito => distrito.province_id === provincias.find(prov => prov.name === provincia)?.id)
                .map((distrito) => (
                  <option key={distrito.id} value={distrito.name}>
                    {distrito.name}
                  </option>
                ))}
            </select>
          </div>
          {errors.distrito && <span className='text-red-800 text-sm'>{errors.distrito}</span>}
        </Grid>
        <Grid item xs={12}>
          <input
            required
            id="city"
            name="city"
            type='text'
            placeholder={errors.direccion ? "agregue su direccion" : "Direccion"}
            autoComplete="off"
            value={direccion}
            onChange={handleDireccion}
            className={`w-full border ${errors.direccion ? 'border-red-500': 'border-gray-300'}rounded p-2 focus:outline-none focus:border-blue-500`}
          />
          {errors.direccion && <span className='text-red-800 text-sm'>{errors.direccion}</span>}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default LocationForm;