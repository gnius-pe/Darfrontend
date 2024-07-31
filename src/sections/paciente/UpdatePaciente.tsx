import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  patientId: string;
}

const UpdateForm: React.FC<FormModalProps> = ({ isOpen, onClose, patientId }) => {
  const [patientData, setPatientData] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState<any>(null);

  useEffect(() => {
    if (isOpen && patientId) {
      const fetchPatientDetails = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_PATIENT}/${patientId}`
          );
          setPatientData(response.data);
          setEditedData(response.data); // Initializing editedData with fetched data
        } catch (error) {
          console.error('Error fetching patient details:', error);
        }
      };

      fetchPatientDetails();
    }
  }, [isOpen, patientId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData((prevData: any) => ({
      ...prevData,
      personalInformation: {
        ...prevData.personalInformation,
        [name]: value,
      },
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setEditedData((prevData: any) => ({
      ...prevData,
      estate: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(`${import.meta.env.VITE_API_PATIENT}/${patientId}`, editedData);
      setPatientData(editedData); // Update the displayed data with the edited data
      setIsEditing(false); // Exit editing mode
    } catch (error) {
      console.error('Error updating patient details:', error);
    }
  };

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
              <td className="border p-2">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editedData.personalInformation.name}
                    onChange={handleInputChange}
                    className="w-full p-1 border rounded"
                  />
                ) : (
                  patientData.personalInformation.name
                )}
              </td>
              <td className="border p-2 font-medium">Apellidos:</td>
              <td className="border p-2">
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={editedData.personalInformation.lastName}
                    onChange={handleInputChange}
                    className="w-full p-1 border rounded"
                  />
                ) : (
                  patientData.personalInformation.lastName
                )}
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Celular:</td>
              <td className="border p-2">
                {isEditing ? (
                  <input
                    type="text"
                    name="firtsNumberPhone"
                    value={editedData.personalInformation.firtsNumberPhone}
                    onChange={handleInputChange}
                    className="w-full p-1 border rounded"
                  />
                ) : (
                  patientData.personalInformation.firtsNumberPhone
                )}
              </td>
              <td className="border p-2 font-medium">Direccion:</td>
              <td className="border p-2">
                {isEditing ? (
                  <input
                    type="text"
                    name="reference"
                    value={editedData.location.reference}
                    onChange={handleInputChange}
                    className="w-full p-1 border rounded "
                  />
                ) : (
                  patientData.location.reference
                )}
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-medium">Estado:</td>
              <td className="border p-2 font-bold">
                {isEditing ? (
                  <select
                    name="estate"
                    value={editedData.estate}
                    onChange={handleSelectChange}
                    className="w-full p-1 border rounded bg-blue-900 text-white"
                  >
                    <option value="PENDIENTE">PENDIENTE</option>
                    <option value="ATENDIDO">ATENDIDO</option>
                    <option value="CONSULTA">CONSULTA</option>
                  </select>
                ) : (
                  patientData.estate
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          {isEditing ? (
            <>
              <button className="bg-green-500 text-white py-2 px-4 rounded mr-2" onClick={handleSave}>
                Guardar
              </button>
              <button className="bg-gray-500 text-white py-2 px-4 rounded" onClick={() => setIsEditing(false)}>
                Cancelar
              </button>
            </>
          ) : (
            <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => setIsEditing(true)}>
              Editar
            </button>
          )}
        </div>
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;