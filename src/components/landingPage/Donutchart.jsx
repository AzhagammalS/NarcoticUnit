import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { PieChart } from '@mui/x-charts/PieChart';
import { FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';

// ✅ Glass style
const glassStyle = {
  background: '#ffffff82',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  // padding: '10px',
  color: '#000',
};
const drugSeizurePeriodData = {
  year: [
    { label: 'Heroin', value: 45 },
    { label: 'Cannabis', value: 30 },
    { label: 'Cocaine', value: 10 },
    { label: 'Mava', value: 10 },
    { label: 'Other', value: 5 },
  ],
  month: [
    { label: 'Heroin', value: 15 },
    { label: 'Cannabis', value: 10 },
    { label: 'Cocaine', value: 5 },
    { label: 'Mava', value: 5 },
    { label: 'Other', value: 2 },
  ],
  week: [
    { label: 'Heroin', value: 5 },
    { label: 'Cannabis', value: 3 },
    { label: 'Cocaine', value: 1 },
    { label: 'Mava', value: 1 },
    { label: 'Other', value: 1 },
  ],
};


const countryOfOriginData = [
  { label: 'India', value: 40 },
  { label: 'Pakistan', value: 25 },
  { label: 'Afghanistan', value: 20 },
  { label: 'Myanmar', value: 10 },
  { label: 'Other', value: 5 },
];

const provinceArrestData = {
  year: [
    { label: 'Western', value: 50 },
    { label: 'Central', value: 30 },
    { label: 'Southern', value: 20 },
    { label: 'Northern', value: 10 },
    { label: 'Eastern', value: 15 },
    // { label: 'North Western', value: 25 },
    // { label: 'North Central', value: 12 },
    { label: 'Uva', value: 8 },
    // { label: 'Sabaragamuwa', value: 18 },
  ],
  month: [
    // { label: 'Western', value: 15 },
    // { label: 'Central', value: 10 },
    { label: 'Southern', value: 8 },
    { label: 'Northern', value: 5 },
    { label: 'Eastern', value: 7 },
    { label: 'North Western', value: 9 },
    { label: 'North Central', value: 6 },
    { label: 'Uva', value: 4 },
    { label: 'Sabaragamuwa', value: 5 },
  ],
  week: [
    { label: 'Western', value: 5 },
    { label: 'Central', value: 3 },
    { label: 'Southern', value: 2 },
    { label: 'Northern', value: 1 },
    { label: 'Eastern', value: 2 },
    { label: 'North Western', value: 2 },
    { label: 'North Central', value: 1 },
    // { label: 'Uva', value: 1 },
    // { label: 'Sabaragamuwa', value: 1 },
  ],
};


const valueFormatter = (item) => `${item.value}%`;

function Donutchart({ title, data }) {
  return (
    <Box sx={{ width: '100%' ,padding:'10px'}}>
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      <PieChart
        height={310}
        width={270}
        series={[
          {
            data,
            innerRadius: 70,
            arcLabel: (params) => params.label ?? '',
            arcLabelMinAngle: 15,
            valueFormatter,
          },
        ]}
      />
    </Box>
  );
}

export default function DonutChartsGrid() {
  const [arrestPeriod, setArrestPeriod] = React.useState('year');
  const [drugPeriod, setDrugPeriod] = React.useState('year');

  const handleDrugPeriodChange = (event) => {
    setDrugPeriod(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setArrestPeriod(event.target.value);
  };

  return (
    <Grid container display="flex" spacing={2} style={{ padding: '30px', marginTop: '20px' }}>
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={12} md={4}>
          <Box sx={glassStyle} style={{ padding: '10px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="h6">Drugs Seized in Last One</Typography>
              <FormControl size="small">
                <InputLabel>Period</InputLabel>
                <Select value={drugPeriod} label="Period" onChange={handleDrugPeriodChange}>
                  <MenuItem value="year">Year</MenuItem>
                  <MenuItem value="month">Month</MenuItem>
                  <MenuItem value="week">Week</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <PieChart
              height={300}
              width={270}
              series={[
                {
                  data: drugSeizurePeriodData[drugPeriod],
                  innerRadius: 70,
                  arcLabel: (params) => params.label ?? '',
                  arcLabelMinAngle: 15,
                  valueFormatter,
                },
              ]}
            />
          </Box>
        </Grid>


        <Grid item xs={12} md={4}>
          <Box sx={glassStyle}>
            <Donutchart title="Country of Origin for Drugs" data={countryOfOriginData} />
          </Box>
        </Grid>

        <Grid item xs={12 } md={4}>
          <Box sx={glassStyle} style={{ padding:'10px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="h6">Arrests Made in Province</Typography>
              <FormControl size="small">
                <InputLabel>Period</InputLabel>
                <Select value={arrestPeriod} label="Period" onChange={handlePeriodChange}>
                  <MenuItem value="year">Year</MenuItem>
                  <MenuItem value="month">Month</MenuItem>
                  <MenuItem value="week">Week</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <PieChart
              height={300}
              width={270}
              series={[
                {
                  data: provinceArrestData[arrestPeriod],
                  innerRadius: 70,
                  arcLabel: (params) => params.label ?? '',
                  arcLabelMinAngle: 15,
                  valueFormatter,
                },
              ]}
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
