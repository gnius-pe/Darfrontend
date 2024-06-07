import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Calendar from '../../components/Date';

const CreateNewMision = () => {
   const [nombre, setNombre] = useState('');
   const [descripcion, setDescripcion] = useState('');
   const [fechaInicio, setFechaInicio] = useState('');
   const [fechaFinal, setFechaFinal] = useState('');

   const navigate = useNavigate();

   const handleSave = async () => {
       const misionData = {
           nameMision: nombre,
           description: descripcion,
           stateMison: "activo",
           startDate: fechaInicio,
           finalDate: fechaFinal
       };

       try {
           const response = await fetch('https://goldfish-app-sryot.ondigitalocean.app/api/mision', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(misionData)
           });

           if (response.ok) {
               console.log('Misión guardada correctamente');
               navigate('/dashboard/mision');
           } else {
               console.error('Error al guardar la misión');
           }
       } catch (error) {
           console.error('Error:', error);
       }
   };

   const handleCancel = () => {
      navigate('/dashboard/mision');
      console.log('Cancelada');
   };

   const handleStartDate = (date: Date | null) => {
       if (date) {
           const formattedDate = date.toISOString().split('T')[0];
           setFechaInicio(formattedDate);
       }
   };

   const handleFinalDate = (date: Date | null) => {
       if (date) {
           const formattedDate = date.toISOString().split('T')[0];
           setFechaFinal(formattedDate);
       }
   };

   return (
      <div className="flex flex-col gap-4 mt-3 mx-auto px-4">
         <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Nueva Misión</h2>
            <h3 className="text-lg font-semibold mb-4">Datos de la misión</h3>
            <div className="mb-4">
               <input
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="Nombre de la misión"
               />
            </div>
            <div className="mb-4">
               <textarea
                  id="descripcion"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="Descripción"
               />
            </div>
            <div className="flex justify-between mb-4">
               <div className="w-1/2 pr-2">
                  <Calendar
                     handleDate={handleStartDate}
                     label="Fecha de inicio"
                  />
               </div>
               <div className="w-1/2 pl-2">
                  <Calendar
                     handleDate={handleFinalDate}
                     label="Fecha Final"
                  />
               </div>
            </div>
            <div className="flex justify-end">
               <button onClick={handleCancel} className="bg-red-500 text-white py-2 px-4 mr-2 rounded hover:bg-red-600">Cancelar</button>
               <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Guardar</button>
            </div>
         </div>
      </div>
   );
};

export default CreateNewMision;
