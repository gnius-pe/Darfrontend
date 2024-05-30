import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 


const CreateNewMision = () => {
   const [nombre, setNombre] = useState('');
   const [descripcion, setDescripcion] = useState('');
   const [fechaInicio, setFechaInicio] = useState('');
   const [fechaFinal, setFechaFinal] = useState('');
   const navigate = useNavigate();

   const handleSave = () => {
       console.log('Guardado');
   };
 
   const handleCancel = () => {
      navigate(-1);
     console.log('cancelada');
   };
  
   return (
      <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-2">NUEVA MISIÓN</h2>
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
            placeholder="Descricipcion"
          />
        </div>
        <div className="flex justify-between mb-4">
          <div className="w-1/2 pr-2">
            <label htmlFor="fechaInicio" className="block mb-1">Fecha de inicio:</label>
            <input
              type="date"
              id="fechaInicio"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="fechaFinal" className="block mb-1">Fecha final:</label>
            <input
              type="date"
              id="fechaFinal"
              value={fechaFinal}
              onChange={(e) => setFechaFinal(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
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