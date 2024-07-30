import ConfigCupos from "../sections/cuposConfig/ConfigCupos";

export default function ConfiguracionCupos() {
  return (
    <div className="min-h-screen bg-custom-fondodash flex justify-center ">
      <div className="container  max-w-[960px] overflow-x-auto sm: overflow-auto ">
        <ConfigCupos/>
      </div>
    </div>
  );
}