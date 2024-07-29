import * as React from 'react';
import { useState, ChangeEvent, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {Especialidad, fetchEspecialidades } from './cita/especialidades'
import Select, { MultiValue} from 'react-select';
import timeOptions from './cita/timeOptions';

interface CitaFormProps {
  formData: any;
  errors: any;
  onChange: (data: any) => void;
}

const FechasReserva = [
  { id: "01", extendFecha: '01/08/2024 (Jueves)', fecha: '2024-08-01' },
];

const CitaForm: React.FC<CitaFormProps> = ({ formData, errors, onChange }) => {
  const [dateReserva, setDateReserva] = useState(formData.fechareserva);
  const [hora, setHora] = useState(formData.hora);
  const [especialidad, setEspecialidad] = useState(formData.especiality);
  const [especialidades, setEspecialidades] = useState<Especialidad[]>([]);
  const [mensaje, setMensaje] = useState(formData.mensaje);
  const [checkAnalisis, setCheckAnalisis] = useState(formData.analisis );
  const [checkAyuda, setCheckAyuda] = useState(formData.ayuda );
  const [checkVisita, setCheckVisita] = useState(formData.visita );

  useEffect(() => {
    setDateReserva(formData.fechareserva);
    setMensaje(formData.mensaje);
    setHora(formData.hora);
    setEspecialidad(formData.especiality);
    setCheckAnalisis(formData.analisis);
    setCheckAyuda(formData.ayuda);
    setCheckVisita(formData.visita);
  }, [formData]);

  useEffect(() => {
    const getEspecialidades = async () => {
      const fetchedEspecialidades = await fetchEspecialidades();
      setEspecialidades(fetchedEspecialidades);
    };

    getEspecialidades();
  }, []);

  const handleDateReserva = (event: ChangeEvent<HTMLSelectElement>) => {
    const newDateReservaString = event.target.value;
    setDateReserva(newDateReservaString);
    onChange({ ...formData, fechareserva: newDateReservaString });
  };

  const handleHora = (event: ChangeEvent<HTMLSelectElement>) => {
    const newHora = event.target.value;
    setHora(newHora);
    onChange({ ...formData, hora: newHora });
  };

  const handleEspecialidad = (selectedOptions: MultiValue<Especialidad>) => {
    if (selectedOptions.length <= 3) {
      setEspecialidad(selectedOptions);
      onChange({ ...formData, especiality: selectedOptions });
    } else {
      // Aquí puedes mostrar un mensaje de error o notificación al usuario si lo deseas
      alert('Solo puedes seleccionar hasta 3 opciones.');
    }
  };

  const handleMensaje = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newMensaje = event.target.value;
    setMensaje(newMensaje);
    onChange({ ...formData, mensaje: newMensaje });
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
      <h2 className="text-lg font-bold mb-4">
        Detalles de Cita
      </h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div>
            <select
              id="fecha-select"
              value={dateReserva}
              onChange={handleDateReserva}
              className={`w-full border ${errors.fechareserva ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:border-blue-500`}
            >
              <option value="" disabled hidden>Fecha de reserva</option>
              {FechasReserva.map((fecha) => (
                <option key={fecha.id} value={fecha.fecha}>
                  {fecha.extendFecha}
                </option>
              ))}
            </select>
          </div>
          {errors.fechareserva && <span className='text-red-800 text-sm'>{errors.fechareserva}</span>}
        </Grid>
        <Grid item xs={6} md={3}>
          <div>
            <select
              id="fecha-select"
              value={hora}
              onChange={handleHora}
              className={`w-full border ${errors.hora ? 'border-red-500' : 'border-gray-300'} rounded p-2 focus:outline-none focus:border-blue-500`}
            >
              <option value="" disabled hidden>Hora</option>
              {timeOptions.map((hora, index) => (
                <option key={index} value={hora}>
                  {hora}
                </option>
              ))}
            </select>
          </div>
          {errors.hora && <span className='text-red-800 text-sm'>{errors.hora}</span>}
        </Grid>
        <Grid item xs={12}>
          <p className='text-sm'>Puede elegir hasta 3 especialidades<span className='text-red-600'>*</span></p>
        </Grid>
        <Grid item xs={12}>
          <div className="container mx-auto w-full">
            <Select
              isMulti
              name="especialidades"
              value={especialidad}
              options={especialidades}
              placeholder='¿En que área quieres ser atendido?'
              onChange={handleEspecialidad}
              className="w-full"
              classNamePrefix="selecciona tus especialidades"
            />
          </div>
          {errors.especiality && <span className='text-red-800 text-sm'>{errors.especiality}</span>}
        </Grid>
        <Grid item xs={12}>
          <textarea
            id="mensaje"
            placeholder={"Cuentanos que enfermades tienes                                             Ejemplo, tengo problemas de gastritis"}
            value={mensaje}
            onChange={handleMensaje}
            rows={3} // Altura de 3 filas
            className='w-full border rounded p-2 resize-none focus:outline-none focus:border-blue-500'
          />
        </Grid>
        <Grid item xs={12}>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="analisis"
              name="analisis"
              checked={checkAnalisis}
              onChange={handleCheckAnalisis}
              className="form-checkbox text-secondary h-5 w-5"
            />
            <label htmlFor="analisis" className="ml-2 text-gray-900">
              ¿Cuentas con exámenes o algún análisis sobre tu consulta que tenga menos de 30 días?
            </label>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="ayuda"
              name="ayuda"
              checked={checkAyuda}
              onChange={handleCheckAyuda}
              className="form-checkbox text-secondary h-4 w-4"
            />
            <label htmlFor="ayuda" className="ml-2 text-gray-900">
              ¿Estas interesado en recibir ayuda espiritual?
            </label>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="visita"
              name="visita"
              checked={checkVisita}
              onChange={handleCheckVisita}
              className="form-checkbox text-secondary h-4 w-4"
            />
            <label htmlFor="visita" className="ml-2 text-gray-900">
              ¿Deseas ser contactado para futuras actividades o eventos religiosos?
            </label>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CitaForm;
