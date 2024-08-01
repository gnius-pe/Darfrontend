import PacienteView from '../sections/paciente/PacienteView'

export default function Paciente() {
  return (
    <div className="min-h-screen bg-custom-fondodash flex justify-center ">
      <div className="container  max-w-[960px] overflow-x-auto sm: overflow-auto ">
        <PacienteView/>
      </div>
    </div>
  );
}
