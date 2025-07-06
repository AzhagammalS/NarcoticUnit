import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function SeizedLineChart() {
  const [mapReady, setMapReady] = useState(false);

  const worldDrugData = [
    { name: 'India', value: 120 },
    { name: 'Pakistan', value: 80 },
    { name: 'Afghanistan', value: 60 },
    { name: 'Myanmar', value: 50 },
    { name: 'Colombia', value: 70 },
    { name: 'Mexico', value: 65 },
    { name: 'USA', value: 40 },
    { name: 'Netherlands', value: 30 },
    { name: 'Nigeria', value: 25 }
  ];

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}world.geo.json`)
      .then(res => res.json())
      .then(geoJson => {
        echarts.registerMap('world', geoJson);
        setMapReady(true);
      })
      .catch(err => {
        console.error('Failed to load map:', err);
      });
  }, []);

  const option = {
    title: {
      text: 'Drug Seizure Data by Country',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}'
    },
    visualMap: {
      min: 0,
      max: 150,
      left: 'left',
      top: 'bottom',
      text: ['High', 'Low'],
      calculable: true,
      inRange: {
        color: ['#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695']
      }
    },
    series: [
      {
        name: 'Drug Seizures',
        type: 'map',
        map: 'world',
        roam: true,
        emphasis: {
          label: { show: true }
        },
        data: worldDrugData
      }
    ]
  };

  return (
    <div>
      {mapReady ? (
        <ReactECharts option={option} style={{ height: '550px', width: '900px' }} />
      ) : (
        <p>Loading world map...</p>
      )}
    </div>
  );
}
