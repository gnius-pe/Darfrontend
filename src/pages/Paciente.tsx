
import PacienteView from '../sections/paciente/PacienteView'

export default function Paciente() {
  return (
    <div className="min-h-screen bg-slate-300 flex justify-center ">
      <div className="container mx-16 px-4 max-w-[1200px] overflow-x-auto">
        <PacienteView/>
      </div>
    </div>
  );
  
}

