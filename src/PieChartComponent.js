// src/PieChartComponent.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from '@mui/x-charts/PieChart';

const data = [
  { id: 1, value: 400, label: 'Group A' },
  { id: 2, value: 300, label: 'Group B' },
  { id: 3, value: 300, label: 'Group C' },
  { id: 4, value: 200, label: 'Group D' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = () => {
  return (
    <PieChart
      width={400}
      height={400}
    >
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={({ name }) => name}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default PieChartComponent;
