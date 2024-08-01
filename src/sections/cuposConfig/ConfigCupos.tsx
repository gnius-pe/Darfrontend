import React, { useState, useEffect } from 'react';
import axios from 'axios';
import search from '../../assets/images/user/search.svg';

interface Specialty {
  _id: number;
  createdAt: string;
  specialtyName: string;
  initial?: string;
  color?: string;
  fecha?: string; // Agrega este campo para la fecha formateada
}

const CuposDisponibles: React.FC = () => {

  const [specialties, setSpecialties] = useState<Specialty[]>([]);

  useEffect(() => {
    // Llamada a la API para obtener las especialidades
    axios.get<Specialty[]>(import.meta.env.VITE_API_ESPECIALTY)
      .then(response => {
        const colors = ['bg-red-600', 'bg-blue-600', 'bg-green-600', 'bg-yellow-600', 'bg-purple-600'];
        const specialtiesWithColors = response.data.map((specialty, index) => {
          // Formatea la fecha
          const formattedDate = new Date(specialty.createdAt).toISOString().split('T')[0];
          return {
            ...specialty,
            Especialidad: specialty.specialtyName,
            initial: specialty.specialtyName.charAt(0).toUpperCase(),
            color: colors[index % colors.length],
            fecha: formattedDate, // Usa la fecha formateada
          };
        });
        setSpecialties(specialtiesWithColors);
      })
      .catch(error => {
        console.error('Error fetching specialties:', error);
      });
  }, []);

  return (
    <>
    <div className="flex sm:justify-center sm:items-center h-auto w-screen lg:w-[910px]">
      <div className="mx-auto ">
        <div className="max-w-[720px] ">
        <section className="flex flex-col gap-4 mt-3">
        <h1>Cupos por Especialidad</h1>
        <div className="flex gap-24">
          <div className='flex bg-gray-50 items-center border-gray-300 rounded-3xl focus:outline-none dark:bg-white'>
            <input 
                  type="search" 
                  id="default-search" 
                  className="block min-w-80 px-10 py-1.5 text-lg rounded-3xl text-gray-900 border border-none  dark:placeholder-gray-40" 
                  placeholder="Buscar por nombre" 
                  value=''
                />
            <img src={search} alt='search' className='h-6 pr-2'/>
          </div>
          
        </div>
      
        <table className="text-center bg-white rounded-lg min-w-full">
          <thead>
            <tr>
              <th className="w-8 py-4">
                <input type="checkbox" name="" id="" />
              </th>
              <th className="w-24">Especialidades</th>
              <th className="m-auto w-14">Estado para esta mision</th>
              <th className="w-14">Num Cupos Dia 01</th>
              <th className="w-14">Num Cupos Dia 02</th>
              <th className="w-14">Num Cupos Dia 03</th>
              <th className="w-6 px-1 py-3  "></th>
            </tr>
          </thead>
          <tbody>
          {specialties.map((specialty) => {
            return (
              <tr className='py-2' key={specialty._id}>
                <td><input type="checkbox" name="" id="" /></td>
                <td className='h-12 flex'>
                  <div className='flex items-center gap-3'>
                    <div className={`w-6 h-6 rounded-sm text-white ${specialty.color}`}>
                      {specialty.initial}
                    </div>
                    <h2>{specialty.specialtyName}</h2>
                  </div>
                </td>
                <td>
                  <div className='px-1 rounded-full bg-blue-400'>Activado</div>
                </td>
                <td className=''>
                  <select className="border rounded p-1">
                    {[...Array(100).keys()].map(num => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </td>
                <td className=''>
                  <select className="border rounded p-1">
                    {[...Array(100).keys()].map(num => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </td>
                <td className=''>
                  <select className="border rounded p-1">
                    {[...Array(100).keys()].map(num => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
            );
          })}
          </tbody>  
        </table>
        <div className='flex bg-white justify-between items-center px-2 py-1 rounded-md'>
          <div className='flex'>
          <svg className="w-6 h-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="10" r="5" />
          </svg>
            <p> Ultima actualizacion a las<span> 3:05 pm</span> <button className='underline'>Actualizar</button></p>
          </div>
          <div className="flex gap-2">
            <button
              className={`px-1 py-1 mx-1 border rounded-3xl bg-gray-200 cursor-not-allowed`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div className="flex items-center">
              <p>1 de 3</p>
            </div>
            <button
              className={`px-1 py-1 mx-1 border rounded-3xl bg-gray-200 cursor-not-allowed`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          <div className='flex'>
            <p>Filas por pagina: </p>
            <div>
              <select
                id="numRows"
              >
                <option value={5}>5 filas</option>
                <option value={7}>7 filas</option>
                <option value={10}>10 filas</option>
                <option value={15}>15 filas</option>
              </select>
            </div>
            
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default CuposDisponibles;
