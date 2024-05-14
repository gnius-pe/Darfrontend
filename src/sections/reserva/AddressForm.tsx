import * as React from 'react';
import { useState, useEffect, ChangeEvent} from 'react';

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
import { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';

import Calendar from '../../components/Date';
import nacionalidades from '../../assets/nacionalidades.json';
import departamentos from '../../assets/departamentos.json';
import provincias from '../../assets/provincias.json';
import distritos from '../../assets/distritos.json';


interface AddressFormProps {
  formData: any;
  onChange: (data: any) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({formData, onChange }) => {

  const [tipoDocumento, setTipoDocumento] = useState(formData.typeId);
const [numberId, setnumberId] = useState(formData.numberId);
  const [nombres, setNombres] = useState(formData.name);
  const [apellidos, setApellidos] = useState(formData.lastName);
  const [nacionalidad, setNacionalidad] = useState(formData.nacionality);
  const [departamento, setDepartamento] = useState(formData.departamento);
  const [provincia, setProvincia] = useState(formData.provincia);
  const [distrito, setDistrito] = useState(formData.distrito);
  const [sexo, setSexo] = useState(formData.sexo);
  const [ birthDate, setBirthDate] = useState(formData.birthDate);
  const [firstNumberPhone, setFirstNumberPhone] = useState(formData.firstNumberPhone);
  const [email, setEmail] = useState(formData.email);
  const [ direccion, setDireccion] = useState(formData.direccion);

  useEffect(() => {
    setTipoDocumento(formData.typeId);
    setnumberId(formData.numberId);
    setNombres(formData.name);
    setApellidos(formData.lastName);
    setNacionalidad(formData.nacionality);
    setDepartamento(formData.departamento);
    setProvincia(formData.provincia);
    setDistrito(formData.distrito);
    setSexo(formData.sexo);
    setBirthDate(formData.birthDate);
    setFirstNumberPhone(formData.firstNumberPhone);
    setEmail(formData.email);
    setDireccion(formData.direccion);
  },[formData])

  useEffect(() => {
    if (tipoDocumento !== 'DNI') {
      // Si el tipo de documento no es "DNI", restablecer los nombres y apellidos
      setNombres(formData.name);
      setApellidos(formData.lastName);
      return; // Salir del efecto si no es "DNI"
    }

    if (!numberId || !(/^\d{8}$/.test(numberId))) return; // No hacer la solicitud si el DNI está vacío o no es igual a 8 caract

    
    // Hacer la solicitud a la API
    axios.get(`https://dniruc.apisperu.com/api/v1/dni/${numberId}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InBhdWxlbGRvdGVybzQ1NkBnbWFpbC5jb20ifQ.w3QyBrX1rCtVfaNT496rClCWWIBFnWzGGLCtWj8yDAs`)
  .then(response => {
    const data = response.data;
    if (data.success) {
      const nombres = data.nombres;
      const apellidos = `${data.apellidoPaterno} ${data.apellidoMaterno}`;
      const objeto = { name: nombres, lastName: apellidos };
      setNombres(nombres);
      setApellidos(apellidos);
      onChange(objeto); // Update the state with the new object
    } else {
      // Manejar caso de error o DNI no encontrado
      console.error('Error al obtener datos del DNI');
      setNombres(formData.name);
      setApellidos(formData.lastName);
    }
  })
  .catch(error => {
    console.error('Error al obtener datos del DNI:', error);
    setNombres(formData.name);
    setApellidos(formData.lastName);
  });
  }, [tipoDocumento, numberId]);

  const handleTipoDocumentoChange = (event: SelectChangeEvent<string>) => {
    const newTypeid = event.target.value
    setTipoDocumento(newTypeid);
    onChange({ ...formData, typeId: newTypeid });
  };

  const handleDniChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDni = event.target.value;
    setnumberId(newDni);
    onChange({ ...formData, numberId: newDni });
  };

  const handleNombresChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setNombres(newName);
    onChange({ ...formData, name: newName});
  };

  const handleApellidosChange = (event: React.ChangeEvent<HTMLInputElement>)  => {
    const newLastName = event.target.value;
    setApellidos(newLastName);
    onChange({ ...formData, lastName: newLastName});
  };

  //nacionalidad
  const handleNacionality = (event: SelectChangeEvent<string>) => {
    const newNacionality = event.target.value;
    setNacionalidad(newNacionality);
    onChange({ ...formData, nacionality: newNacionality});
  };
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

  //sexo
  const handleSexo = (event: SelectChangeEvent<string>) => {
    const newSexo = event.target.value;
    setSexo(newSexo);
    onChange({ ...formData, sexo: newSexo});
  };

  //fecha de nacimiento
  const handleDate = (date: Date | null) => {
      setBirthDate(date);
      onChange({ ...formData, birthDate: date})
  };

  const handleNumberPhone = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumberPhone = event.target.value;
    setFirstNumberPhone(newNumberPhone);
    onChange({ ...formData, firstNumberPhone: newNumberPhone});
  };

  const handleDireccion = (event: ChangeEvent<HTMLInputElement>) => {
    const newDireccion = event.target.value;
    setDireccion(newDireccion);
    onChange({ ...formData, direccion: newDireccion});
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    onChange({ ...formData, email: newEmail});
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
            value={numberId}
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
            type='email'
            label="Correo electornico"
            fullWidth
            autoComplete="off"
            variant="standard"
            value={email}
            onChange={handleEmail}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Calendar 
              label='Fecha de Nacimiento'
              handleDate={handleDate}  
            />
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
            value={firstNumberPhone}
            onChange={handleNumberPhone}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Sexo</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={sexo}
            onChange={handleSexo}
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
            value={direccion}
            onChange={handleDireccion}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddressForm;