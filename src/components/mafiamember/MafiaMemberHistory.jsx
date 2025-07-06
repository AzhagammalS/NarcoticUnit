import React, { useState } from 'react';
import {
  Box, Grid, TextField, Button, Typography,
  Divider
} from '@mui/material';
import AccusedHistoryTimeline from './AccusedHistoryTimeline';

const MafiaMemberHistory = () => {
  const [formData, setFormData] = useState({
    dob: '',
    placeOfBirth: '',
    schoolAttended: '',
    collegeAttended: '',
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    joinedGangOn: '',
    previousGangDetails: '',
    reasonToJoinGang: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add save logic here
  };

  return (
    <Box p={3}>
    <Typography variant="h5" component="h1" gutterBottom align="center" sx={{ mb: 3, color: 'primary.main' }}>
      Accused History
    </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Date of Birth"
              type="date"
              name="dob"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={formData.dob}
              onChange={handleChange}
              style={{width:'220px'}}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Place of Birth"
              name="placeOfBirth"
              fullWidth
              value={formData.placeOfBirth}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="School Attended"
              name="schoolAttended"
              fullWidth
              value={formData.schoolAttended}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              label="College Attended"
              name="collegeAttended"
              fullWidth
              value={formData.collegeAttended}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Father Name"
              name="fatherName"
              fullWidth
              value={formData.fatherName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Father Occupation"
              name="fatherOccupation"
              fullWidth
              value={formData.fatherOccupation}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              label="Mother Name"
              name="motherName"
              fullWidth
              value={formData.motherName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Mother Occupation"
              name="motherOccupation"
              fullWidth
              value={formData.motherOccupation}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Joined Gang On"
              type="date"
              name="joinedGangOn"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={formData.joinedGangOn}
              onChange={handleChange}
              style={{width:'220px'}}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Previous Gang Details"
              name="previousGangDetails"
              fullWidth
              multiline
              rows={2}
              value={formData.previousGangDetails}
              onChange={handleChange}
              style={{width:'220px'}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Reason to Join Gang"
              name="reasonToJoinGang"
              fullWidth
              multiline
              rows={2}
              value={formData.reasonToJoinGang}
              onChange={handleChange}
              style={{width:'220px'}}
            />
          </Grid>
        </Grid>
      </form>
      {/* Save and Next Button */}
          <Grid item xs={12} style={{textAlign:'center'}}>
            <Button variant="contained" sx={{ mt: 2, bgcolor: '#ffcc00', color: 'black', '&:hover': { bgcolor: '#e6b800' } }}>
              Save and Next
            </Button>
          </Grid>
        <Divider sx={{ mt:2, mb: 2 }} />
        <AccusedHistoryTimeline />
    </Box>
  );
};

export default MafiaMemberHistory;