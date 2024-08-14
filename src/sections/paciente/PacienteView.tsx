import React, { useState, useEffect } from 'react';
import AddPaciente from './CallbackReserva';
import ViewFormModal from './ViewPaciente';
import UpdateForm from './UpdatePaciente';
import axios from 'axios';
import Deletepatient from './tableconfig/DeleteRow';
import search from '../../assets/images/user/search.svg';
import DownloadButton from './tableconfig/DownloadButton';
import DonwloadList from './tableconfig/DownloadList';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton} from '@mui/material';
import { Visibility as VisibilityIcon, Edit as EditIcon } from '@mui/icons-material';

const PacienteView: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [ isViewFormOpen, setIsViewFormOpen] = useState<boolean>(false);
  const [ isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [patients, setPatients] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);

  /*const userInfo = JSON.parse(sessionStorage.getItem("userInfo") || "{}");*/
  /*const userRole = userInfo.role;*/

  const fetchPatients = async () => {
    try {
      const baseUrl = import.meta.env.VITE_API_PATIENTS_BASE_ROW;
      const url = `${baseUrl}?page=${currentPage}&limit=${rowsPerPage}`;
      const response = await axios.get(url);
      const data = response.data.items.docs;
      setPatients(data);
      setTotalPages(Math.ceil(response.data.items.totalDocs / rowsPerPage));
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, [currentPage, rowsPerPage]);

  const handleRefresh = () => {
    fetchPatients(); // Refresh the table data
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenFormModal = (patientId: string) => {
    setSelectedPatientId(patientId);
    setIsViewFormOpen(true);
  };

  const handleCloseFormModal = () => {
    setIsViewFormOpen(false);
    setSelectedPatientId(null);
  };

  const handleOpenUpdate = (patientId: string) => {
    setSelectedPatientId(patientId);
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

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset the current page when changing rows per page
  };

  const filteredRows = patients.filter(patient =>
    `${patient.personalInformation.name} ${patient.personalInformation.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );


  return (
    <>
    <div className="flex sm:justify-center sm:items-center h-auto w-screen lg:w-[910px]">
      <div className="mx-auto ">
        <div className="w-[900px] ">
        <section className="flex flex-col gap-4 mt-3">
        <h1>Pacientes: </h1>
        <div className="flex gap-24">
          <div className='flex bg-gray-50 items-center border-gray-300 rounded-3xl focus:outline-none dark:bg-white'>
            <input 
                  type="search" 
                  id="default-search" 
                  className="block min-w-80 px-10 py-1.5 text-lg rounded-3xl text-gray-900 border border-none  dark:placeholder-gray-40" 
                  placeholder="Buscar por nombre" 
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
            <img src={search} alt='search' className='h-6 pr-2'/>
          </div>
          <button className="bg-custom-purple px-4 py-1 rounded-3xl text-white" onClick={handleOpenModal}>
            Nuevo paciente
          </button>
          <div className="flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#442670" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 0 0 3 3h.27l-.155 1.705A1.875 1.875 0 0 0 7.232 22.5h9.536a1.875 1.875 0 0 0 1.867-2.045l-.155-1.705h.27a3 3 0 0 0 3-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0 0 18 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM16.5 6.205v-2.83A.375.375 0 0 0 16.125 3h-8.25a.375.375 0 0 0-.375.375v2.83a49.353 49.353 0 0 1 9 0Zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 0 1-.374.409H7.232a.375.375 0 0 1-.374-.409l.526-5.784a.373.373 0 0 1 .333-.337 41.741 41.741 0 0 1 8.566 0Zm.967-3.97a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H18a.75.75 0 0 1-.75-.75V10.5ZM15 9.75a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V10.5a.75.75 0 0 0-.75-.75H15Z" clipRule="evenodd" />
            </svg>
            <DonwloadList/>
          </div>
        </div>
      
        <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <input type="checkbox" />
                      </TableCell>
                      <TableCell>DNI</TableCell>
                      <TableCell>Nombre Completo</TableCell>
                      <TableCell>Celular</TableCell>
                      <TableCell>Edad</TableCell>
                      <TableCell>Especialidades a consultar</TableCell>
                      <TableCell>Examen clínico</TableCell>
                      <TableCell>Estado</TableCell>
                      <TableCell>Acciones</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredRows.map((patient) => (
                      <TableRow key={patient._id}>
                        <TableCell>
                          <input type="checkbox" />
                        </TableCell>
                        <TableCell>{patient.personalInformation.numberIdentification}</TableCell>
                        <TableCell>{`${patient.personalInformation.name} ${patient.personalInformation.lastName}`}</TableCell>
                        <TableCell>{patient.personalInformation.firtsNumberPhone}</TableCell>
                        <TableCell>{patient.personalInformation.age}</TableCell>
                        <TableCell>
                          {patient.cita.specialties.map((specialty: any, index: number) => (
                            <span key={index}>
                              {specialty.label}
                              {index < patient.cita.specialties.length - 1 && <br />}
                            </span>
                          ))}
                        </TableCell>
                        <TableCell className={`font-semibold ${patient.question.questionExamRecent ? 'text-green-600': 'text-red-600'}`}>{patient.question.questionExamRecent ? 'sí' : 'no'}</TableCell>
                        <TableCell className={`font-semibold ${patient.estate === 'ESPERA' ? 'text-red-700' : patient.estate === 'PENDIENTE' ? 'text-yellow-600' : patient.estate === 'CONSULTA' ? 'text-green-600' : 'text-blue-600'}`}>{patient.estate}</TableCell>
                        <TableCell>
                          <div className='flex items-center'>
                          <IconButton onClick={() => handleOpenFormModal(patient._id)}>
                            <VisibilityIcon />
                          </IconButton>
                          {/*{userRole === 'admin' && (
                            <Deletepatient patientId={patient._id} onDelete={fetchPatients} />
                          )}*/}
                          <Deletepatient patientId={patient._id} onDelete={fetchPatients} />
                          <IconButton onClick={() => handleOpenUpdate(patient._id)}>
                            <EditIcon />
                          </IconButton>
                          <DownloadButton patientId={patient._id} />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
        <div className='flex bg-white justify-between items-center px-2 py-1 rounded-md'>
          <div className='flex'>
          <svg className="w-6 h-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="10" r="5" />
          </svg>
            <p> Ultima actualizacion a las<span> 3:05 pm</span> <button className='underline' onClick={handleRefresh}>Actualizar</button></p>
          </div>
          <div className="flex gap-2">
            <button
              className={`px-1 py-1 mx-1 border rounded-3xl ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-400'}`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div className="flex items-center">
              <p>{currentPage} de {totalPages}</p>
            </div>
            <button
              className={`px-1 py-1 mx-1 border rounded-3xl ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-400'}`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
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
                value={rowsPerPage} onChange={handleRowsPerPageChange}
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
      
      <AddPaciente isOpen={isModalOpen} onClose={handleCloseModal}/>
      {selectedPatientId && (
        <ViewFormModal
          isOpen={isViewFormOpen}
          onClose={handleCloseFormModal}
          patientId={selectedPatientId}
        />
      )}
      {selectedPatientId && (
        <UpdateForm isOpen={isUpdateOpen} onClose={handleCloseUpdate} patientId={selectedPatientId}/>
      )}
      
    </>
  );
};

export default PacienteView;
/*twngo que cambiar la tabla del shadcn UI*/ 