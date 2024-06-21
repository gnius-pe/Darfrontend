// Definir un tipo para los objetos del array
export interface Especialidad {
  specialty: string;
  value: string;
}

// Declarar el array con el tipo definido
export const especialidadesNames: Especialidad[] = [
  { specialty: "Cardiología", value: "1" },
  { specialty: "Dermatología", value: "2" },
  { specialty: "Endocrinología", value: "3" },
  { specialty: "Gastroenterología", value: "4" },
  { specialty: "Hematología", value: "5" },
  { specialty: "Neurología", value: "6" },
  { specialty: "Oftalmología", value: "7" },
  { specialty: "Oncología", value: "8" },
  { specialty: "Pediatría", value: "9" },
  { specialty: "Psiquiatría", value: "10" },
  { specialty: "Radiología", value: "11" },
  { specialty: "Urología", value: "12" },
  // Puedes agregar más especialidades si es necesario
];



