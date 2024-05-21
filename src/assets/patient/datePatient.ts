// Define el tipo para cada objeto de paciente
type PatientDate = {
    dni: string;
    name: string; // Supongo que esto es la fecha de la cita, puede cambiarse a un nombre adecuado como 'appointmentDate'
    edad: string;
    celular: string;
    especialidades: string[];
    examClin: boolean;
    estate: string;
};

// Definir el array de objetos con el tipo correcto
export const patientDates: PatientDate[] = [
    {
        dni: "70012566",
        name: "12/15/2025",
        edad: "50 años",
        celular: "933579872",
        especialidades: ["Odontología", "Medicina Interna"],
        examClin: true,
        estate: "atendido",
    },
    {
        dni: "70012566",
        name: "12/15/2025",
        edad: "50 años",
        celular: "933579872",
        especialidades: ["Odontología", "Medicina Interna"],
        examClin: true,
        estate: "atendido",
    },
    {
        dni: "70012566",
        name: "12/15/2025",
        edad: "50 años",
        celular: "933579872",
        especialidades: ["Odontología", "Medicina Interna"],
        examClin: true,
        estate: "atendido",
    },
    {
        dni: "70012566",
        name: "12/15/2025",
        edad: "50 años",
        celular: "933579872",
        especialidades: ["Odontología", "Medicina Interna"],
        examClin: true,
        estate: "atendido",
    },
];

export default patientDates;
