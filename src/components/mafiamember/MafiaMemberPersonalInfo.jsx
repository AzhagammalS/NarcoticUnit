import React, { useState } from 'react';
import { 
  Box, Grid, TextField, Button, MenuItem, Typography, InputLabel, Select 
} from '@mui/material';

const MafiaMemberPersonalInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    so: '',
    dob: '',
    age: '',
    gender: '',
    caste: '',
    complexion: '',
    idMarks: '',
    height: '',
    status: '',
    motherTongue: '',
    languagesKnown: '',
    aadhar: '',
    pan: '',
    passport: '',
    voterId: '',
    rationCard: '',
    phone: '',
    phone1: '',
    knownAddress: '',
    additionalAddress: '',
    policeStation: '',
    additionalInfo: '',
    modusOperandi: '',
    gangBoss: '',
    caseStatus: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform save logic
  };

  return (
    <Box p={3}>
      <Typography variant="h5" component="h1" gutterBottom align="center" sx={{ mb: 3, color: 'primary.main' }}>Personal Info</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Upload Photo + Fingerprint (Placeholder for now) */}
          <Grid item xs={12}>
            <Button variant="contained" component="label">
              Upload Photo
              <input type="file" hidden />
            </Button>
            <Button variant="outlined" sx={{ ml: 2 }}>
              Add Fingerprint
            </Button>
          </Grid>
          </Grid>
          
        <Grid container spacing={2} sx={{mt:2}}>

          {/* Name, S/O, DOB */}
          <Grid item xs={12} sm={4}>
            <TextField label="Name" name="name" fullWidth value={formData.name} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="S/O (Son of)" name="so" fullWidth value={formData.so} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Date of Birth"
              name="dob"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.dob}
              onChange={handleChange}
              style={{width:'220px'}}
            />
          </Grid>

          {/* Age, Gender, Caste */}
          <Grid item xs={12} sm={4}>
            <TextField label="Age" name="age" fullWidth value={formData.age} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              fullWidth
              displayEmpty
              style={{width:'220px'}}
            >
              <MenuItem value="">Select Gender</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Caste" name="caste" fullWidth value={formData.caste} onChange={handleChange} />
          </Grid>

          {/* Complexion, ID Marks, Height */}
          <Grid item xs={12} sm={4}>
            <TextField label="Complexion" name="complexion" fullWidth value={formData.complexion} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Identification Marks" name="idMarks" fullWidth value={formData.idMarks} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Height" name="height" fullWidth value={formData.height} onChange={handleChange} />
          </Grid>

          {/* Status, Mother Tongue, Languages Known */}
          <Grid item xs={12} sm={4}>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              fullWidth
              displayEmpty
              style={{width:'220px'}}
            >
              <MenuItem value="">Select Status</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Dormant">Dormant</MenuItem>
              <MenuItem value="Absconding">Absconding</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Mother Tongue" name="motherTongue" fullWidth value={formData.motherTongue} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Languages Known" name="languagesKnown" fullWidth value={formData.languagesKnown} onChange={handleChange} />
          </Grid>

          {/* Aadhar, PAN, Passport */}
          <Grid item xs={12} sm={4}>
            <TextField label="Aadhar Number" name="aadhar" fullWidth value={formData.aadhar} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="PAN Number" name="pan" fullWidth value={formData.pan} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Passport Number" name="passport" fullWidth value={formData.passport} onChange={handleChange} />
          </Grid>

          {/* Voter ID, Ration, Phone */}
          <Grid item xs={12} sm={4}>
            <TextField label="Voter ID" name="voterId" fullWidth value={formData.voterId} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Ration Card" name="rationCard" fullWidth value={formData.rationCard} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Phone Number" name="phone" fullWidth value={formData.phone} onChange={handleChange} />
          </Grid>

          {/* Phone1, Address, Addl Address */}
          <Grid item xs={12} sm={4}>
            <TextField label="Phone Number 1" name="phone1" fullWidth value={formData.phone1} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Known Address" name="knownAddress" fullWidth value={formData.knownAddress} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Additional Address" name="additionalAddress" fullWidth value={formData.additionalAddress} onChange={handleChange} />
          </Grid>

          {/* Police, Additional Info */}
          <Grid item xs={12} sm={6}>
            <TextField label="Police Station Jurisdiction" name="policeStation" fullWidth value={formData.policeStation} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Additional Info" name="additionalInfo" fullWidth value={formData.additionalInfo} onChange={handleChange} multiline rows={2}  
              style={{width:'220px'}}/>
          </Grid>

          {/* Modus Operandi, Gang Boss, Case Status */}
          <Grid item xs={12} sm={4}>
            <Select
            name="modusOperandi"
            value={formData.modusOperandi}
            onChange={handleChange}
            fullWidth
            displayEmpty
              style={{width:'220px'}}
            >
            <MenuItem value="">Select Modus Operandi</MenuItem>
            <MenuItem value="Individual">Individual</MenuItem>
            <MenuItem value="Gang">Gang</MenuItem>
            </Select>
            </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Gang/Boss Name" name="gangBoss" fullWidth value={formData.gangBoss} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select
              name="caseStatus"
              value={formData.caseStatus}
              onChange={handleChange}
              fullWidth
              displayEmpty
              style={{width:'220px'}}
            >
              <MenuItem value="">Select Case Status</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Dormant">Dormant</MenuItem>
              <MenuItem value="Absconding">Absconding</MenuItem>
            </Select>
            </Grid>
        </Grid>

          {/* Submit Button */}
          <Grid item xs={12} sx={{ textAlign: 'center', pt: 4 }}>
            <Button type="submit" variant="contained" color="warning" size="large">
              Save and Next
            </Button>
          </Grid>
      </form>
    </Box>
  );
};

export default MafiaMemberPersonalInfo;