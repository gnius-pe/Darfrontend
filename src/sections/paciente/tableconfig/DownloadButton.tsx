import React, { useState } from 'react';

interface DownloadButtonProps {
  patientId: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ patientId }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleDownloadClick = () => {
    setShowMenu(!showMenu);
  };

  const handleCancelClick = () => {
    setShowMenu(false);
  };

  const handleAcceptClick = async () => {
    const url = `${import.meta.env.VITE_API_DOWNLOAD_PDF}/${patientId}`;
    window.location.href = url;
  };

  return (
    <div className='relative'>
      <button onClick={handleDownloadClick} name='download' className="w-6 h-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#442670" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg>
      </button>
      {showMenu && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border rounded shadow-lg p-4 z-20" style={{ minWidth: '200px', maxWidth: '300px' }}>
          <p className="mb-4 text-gray-700">¿Desea descargar la ficha del paciente?</p>
          <div className="flex justify-end space-x-2">
            <button onClick={handleCancelClick} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Cancelar
            </button>
            <button onClick={handleAcceptClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;
