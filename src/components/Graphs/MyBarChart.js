import React from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'A',
      uv: 40,
      pv: 24,
      amt: 24,
    },
    {
      name: 'B',
      uv: 30,
      pv: 13,
      amt: 22,
    },
    {
      name: 'C',
      uv: 20,
      pv: 98,
      amt: 22,
    },
    {
      name: 'D',
      uv: 27,
      pv: 39,
      amt: 20,
    }
  ];

  function MyBarChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={175} height={40} data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
            </BarChart>
        </ResponsiveContainer>
    );
  }

  export default MyBarChart