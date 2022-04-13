import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Year 1',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Year 2',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Year 3',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Year 4',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Year 5',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Year 6',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    }
  ];

  function MyLineChart() {
      return (
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        
      </ResponsiveContainer>
      );
  }

  export default MyLineChart;