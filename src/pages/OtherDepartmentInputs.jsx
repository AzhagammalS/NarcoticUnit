import React from 'react';
import { Box } from '@mui/material';
import banner from '../assets/images/odbanner.png'; // adjust path as needed
import OtherDepartmentInputsForm from '../components/isinputs/OtherDepartmentInputsForm';

function OtherDepartmentInputs() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '130vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'top',
        backgroundImage: `linear-gradient(45deg, #3b060aba, #3b060ad9), url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        paddingTop:'30px'
      }}
    >
      <Box
        sx={{
          width: '90%',
          height: '50%',
          background: '#faf7f7b5',
          border: 3,
          p:3,
        }}
      >
        <OtherDepartmentInputsForm />
      </Box>
    </Box>
  );
}

export default OtherDepartmentInputs;
