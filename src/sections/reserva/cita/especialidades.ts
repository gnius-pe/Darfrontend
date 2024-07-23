import axios from 'axios';

// Definir un tipo para los objetos del array
export interface Especialidad {
  label: string;
  value: string;
}

// Función para obtener las especialidades desde la API
export const fetchEspecialidades = async (): Promise<Especialidad[]> => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_ESPECIALTY); // Reemplaza 'URL_DE_TU_API' con la URL real de tu API
    return response.data.map((especialidad: any) => ({
      label: especialidad.specialtyName,
      value: especialidad._id,
    }));
  } catch (error) {
    console.error('Error fetching specialties:', error);
    return [];
  }
};



