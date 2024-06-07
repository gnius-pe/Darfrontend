import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function SearchAndNew() {
    const [searchTerm, setSearchTerm] = useState(''); 
    const navigate = useNavigate(); 

    const handleSearch = () => {
        console.log('Búsqueda realizada:', searchTerm);
    };

    const handleNewMission = () => {
        navigate('/dashboard/nuevaMision');
    };

    return (
        <div className="flex items-center">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-2 py-1 border border-gray-400 rounded"
                placeholder="Buscar..."
            />
            <button
                onClick={handleSearch}
                className="flex items-center px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                Buscar
            </button>
            <button
                onClick={handleNewMission}
                className="ml-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
                Crear Nueva Misión
            </button>
        </div>
    );
}

export default SearchAndNew;
