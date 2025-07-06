import React, { useState } from 'react';
import {
  Box, Grid, TextField, Button, Typography, MenuItem
} from '@mui/material';

const MafiaInfo = () => {
  const [formData, setFormData] = useState({
    mafiaName: '',
    mafiaLeader: '',
    category: '',
    status: '',
    modusOperandi: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit logic here
  };

  return (
    <Box p={3}>
      <Typography variant="h5" component="h1" gutterBottom align="center" sx={{ mb: 3, color: 'primary.main' }}>
        Mafia Information
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Mafia Name"
              name="mafiaName"
              fullWidth
              value={formData.mafiaName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Mafia Leader"
              name="mafiaLeader"
              fullWidth
              value={formData.mafiaLeader}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Category"
              name="category"
              select
              fullWidth
              value={formData.category}
              onChange={handleChange}
              style={{width:'200px'}}
            >
              <MenuItem value=""><em>Select</em></MenuItem>
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C">C</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Status"
              name="status"
              fullWidth
              value={formData.status}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Modus Operandi"
              name="modusOperandi"
              fullWidth
              value={formData.modusOperandi}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

          <Grid item xs={12} sx={{mt:2, textAlign:'center'}}>
            <Button type="submit" variant="contained" color="warning">
              Save and Next
            </Button>
          </Grid>
      </form>
    </Box>
  );
};

export default MafiaInfo;