import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import GavelIcon from '@mui/icons-material/Gavel';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const cards = [
  {
    id: 1,
    title: 'Seizures',
    description: 'Major heroin and cannabis seizures at Colombo port.',
    icon: <LocalPoliceIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    id: 2,
    title: 'Arrests',
    description: 'Over 500 arrests linked to drug trafficking in 2024.',
    icon: <GavelIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    id: 3,
    title: 'Smuggling Routes',
    description: 'Key smuggling routes via sea and air intercepted.',
    icon: <LocalShippingIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    id: 4,
    title: 'Profiling',
    description: 'Intelligence-Based Profiling of Drug Networks and Peddlers',
    icon: <PersonSearchIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
];

function LandingPgCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 2,
        margin: '0 auto',
      }}
    >
      {cards.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              padding: 2,
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%', textAlign: 'center' }}>
              {card.icon}
              <Typography variant="h6" component="div" sx={{ mt: 1 }}>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default LandingPgCard;
