import * as React from 'react';
import { useState, useEffect, ChangeEvent} from 'react';

import Grid from '@mui/material/Grid';
import { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';

import Calendar from '../../components/Date';

interface AddressFormProps {
  formData:any;
  errors: any;
  onChange: (data: any ) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({formData, errors, onChange }) => {

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
  const [dniExists, setDniExists] = useState(false);

  // Función para enfocar los campos vacíos

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

  const checkDniExists = async (dni: string) => {
    try {
      const response = await axios.get(`https://goldfish-app-sryot.ondigitalocean.app/api/dni/${dni}`);
      return response.data.state;
    } catch (error) {
      console.error('Error al verificar el DNI:', error);
      return false;
    }
  };

  useEffect(() => {
    if (tipoDocumento !== 'DNI') {
      // Si el tipo de documento no es "DNI", restablecer los nombres y apellidos
      setNombres(formData.name);
      setApellidos(formData.lastName);
      return; // Salir del efecto si no es "DNI"
    }

    if (!numberId || !(/^\d{8}$/.test(numberId))) return; // No hacer la solicitud si el DNI está vacío o no es igual a 8 caract

    
        // Hacer la solicitud a la API
        checkDniExists(numberId).then((exists) => {
          if (exists) {
            setDniExists(true);
            setNombres(formData.name);
            setApellidos(formData.lastName);
          } else {
            setDniExists(false);
            // Hacer la solicitud a la API para obtener los datos del DNI
            axios
              .get(`https://dniruc.apisperu.com/api/v1/dni/${numberId}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InBhdWxlbGRvdGVybzQ1NkBnbWFpbC5jb20ifQ.w3QyBrX1rCtVfaNT496rClCWWIBFnWzGGLCtWj8yDAs`)
              .then((response) => {
                const data = response.data;
                if (data.success) {
                  const nombres = data.nombres;
                  const apellidos = `${data.apellidoPaterno} ${data.apellidoMaterno}`;
                  const objeto = { name: nombres, lastName: apellidos };
                  setNombres(nombres);
                  setApellidos(apellidos);
                  onChange(objeto); // Actualizar el estado con el nuevo objeto
                } else {
                  console.error('Error al obtener datos del DNI');
                  setNombres(formData.name);
                  setApellidos(formData.lastName);
                }
              })
              .catch((error) => {
                console.error('Error al obtener datos del DNI:', error);
                setNombres(formData.name);
                setApellidos(formData.lastName);
              });
          }
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
    console.log(birthDate);
    console.log(tipoDocumentoFilled);
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
      <h2  className="text-lg font-bold mb-8">
        Datos Personales
      </h2>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} style={{ paddingTop: '12px' }}>
          <div>
            <select
              id="tipo-documento"
              value={tipoDocumento}
              onChange={handleTipoDocumentoChange}
              className={`w-full border ${errors.typeId ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:border-blue-500`}
            >
              <option value="" disabled hidden>Documento</option>
              <option className='bg-white' value="DNI">DNI</option>
              <option className='bg-white' value="Pasaporte">Pasaporte</option>
              <option className='bg-white' value="Carnet de extranjeria">Carnet de extranjería</option>
            </select>
          </div>
          {errors.typeId && <span className='text-red-800 text-sm'>{errors.typeId}</span>}
        </Grid>

        <Grid item xs={12} sm={6} style={{ paddingTop: '12px' }}>
          <input
            required
            placeholder={errors.numberId ? "ingrese su N° de DNI" : "N° de Documento"}
            type="text"
            id="document-id"
            name="document-id"
            value={numberId}
            onChange={handleDniChange}
            className={`w-full border ${errors.numberId ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:border-blue-500`}
            autoComplete="off"
            maxLength={tipoDocumento === 'DNI' ? 8 : undefined}
          />
          {errors.numberId && <span className='text-red-800 text-sm'>{errors.numberId}</span>}
          {dniExists && <span className="text-red-800 text-sm">El DNI ya está registrado</span>}
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingTop: '12px' }}>
        <label className='block text-gray-900'>
          <input
            required
            id="nombres"
            name="nombres"
            type='text'
            placeholder={errors.name ? "Ingrese Nombre" : "Nombres"}
            autoComplete="off"
            value={nombres}
            onChange={handleNombresChange}
            className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:border-blue-500`}
          />
        </label>
        {errors.name && <span className='text-red-800 text-sm'>{errors.name}</span>}
      </Grid>

        <Grid item xs={12} sm={6} style={{ paddingTop: '12px' }}>
          <input
            required
            id="apellidos"
            name="apellidos"
            type='text'
            placeholder={errors.lastName ? "ingrese Apellidos":"Apellidos"}
            autoComplete="off"
            value={apellidos}
            onChange={handleApellidosChange}
            className={`w-full border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:border-blue-500`}
          />
          {errors.lastName && <span className='text-red-800 text-sm'>{errors.lastName}</span>}
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingTop: '12px' }}>
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
        <Grid item xs={12} sm={6} style={{ paddingTop: '12px' }}>
          <Calendar
            label='Fecha de Nacimiento'
            handleDate={handleDate}
            error={errors.birthDate}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingTop: '12px' }}>
          <input
            required
            id="firstcelnumber"
            name="firstcelnumber"
            placeholder={errors.firstNumberPhone ? "ingrese Celular":"Celular o telefono"}
            type='text'
            autoComplete="off"
            value={firstNumberPhone}
            onChange={handleNumberPhone}
            className={`w-full border ${errors.firstNumberPhone ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:border-blue-500`}
          />
          {errors.firstNumberPhone && <span className='text-red-800 text-sm'>{errors.firstNumberPhone}</span>}
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingTop: '12px' }}>
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
        <Grid item xs={12} sm={6} style={{ paddingTop: '12px' }}>
          <div className="flex flex-col items-center space-x-4">
            <h3 className='self-start'>Sexo</h3>
            <label className=''>
            <label className="inline-flex items-center mr-4">
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
            {errors.sexo && <span className='text-red-800 text-sm'>{errors.sexo}</span>}
            </label>
          </div>
       </Grid>
       <Grid item xs={12} sm={6} style={{ paddingTop: '12px' }}>
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