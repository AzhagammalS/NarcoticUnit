import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { LinearProgress, linearProgressClasses, styled } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#fcff38',
  },
}));

const cardData = [
  { title: 'Active Mafias', subtitle: 'Organized Groups', description: '45' },
  { title: 'Pending Cases', subtitle: 'Legal Matters', description: '30' },
  { title: 'Surveillance', subtitle: 'Monitoring', description: '50' },
  { title: 'Patrol Schedule', subtitle: 'Shifts & Routes', description: '20' },
  { title: 'Emergency', subtitle: 'Rapid Response', description: '65' },
  { title: 'Suspect Watch', subtitle: 'High-Risk Targets', description: '85' },
];

const cardBackgrounds = [
  'linear-gradient(45deg, #000c0a, #01332c, #035e51, #059883, #0fdec2)',
  'linear-gradient(45deg, #210105, #43020a, #900615, #cb0720, #f30522)',
  'linear-gradient(45deg, #0f0006, #4b0320, #7c0737, #d51362, #f70567)',
  'linear-gradient(45deg, #07000a, #2f0346, #5a0b83, #6d099f, #a505f7)',
  'linear-gradient(45deg, #0f0a00, #3c2a02, #745107, #c88b09, #f7aa05)',
  'linear-gradient(45deg, #01190d, #033f21, #06783d, #04c664, #05f87d)',
];

export default function Cards() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'center',
      }}
    >
      {cardData.map((card, index) => (
        <Box
          key={index}
          sx={{
            width: { xs: '100%', sm: '48%', md: '30%' },
            p: 1,
          }}
        >
          <Card
            variant="outlined"
            sx={{
              background: cardBackgrounds[index],
              color: '#fff',
              borderRadius: '25px',
              height: 160,
            }}
          >
            <CardContent>
              <Typography variant="h5">{card.title}</Typography>
              <Typography sx={{ mb: 1.5 }}>{card.subtitle}</Typography>
              <Box sx={{ mt: 1 }}>
                <Typography variant="h6" align="right">
                  {card.description}
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={parseInt(card.description)}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
