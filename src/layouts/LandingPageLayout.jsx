import React from 'react';
import LandingNavBar from '../components/landingPage/LandingNavBar';
import Barcharts from '../components/landingPage/Barcharts';
import Donutchart from '../components/landingPage/Donutchart';
import { Box, Card, Grid, Typography } from '@mui/material';
import DrugVideo from '../assets/videos/drug.mp4';
import bgImage from '../assets/images/bgbanner.png'
import LandingPgCard from '../components/landingPage/LandingPgCard';
import WorldMapChart from '../components/landingPage/WorldMapChart';
import * as style from '../components/landingPage/LandingPage.css'
import { Link } from 'react-router-dom';
import LandingFooter from '../components/landingPage/LandingFooter';
import SriLankaMapWithChart from '../components/landingPage/SriLankaMapWithChart';

// ✅ Glass style
const glassStyle = {
  background: '#ffffff82',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  padding: '10px',
  color: '#000',
};

function LandingPageLayout() {
  return (
    <>
      <LandingNavBar />
            
      <Box className='fluid-container'
        sx={{
          marginTop:'50px',
          width: '100%',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          boxShadow: 'inset 0 0 0 2000px rgba(7, 7, 7, 0.65)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '10px 20px',
            borderRadius: '8px',
            textAlign:'center'
          }}
        >
          Sri Lanka Narcotic Unit
          <br></br>
        <div className="btnbg">
          <Link to="/dashboard">
            <button className="sparkle"><span>Login</span></button>
          </Link>
        </div>

        </Typography>
      </Box>
      
       <Grid item xs={12} style={{marginTop: '20px', padding: '20px'}}>
          <Box  display="flex" gap={2}>
            <Box flex={4} sx={glassStyle}>
              <Typography variant="h5" sx={{ my: 2 }}></Typography>
              <video width="100%" autoPlay muted loop>
                <source src={DrugVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Typography variant='p'>The geographical situation of Sri Lanka in the Indian Ocean and being a convenient transit port to the ‘Golden Triangle and Golden Crescent’ the Drug Mafia has focused on us. Today narcotic drugs are smuggled into Sri Lanka not only for the addicts in the country but also in transit to other countries linking Europe and Asia.</Typography>
            </Box>
            <Box flex={8}>
          <Box  display="flex" gap={2}>
            <Box flex={12} sx={glassStyle}>
              <Typography variant="h5" sx={{ my: 2 }}>Drug Seizure Data by Province in the Last One Year</Typography>
              <Barcharts />
            </Box>
          </Box></Box>
          </Box>
        </Grid>

      <Box
        sx={{
          width: '100%',
          background: `#000`,
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          padding: 2,
          boxShadow:'0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '16px',
          marginTop: '20px',
        }}
      >
        <LandingPgCard />
      </Box>

      <Box display="block">
        <Donutchart />
      </Box>

       

      <Grid container display="block" spacing={2} style={{ padding: '30px' }}>
           
        <Grid container item xs={12}>
          <Grid item xs={7}>
            <Box sx={glassStyle}>
              <WorldMapChart />
            </Box>
          </Grid>

          <Grid item xs={5}>
            <Box sx={glassStyle}>
              <SriLankaMapWithChart />
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <LandingFooter />
    </>
  );
}

export default LandingPageLayout;
