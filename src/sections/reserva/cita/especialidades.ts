// Definir un tipo para los objetos del array
export interface Especialidad {
  label: string;
  value: string;
}

// Declarar el array con el tipo definido
export const especialidadesNames: Especialidad[] = [
  { label: "Cardiología", value: "Cardiología" },
  { label: "Dermatología", value: "Dermatología" },
  { label: "Endocrinología", value: "Endocrinología" },
  { label: "Gastroenterología", value: "Gastroenterología" },
  { label: "Hematología", value: "Hematología" },
  { label: "Neurología", value: "Neurología" },
  { label: "Oftalmología", value: "Oftalmología" },
  { label: "Oncología", value: "Oncología" },
  { label: "Pediatría", value: "Pediatría" },
  { label: "Psiquiatría", value: "Psiquiatría" },
  { label: "Radiología", value: "Radiología" },
  { label: "Urología", value: "Urología" },
  // Puedes agregar más especialidades si es necesario
];



