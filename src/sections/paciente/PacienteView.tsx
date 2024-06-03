import { patientDates } from '../../assets/patient/datePatient';
import React, { useState } from 'react';
import FormModal from '../reserva/CheckoutFloat';
import ViewFormModal from './ViewPaciente';
import UpdateForm from './UpdatePaciente';

const PacienteView: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [ isViewFormOpen, setIsViewFormOpen] = useState<boolean>(false);
  const [ isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const rowsPerPage = 6;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log('quiero cerrar pero algo anda mal')
  };

  const handleOpenFormModal = () => {
    setIsViewFormOpen(true);
  };

  const handleCloseFormModal = () => {
    setIsViewFormOpen(false);
  };

  const handleOpenUpdate = () => {
    setIsUpdateOpen(true);
  };

  const handleCloseUpdate = () => {
    setIsUpdateOpen(false);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); 
  };

  const filteredRows = patientDates.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredRows.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

  return (
    <>
      <section className="flex flex-col gap-4 mt-3 mx-auto px-4">
        <h1>Usuarios: </h1>
        <div className="flex gap-24">
        
        <div className='relative'>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
        <input 
              type="search" 
              id="default-search" 
              className="block min-w-80 px-10 py-1.5 text-lg text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:outline-none dark:bg-whit dark:placeholder-gray-40" 
              placeholder="Buscar por nombre" 
              value={searchTerm}
              onChange={handleSearchChange}
            />
        </div>
          <button className="bg-blue-400 px-4 py-1 rounded-3xl" onClick={handleOpenModal}>
            Nuevo usuario
          </button>
          <div className="flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 0 0 3 3h.27l-.155 1.705A1.875 1.875 0 0 0 7.232 22.5h9.536a1.875 1.875 0 0 0 1.867-2.045l-.155-1.705h.27a3 3 0 0 0 3-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0 0 18 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM16.5 6.205v-2.83A.375.375 0 0 0 16.125 3h-8.25a.375.375 0 0 0-.375.375v2.83a49.353 49.353 0 0 1 9 0Zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 0 1-.374.409H7.232a.375.375 0 0 1-.374-.409l.526-5.784a.373.373 0 0 1 .333-.337 41.741 41.741 0 0 1 8.566 0Zm.967-3.97a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H18a.75.75 0 0 1-.75-.75V10.5ZM15 9.75a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V10.5a.75.75 0 0 0-.75-.75H15Z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <table className="text-center bg-white">
          <thead>
            <tr>
              <th className="w-8 py-4">
                <input type="checkbox" name="" id="" />
              </th>
              <th className="w-20">DNI</th>
              <th className="m-auto w-28">Fecha de Nacimiento</th>
              <th className="w-24">Celular</th>
              <th className="w-16 px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium uppercase">Edad</th>
              <th className="px-2">Especialidades</th>
              <th className="w-16 px-2">Examen clinico</th>
              <th className="w-20">Estado</th>
              <th className="w-32">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map(({ dni, name, edad, celular, especialidades, examClin, estate }, key) => {
              const className = `py-3 px-5 border border-gray-300 ${key === currentRows.length - 1 ? "" : "border-b border-blue-gray-50"}`;
              return (
                <tr key={key} className={className}>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>{dni}</td>
                  <td className="py-4">{name}</td>
                  <td>{celular}</td>
                  <td>{edad}</td>
                  <td>{especialidades}</td>
                  <td className={examClin ? 'text-green-600': 'text-red-600'}>{examClin ? 'si' : 'no'}</td>
                  <td className={estate === 'en consulta' ? 'text-green-600' : estate === 'atendido'? 'text-yellow-600':'text-red-700'}>{estate}</td>
                  <td className="py-4 flex justify-around">
                    <button name='view' onClick={handleOpenFormModal} className="w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                      <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                    </svg>
                    </button>
                    <button name='deleted' className="w-6 h-6">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button name='update' onClick={handleOpenUpdate} className="w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                    </button>
                    <button name='donwload'  className="w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-center mt-0">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 mx-1 border ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-white'}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
      <FormModal isOpen={isModalOpen} onClose={handleCloseModal} useBackdrop={true}/>
      <ViewFormModal isOpen={isViewFormOpen} onClose={handleCloseFormModal}/>
      <UpdateForm isOpen={isUpdateOpen} onClose={handleCloseUpdate}/>
    </>
  );
};

export default PacienteView;
