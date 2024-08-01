import React from 'react';
import axios from 'axios';

const DownloadList: React.FC = () => {
    const handleDownload = async () => {
        try {
          const baseUrl = import.meta.env.VITE_API_LIST_DOWNLOAD as string;
          if (!baseUrl) {
            console.error('VITE_API_LIST_DOWNLOAD is not defined');
            return;
          }
    
          const response = await axios.get(baseUrl, {
            responseType: 'blob',
          });
    
          const urlBlob = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = urlBlob;
          link.setAttribute('download', 'pacientes.csv'); // Nombre del archivo a descargar
          document.body.appendChild(link);
          link.click();
          link.remove();
        } catch (error) {
          console.error('Error downloading the file:', error);
        }
      };
  return (
    <button onClick={handleDownload} >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#442670" className="w-6 h-6">
        <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
      </svg>
    </button>
  );
};

export default DownloadList;
