
import PacienteView from '../sections/paciente/PacienteView'

export default function Paciente() {
  return (
  
      <div className="w-screen h-screen bg-slate-300">
        <div className="sm:flex sm:justify-center sm:items-center h-auto">
          <div className="container grid-cols-1 mx-16 px-4 grid gap-1 max-w-[1200px] overflow-x-auto ">
            <PacienteView/>
          </div>
        </div>
      </div>
  );
}

