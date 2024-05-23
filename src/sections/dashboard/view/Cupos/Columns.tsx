import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Espe A",
    disponibles: 1000,
    cubiertos: 500,
  },
  {
    name: "Espe B",
    disponibles: 3000,
    cubiertos: 1398,
    amt: 2210
  },
  {
    name: "Espe C",
    disponibles: 2000,
    cubiertos: 9800,
    amt: 2290
  },
  {
    name: "Espe D",
    disponibles: 2780,
    cubiertos: 3908,
    amt: 2000
  },
  {
    name: "Espe E",
    disponibles: 1890,
    cdisponible: 4800,
    amt: 2181
  },
  {
    name: "Espe F",
    disponibles: 2390,
    cubiertos: 3800,
    amt: 2500
  },
  {
    name: "Espe G",
    disponibles: 3490,
    cubiertos: 4300,
    amt: 2100
  }
];

export const Columns: React.FC = () => {
  return(
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey=   "cubiertos" stackId="a" fill="#8884d8" />
      <Bar dataKey="disponibles" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
};
