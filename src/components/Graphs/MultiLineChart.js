import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const series = [
    {
      name: 'Series 1',
      data: [
        { category: 'A', value: Math.random() },
        { category: 'B', value: Math.random() },
        { category: 'C', value: Math.random() },
      ],
    },
    {
      name: 'Series 2',
      data: [
        { category: 'B', value: Math.random() },
        { category: 'C', value: Math.random() },
        { category: 'D', value: Math.random() },
      ],
    },
    {
      name: 'Series 3',
      data: [
        { category: 'C', value: Math.random() },
        { category: 'D', value: Math.random() },
        { category: 'E', value: Math.random() },
      ],
    },
  ];

  function MultiLineChart() {
      return (
        <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          width={500} height={300}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          >
          <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
          <YAxis dataKey="value" />
          <Tooltip />
          {series.map((s) => (
            <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
          ))}
        </LineChart>
      </ResponsiveContainer>
      );
  }

  export default MultiLineChart