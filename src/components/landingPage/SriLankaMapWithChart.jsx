import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import sriLankaGeoJSON from '../../../public/srilanka.geo.json';

export default function SriLankaDrugMap() {
  const [mapReady, setMapReady] = useState(false);

  // Example data matched to `properties.name` in your GeoJSON
  const districtData = [
    { name: 'Mulativ', value: 20 },
    { name: 'Yāpanaya', value: 50 },
    { name: 'Kilinŏchchi', value: 100 },
    { name: 'Gampaha', value: 40 },
    { name: 'Ampāra', value: 60 },
    // Add more matching district names from your GeoJSON
  ];

  useEffect(() => {
    echarts.registerMap('srilanka', sriLankaGeoJSON);
    setMapReady(true);
  }, []);

  const option = {
    title: {
      text: 'Drug Seizures by District (Sri Lanka)',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}'
    },
    visualMap: {
      min: 0,
      max: 100,
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
        map: 'srilanka',
        roam: true,
        emphasis: {
          label: { show: true }
        },
        data: districtData
      }
    ]
  };

  return (
    <div>
      {mapReady ? (
        <ReactECharts option={option} style={{ height: '550px', width: '500px' }} />
      ) : (
        <p>Loading Sri Lanka map...</p>
      )}
    </div>
  );
}
