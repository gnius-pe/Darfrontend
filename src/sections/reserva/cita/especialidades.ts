import axios from 'axios';
import config from '../../../config';

// Definir un tipo para los objetos del array
export interface Especialidad {
  label: string;
  value: string;
}

// Función para obtener las especialidades desde la API
export const fetchEspecialidades = async (): Promise<Especialidad[]> => {
  try {
    const response = await axios.get(`${config.apiUrl}/specialty-available`); 
    return response.data.map((especialidad: any) => ({
      label: especialidad.specialtyName,
      value: especialidad._id,
    }));
  } catch (error) {
    console.error('Error fetching specialties:', error);
    return [];
  }
};



