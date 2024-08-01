import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ViewFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  patientId: string;
}

const ViewFormModal: React.FC<ViewFormModalProps> = ({ isOpen, onClose, patientId }) => {
  const [patientData, setPatientData] = useState<any>(null);

  useEffect(() => {
    if (isOpen && patientId) {
      const fetchPatientDetails = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_PATIENT}/${patientId}`
          );
          setPatientData(response.data);
        } catch (error) {
          console.error('Error fetching patient details:', error);
        }
      };

      fetchPatientDetails();
    }
  }, [isOpen, patientId]);

  if (!isOpen || !patientData) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative p-4 bg-white rounded-lg max-w-4xl w-full mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Detalles del Paciente</h2>
          <button
            className="focus:outline-none"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <table className="border-collapse w-full">
          <tbody>
            <tr>
              <td className="border p-2 font-medium">Nombres:</td>
              <td className="border p-2">{patientData.personalInformation.name}</td>
              <td className="border p-2 font-medium">Apellidos:</td>
              <td className="border p-2">{patientData.personalInformation.lastName}</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Celular:</td>
              <td className="border p-2">{patientData.personalInformation.firtsNumberPhone}</td>
              <td className="border p-2 font-medium">Direccion</td>
              <td className="border p-2">{patientData.location.reference}</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">DNI:</td>
              <td className="border p-2">{patientData.personalInformation.numberIdentification}</td>
              <td className="border p-2 font-medium">Departamento:</td>
              <td className="border p-2">{patientData.location.department}</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Nacimiento:</td>
              <td className="border p-2">{new Date(patientData.personalInformation.birthDate).toLocaleDateString()}</td>
              <td className="border p-2 font-medium">Provincia</td>
              <td className="border p-2">{patientData.location.province}</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Email:</td>
              <td className="border p-2">{patientData.personalInformation.email}</td>
              <td className="border p-2 font-medium">Distrito:</td>
              <td className="border p-2">{patientData.location.district}</td>
            </tr>
            
            <tr>
              <td className="border p-2 font-medium">Fecha de Cita:</td>
              <td className="border p-2">{new Date(patientData.cita.appointmentDate).toLocaleDateString()}</td>
              <td className="border p-2 font-medium">Detalle de Cita:</td>
              <td className="border p-2">{patientData.cita.appointmentDetail}</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Especialidades:</td>
              <td className="border p-2" colSpan={3}>
                {patientData.cita.specialties.map((specialty: any) => specialty.label).join(', ')}
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Examen Reciente:</td>
              <td className="border p-2">{patientData.question.questionExamRecent ? 'Sí' : 'No'}</td>
              <td className="border p-2 font-medium">Apoyo Espiritual:</td>
              <td className="border p-2">{patientData.question.spiritualSupport ? 'Sí' : 'No'}</td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Actividades Futuras:</td>
              <td className="border p-2">{patientData.question.futureActivities ? 'Sí' : 'No'}</td>
            </tr>
          </tbody>
        </table>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ViewFormModal;



