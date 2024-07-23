// RecentPatients.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { PacienteCard } from './PacientInfo';

const RecentPatients = () => {
  const [recentPatients, setRecentPatients] = useState<any[]>([]);

  useEffect(() => {
    fetchRecentPatients();
  }, []);

  const fetchRecentPatients = async () => {
    try {
      const baseUrl = import.meta.env.VITE_API_PATIENTS_BASE_ROW;
      const url = `${baseUrl}?sort=-registrationDate&page=1&limit=5`;
      const response = await axios.get(url);
      const data = response.data.items.docs;
      setRecentPatients(data);
    } catch (error) {
      console.error("Error al obtener los pacientes recientes:", error);
    }
  };

  return (
    <div className="flex flex-col shadow-md">
      {recentPatients.map((patient) => (
        <PacienteCard 
          key={patient._id} 
          name={patient.personalInformation.name} 
          lastName={patient.personalInformation.lastName} 
        />
      ))}
    </div>
  );
};

export default RecentPatients;
