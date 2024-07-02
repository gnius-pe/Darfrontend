// Definir un tipo para los objetos del array
export interface Especialidad {
  label: string;
  value: string;
}

// Declarar el array con el tipo definido
export const especialidadesNames: Especialidad[] = [
  { label: "Cardiología", value: "1" },
  { label: "Dermatología", value: "2" },
  { label: "Endocrinología", value: "3" },
  { label: "Gastroenterología", value: "4" },
  { label: "Hematología", value: "5" },
  { label: "Neurología", value: "6" },
  { label: "Oftalmología", value: "7" },
  { label: "Oncología", value: "8" },
  { label: "Pediatría", value: "9" },
  { label: "Psiquiatría", value: "10" },
  { label: "Radiología", value: "11" },
  { label: "Urología", value: "12" },
  // Puedes agregar más especialidades si es necesario
];



