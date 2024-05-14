import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function SearchAndNew() {
    const [searchTerm, setSearchTerm] = useState(''); 
    const navigate = useNavigate(); 

    const handleSearch = () => {
        console.log('Búsqueda realizada:', searchTerm);
    };

    const handleNewMission = () => {

        navigate('/nuevaMision');
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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M14.91 13.605a7.499 7.499 0 111.414-1.414l4.243 4.243a1 1 0 01-1.414 1.414l-4.243-4.243zm-.793-5.223a5.5 5.5 0 11-1.414 1.414l-4.243-4.243a1 1 0 10-1.414 1.414l4.243 4.243z"
                        clipRule="evenodd"
                    />
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
