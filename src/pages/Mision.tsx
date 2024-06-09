import React from 'react';
import Cards from '../sections/misiones/Cards';
import SearchAndNew from '../sections/misiones/SearchAndNew';
import PaginationYear from '../sections/misiones/paginationYear';

export default function Mision() {
    return (
        <>
        <div className="container mx-auto ">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold">Nuestras misiones</h1>
            </div>
            <div>
                <PaginationYear/>
            </div>
            
            <div className="flex justify-end mb-10 lg:px-16">
                <SearchAndNew />
            </div>
            <div>
             <Cards/>
            </div>
        </div>
        </>
    )
}
