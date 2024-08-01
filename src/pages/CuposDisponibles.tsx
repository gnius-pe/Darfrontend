import CuposDisponibles from "../sections/cuposDispo/CuposDisponView";

export default function Cupos() {
  return (
    <div className="min-h-screen bg-custom-fondodash flex justify-center ">
      <div className="container  max-w-[960px] overflow-x-auto sm: overflow-auto ">
        <CuposDisponibles/>
      </div>
    </div>
  );
}
