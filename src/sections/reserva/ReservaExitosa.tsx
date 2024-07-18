// ReservaExitosa.tsx
import React from 'react';
import { useAuth } from '../../auth/AuthProvider';
import { Link } from "react-router-dom";

interface ReservaExitosaProps {
	numberFile: string;
}

const ReservaExitosa: React.FC<ReservaExitosaProps> = ({ numberFile }) => {
	const { isAuthenticated } = useAuth();

	const handleDownload = () => {
		const url = `http://209.38.48.146:3010/api/patient/downloader/${numberFile}`;
		window.location.href = url;
	};
	

  return (
		<>
			<div className='h-72 flex flex-col justify-center items-center gap-4'>
				<div className='flex flex-col items-center gap-4'>
					<svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="33.5" cy="33.5" r="32.5" stroke="#66E0C9" strokeWidth="2"/>
						<path d="M26.6236 53.3322L11.6736 38.5142C10.7755 37.6239 10.7755 36.1805 11.6736 35.2902L14.9262 32.0662C15.8244 31.1759 17.2808 31.1759 18.1789 32.0662L28.25 42.0483L49.8211 20.6677C50.7192 19.7774 52.1756 19.7774 53.0738 20.6677L56.3264 23.8917C57.2245 24.7819 57.2245 26.2253 56.3264 27.1157L29.8763 53.3323C28.9781 54.2226 27.5218 54.2226 26.6236 53.3322Z" fill="#66E0C9"/>
					</svg>
					<p className='text-center'> Tu cita a sido reservada con exito con codigo {numberFile}, por favor imprime tu ficha</p>
					<button onClick={handleDownload} className='px-2 py-2 bg-custom-skyblue rounded-md '>descargar ficha</button>
				</div>
				{!isAuthenticated() && (
					<Link to='/'>
          				<button className='bg-blue-900 px-3 py-2 rounded-md text-white'> Regresar al inicio</button>
					</Link>
        )}
				</div>
		</>
  );
};

export default ReservaExitosa;
