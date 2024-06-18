import { Link } from "react-router-dom";
export default function Content(){
	return (
		<>
			<div>
				<Link to="/reserva">
					<button>
						Reserva Ahora
					</button>
				</Link>
			</div>
		</>
	);
}