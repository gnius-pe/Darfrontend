import React, { useState } from 'react';
import { useAuth } from '../../../../auth/AuthProvider';
import { Navigate } from 'react-router-dom'; // Importa Navigate desde react-router-dom
import user_profile from '../../../../assets/images/user/user_profile.svg';

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

  const userInfo = JSON.parse(sessionStorage.getItem("userInfo") || "{}");

  return (
    <div className='relative'>
      <button onClick={handleDeleteClick} className="w-6 h-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="size-6">
          <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
        </svg>
      </button>
      {showMenu && (
        <div className="w-[17rem] absolute top-full mt-2 -left-56 bg-custom-skyblue border rounded-2xl shadow-lg p-4 z-20">
          <div className="flex flex-col space-y-2 text-custom-blue">
            <div className='flex gap-2 items-center'> 
              <img className='border border-solid border-custom-blue rounded-full h-10' src={user_profile} alt="user" />
              <div>
                <h2 className='uppercase font-bold'>{userInfo.username}</h2>
                <h4 className='mb-1 font-semibold'>{userInfo.email}</h4>
                <a className='text-purple-950 font-semibold' href="#">editar perfil</a>
              </div>
            </div>
            <hr className="border-t border-custom-blue my-4" />
            <button className="flex font-semibold gap-2 px-4 py-1 rounded hover:bg-custom-blue hover:text-white group">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-800 group-hover:text-white transition-colors">
                <path d="M17.9639 16.1016C17.7383 16.3604 17.4863 16.5947 17.1875 16.7681V17.8882C20.4355 18.3442 22.6562 19.2578 22.6562 20.3125C22.6562 21.8228 18.1094 23.0469 12.5 23.0469C6.89062 23.0469 2.34375 21.8228 2.34375 20.3125C2.34375 19.2578 4.56445 18.3447 7.8125 17.8882V16.7681C7.51367 16.5947 7.26172 16.3604 7.03613 16.1016C2.87451 16.8623 0 18.4595 0 20.3125C0 22.9014 5.59668 25 12.5 25C19.4033 25 25 22.9014 25 20.3125C25 18.4595 22.1255 16.8623 17.9639 16.1016ZM12.5 6.25C14.2261 6.25 15.625 4.85107 15.625 3.125C15.625 1.39893 14.2261 0 12.5 0C10.7739 0 9.375 1.39893 9.375 3.125C9.375 4.85107 10.7739 6.25 12.5 6.25ZM9.375 15.625V20.3125C9.375 21.1753 10.0747 21.875 10.9375 21.875H14.0625C14.9253 21.875 15.625 21.1753 15.625 20.3125V15.625C16.4878 15.625 17.1875 14.9253 17.1875 14.0625V9.375C17.1875 8.08057 16.1382 7.03125 14.8438 7.03125H14.2676C13.7271 7.27686 13.1318 7.42188 12.5 7.42188C11.8682 7.42188 11.2729 7.27686 10.7324 7.03125H10.1562C8.86182 7.03125 7.8125 8.08057 7.8125 9.375V14.0625C7.8125 14.9253 8.51221 15.625 9.375 15.625Z" />
              </svg>
              Ver Perfil
            </button>
            <button onClick={handleLogout} className="flex font-semibold gap-2 px-4 py-1 rounded hover:bg-custom-blue hover:text-white group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 group-hover:text-white transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
              </svg>
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteButton;
