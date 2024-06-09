import React from 'react';

interface NumberPagesProps {
  rowsPerPage: number;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const NumberPages: React.FC<NumberPagesProps> = ({ rowsPerPage, onRowsPerPageChange }) => {
  return (
    <div>
      <p>Filas por página:</p>
      <select value={rowsPerPage} onChange={onRowsPerPageChange}>
        <option value={5}>5 filas</option>
        <option value={10}>10 filas</option>
        <option value={15}>15 filas</option>
        <option value={20}>20 filas</option>
      </select>
    </div>
  );
};

export default NumberPages;
