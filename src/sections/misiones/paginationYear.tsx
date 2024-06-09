import React, { useState } from 'react';


function PaginationYear (){
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const handleYearChange = (year:number) => {
        setSelectedYear(year);
        // Aquí puedes cargar las misiones correspondientes al año seleccionado
    };

    return (
        <>
            <div className="flex justify-center mt-2">
                        {[currentYear, currentYear - 1, currentYear - 2].map((year) => (
                            <button
                                key={year}
                                className={`mx-2 py-1 px-3 rounded ${
                                    selectedYear === year ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                                onClick={() => handleYearChange(year)}
                            >
                                {year}
                            </button>
                        ))}
            </div>
        </>
    )

}
export default PaginationYear;