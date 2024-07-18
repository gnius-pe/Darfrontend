import React, { useState, useEffect, ChangeEvent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import axios from 'axios';

type DataOption = {
  name: string;
  value: number;
};

type ApiData = {
  id: number;
  consulta: number;
  atendidos: number;
  Pendientes: number;
  disponibles: number;
  Especialidad: string;
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const StatsEspec: React.FC = () => {
  const [data, setData] = useState<ApiData[]>([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
  const [filteredData, setFilteredData] = useState<DataOption[]>([]);

  useEffect(() => {
    // Fetch data from the API using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('https://retoolapi.dev/QllS8j/data');
        const result: ApiData[] = response.data;
        setData(result);
        if (result.length > 0) {
          setSelectedSpecialty(result[0].Especialidad);
          setFilteredData([
            { name: 'Pendientes', value: result[0].Pendientes },
            { name: 'En consulta', value: result[0].consulta },
            { name: 'Atendidos', value: result[0].atendidos },
            { name: 'Disponible', value: result[0].disponibles }
          ]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter data based on the selected specialty
    const specialtyData = data.find(item => item.Especialidad === selectedSpecialty);
    if (specialtyData) {
      setFilteredData([
        { name: 'Pendientes', value: specialtyData.Pendientes },
        { name: 'En consulta', value: specialtyData.consulta },
        { name: 'Atendidos', value: specialtyData.atendidos },
        { name: 'Disponible', value: specialtyData.disponibles }
      ]);
    }
  }, [selectedSpecialty, data]);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSpecialty(event.target.value);
  };

  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start w-auto">
      <div className="relative w-[200px]  z-10">
        <h2 className='font-bold text-lg'>Cupos por Especialidad</h2>
        <ResponsiveContainer height={200}>
          <PieChart>
            <Pie
              data={filteredData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {filteredData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col gap-2 items-center w-auto">
        <select 
          onChange={handleSelectChange} 
          className="mt-2 w-32 px-3 py-1 self-end rounded-full border border-gray-500 focus:outline-none"
          value={selectedSpecialty}
        >
          {data.map((item, index) => (
            <option key={index} value={item.Especialidad}>{item.Especialidad}</option>
          ))}
        </select>
        <div className="flex flex-col justify-center h-full gap-3">
          <div className="flex gap-2">
            <div className="text-center flex items-center gap-1">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
              <div>
                <p>Pendientes</p>
                <h3>{filteredData.find(data => data.name === 'Pendientes')?.value || 0}</h3>
              </div>
            </div>
            <div className="text-center flex items-center gap-1">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
              <div>
                <p>En consulta</p>
                <h3>{filteredData.find(data => data.name === 'En consulta')?.value || 0}</h3>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="text-center flex items-center gap-1">
              <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
              <div>
                <p>Atendidos</p>
                <h3>{filteredData.find(data => data.name === 'Atendidos')?.value || 0}</h3>
              </div>
            </div>
            <div className="text-center flex items-center gap-1">
              <span className="inline-block w-3 h-3 bg-orange-500 rounded-full"></span>
              <div>
                <p>Disponible</p>
                <h3>{filteredData.find(data => data.name === 'Disponible')?.value || 0}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsEspec;