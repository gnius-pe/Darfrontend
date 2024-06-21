import React, { useState } from 'react';
import { useAuth } from '../../../../auth/AuthProvider';
import { Navigate } from 'react-router-dom'; // Importa Navigate desde react-router-dom

const DeleteButton: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const auth = useAuth();

  const handleDeleteClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    auth.logout();
    // Utiliza Navigate para redirigir al usuario a la página de inicio
    return <Navigate to="/" replace />;
  };

  return (
    <div className='relative'>
      <button onClick={handleDeleteClick} className="w-6 h-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="size-6">
          <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
        </svg>
      </button>
      {showMenu && (
        <div className="absolute top-full mt-2 -left-10 bg-white border rounded shadow-lg p-4 z-20">
          <div className="flex flex-col space-y-2">
            <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteButton;
