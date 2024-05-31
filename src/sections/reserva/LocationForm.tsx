import * as React from 'react';
import { useState, useEffect, ChangeEvent } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
  const [errors, setErrors] = useState({
    departamento:false,
    provincia:false,
    distrito:false,
    direccion:false,
  });

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
        Locacion
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div>
            <select
              id="select-departamento"
              value={departamento}
              aria-placeholder="Departamento"
              onChange={handleDepartamento}
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled selected hidden>Departamento</option>
              {departamentos.map((departamento) => (
                <option key={departamento.id} value={departamento.name}>
                  {departamento.name}
                </option>
              ))}
            </select>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <select
              id="select-provincia"
              value={provincia}
              onChange={handleProvincia}
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled selected hidden>Provincia</option>
              {provincias
                .filter(provincia => provincia.department_id === departamentos.find(dep => dep.name === departamento)?.id)
                .map((provincia) => (
                  <option key={provincia.id} value={provincia.name}>
                    {provincia.name}
                  </option>
                ))}
            </select>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <select
              id="select-distrito"
              value={distrito}
              onChange={handleDistrito}
              disabled={!provincia}
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled selected hidden>Distrito</option>
              {distritos
                .filter(distrito => distrito.province_id === provincias.find(prov => prov.name === provincia)?.id)
                .map((distrito) => (
                  <option key={distrito.id} value={distrito.name}>
                    {distrito.name}
                  </option>
                ))}
            </select>
          </div>
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
            onBlur={() => setErrors((prev) => ({ ...prev, direccion: !direccion }))}
            className={`w-full border ${errors.direccion ? 'border-red-500': 'border-gray-300'}rounded p-2 focus:outline-none focus:border-blue-500`}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default LocationForm;
