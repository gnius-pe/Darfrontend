import * as React from 'react';
import { useState, useEffect, ChangeEvent} from 'react';

import Grid from '@mui/material/Grid';
import { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';

import Calendar from '../../components/Date';

interface AddressFormProps {
  formData:any;
  onChange: (data: any ) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({formData, onChange }) => {

  const [tipoDocumento, setTipoDocumento] = useState(formData.typeId);
  const [numberId, setnumberId] = useState(formData.numberId);
  const [nombres, setNombres] = useState(formData.name);
  const [apellidos, setApellidos] = useState(formData.lastName);
  const [sexo, setSexo] = useState(formData.sexo);
  const [ birthDate, setBirthDate] = useState(formData.birthDate);
  const [firstNumberPhone, setFirstNumberPhone] = useState(formData.firstNumberPhone);
  const [secondcelnumber, setSecondcelnumber] = useState(formData.secondNumberPhone);
  const [email, setEmail] = useState(formData.email);
  const [ nacionalidad, setNacionalidad] = useState('Peru');
  const [tipoDocumentoFilled, setTipoDocumentoFilled] = useState(false);
  const [errors, setErrors] = useState({
    tipoDocumento: false,
    numberId: false,
    nombres: false,
    apellidos: false,
    sexo: false,
    birthDate: false,
    firstNumberPhone: false,
  });

  useEffect(() => {
    setTipoDocumento(formData.typeId);
    setnumberId(formData.numberId);
    setNombres(formData.name);
    setApellidos(formData.lastName);
    setSexo(formData.sexo);
    setBirthDate(formData.birthDate); 
    setFirstNumberPhone(formData.firstNumberPhone);
    setSecondcelnumber(formData.secondNumberPhone);
    setEmail(formData.email);
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

  const handleTipoDocumentoChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newTypeid = event.target.value;
    setTipoDocumento(newTypeid);
    setTipoDocumentoFilled(event.target.value !== '');
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

  //sexo
  const handleSexo = (event: SelectChangeEvent<string>) => {
    const newSexo = event.target.value;
    setSexo(newSexo);
    onChange({ ...formData, sexo: newSexo});
  };

  //fecha de nacimiento
  const handleDate = (date: Date | null) => {
    if (date) {
      const formattedDate = date.toISOString().split('T')[0];
      setBirthDate(date);
      onChange({ ...formData, birthDate: formattedDate });
    } else {
      setBirthDate(date);
      onChange({ ...formData, birthDate: null });
    }
  };
  
  

  const handleNumberPhone = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumberPhone = event.target.value;
    setFirstNumberPhone(newNumberPhone);
    onChange({ ...formData, firstNumberPhone: newNumberPhone});
  };

  const handlesecNumberPhone = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumberPhone = event.target.value;
    setSecondcelnumber(newNumberPhone);
    onChange({ ...formData, secondNumberPhone: newNumberPhone});
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    onChange({ ...formData, email: newEmail});
  };

  const handleNacionalidad = (event: ChangeEvent<HTMLSelectElement>) => {
    setNacionalidad(event.target.value);
  }

  return (
    <React.Fragment>
      <h2  className="text-lg font-bold mb-4">
        Datos Personales
      </h2>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <div>
          <select
            id="tipo-documento"
            value={tipoDocumento}
            onChange={handleTipoDocumentoChange}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled selected hidden>Documento</option>
            <option value="DNI">DNI</option>
            <option value="Pasaporte">Pasaporte</option>
            <option value="Carnet de extranjeria">Carnet de extranjería</option>
          </select>
        </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            required
            placeholder={errors.numberId ? "ingrese su N° de DNI" : "N° de Documento"}
            type="text"
            id="document-id"
            name="document-id"
            value={numberId}
            onChange={handleDniChange}
            onBlur={() => setErrors((prev) => ({ ...prev, numberId: !numberId }))}
            className={`w-full border ${errors.numberId ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:border-blue-500`}
            autoComplete="off"
            maxLength={tipoDocumento === 'DNI' ? 8 : undefined}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            required
            id="nombres"
            name="nombres"
            type='text'
            placeholder={errors.nombres ? "ingrese Nombre":"Nombres"}
            autoComplete="off"
            value={nombres}
            onChange={handleNombresChange}
            onBlur={() => setErrors((prev) => ({ ...prev, nombres: !nombres }))}
            className={`w-full border ${errors.nombres ? 'border-red-500': 'border-gray-300'}rounded p-2 focus:outline-none focus:border-blue-500`}  
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            required
            id="apellidos"
            name="apellidos"
            type='text'
            placeholder={errors.apellidos ? "ingrese Apellidos":"Apellidos"}
            autoComplete="off"
            value={apellidos}
            onChange={handleApellidosChange}
            onBlur={() => setErrors((prev) => ({ ...prev, apellidos: !apellidos }))}
            className={`w-full border ${errors.apellidos ? 'border-red-500': 'border-gray-300'}rounded p-2 focus:outline-none focus:border-blue-500`}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            id="email"
            name="email"
            type='email'
            placeholder="email(Opcional)"
            autoComplete="off"
            value={email}
            onChange={handleEmail}
            className='w-full border rounded p-2 focus:outline-none focus:border-blue-500'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Calendar 
              label='Fecha de Nacimiento'
              handleDate={handleDate}  
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            required
            id="firstcelnumber"
            name="firstcelnumber"
            placeholder={errors.firstNumberPhone ? "ingrese Celular":"Celular o telefono"}
            type='number'
            autoComplete="off"
            value={firstNumberPhone}
            onChange={handleNumberPhone}
            onBlur={() => setErrors((prev) => ({ ...prev, firstNumberPhone: !firstNumberPhone }))}
            className={`w-full border ${errors.firstNumberPhone ? 'border-red-500': 'border-gray-300'}rounded p-2 focus:outline-none focus:border-blue-500`}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            id="secondcelnumber"
            name="secondcelnumber"
            placeholder="Segundo celular (opcional)"
            autoComplete="off"
            value={secondcelnumber}
            onChange={handlesecNumberPhone}
            className='w-full border rounded p-2 focus:outline-none focus:border-blue-500'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="sexo"
                value="femenino"
                checked={sexo === 'femenino'}
                onChange={handleSexo}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Femenino</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="sexo"
                value="masculino"
                checked={sexo === 'masculino'}
                onChange={handleSexo}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Masculino</span>
            </label>
          </div>
       </Grid>
       <Grid item xs={12} sm={6}>
          <div>
          <select
            id="demo-simple-select"
            value={nacionalidad}
            onChange={handleNacionalidad}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
          >
              <option value={'Peru'}>
                Peru
              </option>
          </select>
        </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddressForm;