import React, { useState } from 'react';
import {
  Box, Grid, TextField, Button, Typography,
  Divider
} from '@mui/material';
import AccusedChronologyTimeline from './AccusedChronologyTimeline';

const MafiaMemberChronology = () => {
  const [formData, setFormData] = useState({
    sno: '',
    dateOfCrime: '',
    time: '',
    location: '',
    policeStation: '',
    typeOfCrime: '',
    crpcSections: '',
    caseStatus: '',
    ioDetails: '',
    description: ''
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
        Accused Chronology
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Sno"
              name="sno"
              fullWidth
              value={formData.sno}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Date of Crime"
              type="date"
              name="dateOfCrime"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={formData.dateOfCrime}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Time"
              type="time"
              name="time"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={formData.time}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Type of Crime"
              name="typeOfCrime"
              fullWidth
              value={formData.typeOfCrime}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Location"
              name="location"
              fullWidth
              value={formData.location}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Police Station Jurisdiction"
              name="policeStation"
              fullWidth
              value={formData.policeStation}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Cr. P.C Sections"
              name="crpcSections"
              fullWidth
              multiline
              rows={2}
              value={formData.crpcSections}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Case Status"
              name="caseStatus"
              fullWidth
              value={formData.caseStatus}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="IO Details"
              name="ioDetails"
              fullWidth
              multiline
              rows={2}
              value={formData.ioDetails}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              fullWidth
              multiline
              rows={2}
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

          
          <Grid item xs={12} style={{textAlign:'center'}}>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: '#ffcc00', // Yellow background
                color: 'black',      // Black text
                '&:hover': {
                  bgcolor: '#e6b800', // Darker yellow on hover
                },
              }}
            >
              Save and Next
            </Button>
          </Grid>
      </form>
      <Divider sx={{ mt: 2 }} />
      <AccusedChronologyTimeline />
    </Box>
  );
};

export default MafiaMemberChronology;