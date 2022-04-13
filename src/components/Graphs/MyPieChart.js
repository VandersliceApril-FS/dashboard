import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 }
  ];

  function MyPieChart() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={250} height={250}>
          <Pie dataKey="value" data={data02} innerRadius={30} outerRadius={60} fill="#8884d8" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  export default MyPieChart