import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  yAxis: [
    {
      label: 'Quantity (kg)',
      width: 80,
      tickLabelStyle: { fill: '#000' },
      labelStyle: { fill: '#000' },
    },
  ],
  xAxis: [
    {
      dataKey: 'province',
      tickLabelStyle: { fill: '#000' },
    },
  ],
  height: 400,
};

const valueFormatter = (value) => `${value} kg`;

const dataset = [
  {
    province: 'Western', heroin: 120, cocaine: 80, cannabis: 200, meth: 60, ecstasy: 25, lsd: 10, opium: 35
  },
  {
    province: 'Central', heroin: 90, cocaine: 50, cannabis: 180, meth: 45, ecstasy: 20, lsd: 8, opium: 30
  },
  {
    province: 'Southern', heroin: 70, cocaine: 30, cannabis: 160, meth: 40, ecstasy: 15, lsd: 6, opium: 28
  },
  {
    province: 'Northern', heroin: 60, cocaine: 20, cannabis: 150, meth: 35, ecstasy: 12, lsd: 5, opium: 25
  },
  {
    province: 'Eastern', heroin: 80, cocaine: 25, cannabis: 170, meth: 50, ecstasy: 18, lsd: 7, opium: 32
  },
  {
    province: 'North Western', heroin: 75, cocaine: 28, cannabis: 165, meth: 42, ecstasy: 16, lsd: 6, opium: 29
  },
  {
    province: 'North Central', heroin: 65, cocaine: 22, cannabis: 155, meth: 38, ecstasy: 14, lsd: 5, opium: 27
  },
  {
    province: 'Uva', heroin: 55, cocaine: 18, cannabis: 145, meth: 30, ecstasy: 10, lsd: 4, opium: 22
  },
  {
    province: 'Sabaragamuwa', heroin: 68, cocaine: 24, cannabis: 158, meth: 36, ecstasy: 13, lsd: 5, opium: 26
  },
];

export default function Barcharts() {
  return (
    <BarChart
      dataset={dataset}
      series={[
        { dataKey: 'heroin', label: 'Heroin', valueFormatter, color: '#d32f2f' },
        { dataKey: 'cocaine', label: 'Cocaine', valueFormatter, color: '#1976d2' },
        { dataKey: 'cannabis', label: 'Cannabis', valueFormatter, color: '#388e3c' },
        { dataKey: 'meth', label: 'Methamphetamine', valueFormatter, color: '#fbc02d' },
        { dataKey: 'ecstasy', label: 'Ecstasy', valueFormatter, color: '#7b1fa2' },
        { dataKey: 'lsd', label: 'LSD', valueFormatter, color: '#0097a7' },
        { dataKey: 'opium', label: 'Opium', valueFormatter, color: '#5d4037' },
      ]}
      {...chartSetting}
    />
  );
}
