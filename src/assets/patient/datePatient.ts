// Define el tipo para cada objeto de paciente
type PatientDate = {
    dni: string;
    name: string;
    celular: string; // Supongo que esto es la fecha de la cita, puede cambiarse a un nombre adecuado como 'appointmentDate'
    edad: string;
    especialidades: string[];
    examClin: boolean;
    estate: string;
};

// Definir el array de objetos con el tipo correcto
export const patientDates: PatientDate[] = [
    {
        dni: "70012566",
        name: "Mariano ",
        celular: "933579872",
        edad: "50 años",
        especialidades: ["Odontología", "Medicina Interna"],
        examClin: true,
        estate: "en consulta",
    },
    {
        dni: "70012566",
        name: "Mariano ",
        celular: "933579872",
        edad: "50 años",
        especialidades: ["Odontología", "Medicina Interna"],
        examClin: true,
        estate: "en consulta",
    },
];

export default patientDates;
