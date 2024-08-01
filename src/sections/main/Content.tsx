import { Link } from "react-router-dom";
import poster from '../../assets/images/posterDAR.jpeg';

export default function Content(){
	return (
		<>
			<div className="w-full flex flex-col items-center bg-sky-100">
				<div className="sticky top-14 w-full py-3 bg-custom-blue flex justify-around">
					<div>
					<h3 className="text-white font-bold text-2xl">¿Te gustaría recibir apoyo médico gratuito y asistencia espiritual?</h3>
					<h4 className="text-orange-300 font-semibold text-3xl font-oswald">¡Registrate ya!!! Tu, tus familiares y amigos</h4>
					</div>
					<Link to="/reserva">
						<button className="mb-4 px-4 py-2 bg-blue-600 rounded-full font-bold text-white text-lg">
							Reserva Ahora
						</button>
					</Link>
				</div>
				<img src={poster} alt="" />
				<div className="w-full flex justify-center py-5 bg-sky-100">
					<Link to="/reserva">
						<button className="mb-4 px-4 py-2 bg-blue-600 rounded-full font-bold text-white text-lg">
							Reserva Ahora
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}