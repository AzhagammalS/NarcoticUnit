import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

function LandingFooter() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        textAlign: 'center',
        backgroundColor:
          theme.palette.mode === 'light' ? '#000' : '#000',
        color: 'white',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} The Neppon Enterprises (Pvt) Ltd. All rights reserved.
      </Typography>
      <Typography variant="body2">
        {/* Designed and Developed by YourTeamName */}
      </Typography>
    </Box>
  );
}

export default LandingFooter;
