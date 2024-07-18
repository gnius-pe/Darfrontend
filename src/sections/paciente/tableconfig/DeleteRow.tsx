import React, { useState } from 'react';
import axios from 'axios';

interface DeleteButtonProps {
  patientId: string;
  onDelete: () => void; // Callback to trigger refresh after deletion
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ patientId, onDelete }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleDeleteClick = () => {
    setShowMenu(!showMenu);
  };

  const handleCancelClick = () => {
    setShowMenu(false);
  };

  const handleAcceptClick = async () => {
    try {
      await axios.delete(`https://goldfish-app-sryot.ondigitalocean.app/api/patient/${patientId}`);
      alert('Paciente eliminado');
      setShowMenu(false);
      onDelete(); // Trigger refresh after successful deletion
    } catch (error) {
      console.error("Error eliminando al paciente:", error);
      alert('Hubo un error al eliminar al paciente.');
    }
  };

  return (
    <div className='relative'>
      <button onClick={handleDeleteClick} className="w-6 h-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#442670" className="w-6 h-6">
          <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
        </svg>
      </button>
      {showMenu && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border rounded shadow-lg p-4 z-20" style={{ minWidth: '200px', maxWidth: '300px' }}>
          <p className="mb-4 text-gray-700">¿Desea eliminar al paciente?</p>
          <div className="flex justify-end space-x-2">
            <button onClick={handleCancelClick} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Cancelar
            </button>
            <button onClick={handleAcceptClick} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteButton;
