import React, { useState } from "react";
import Card from './Card';

function Cards() {
    const [currentPage, setCurrentPage] = useState(1); // Página actual
    const cardsPerPage = 8; // Número de cards por página
    const totalCards = 20; // Número total de cards (para ejemplo)

    // Calcula el índice inicial y final de los cards que se mostrarán en la página actual
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = Array.from({ length: totalCards }).slice(indexOfFirstCard, indexOfLastCard);

    // Calcula el número total de páginas
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    // Cambia a la página siguiente
    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    // Cambia a la página anterior
    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <div className="container mx-auto px-4 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {currentCards.map((_, index) => (
                    <div key={index}>
                        <Card />
                    </div>
                ))}
            </div>
            {totalCards > cardsPerPage && (
                <div className="flex justify-center mt-4 mb-4">
                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex -space-x-px text-sm">
                            <li>
                                <button onClick={prevPage} disabled={currentPage === 1} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Previous</span>
                                    <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <button  className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === 1 ? 'text-blue-600 bg-blue-50 border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : ''}`}>
                                    {currentPage }
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Next</span>
                                    <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    )
}

export default Cards;
