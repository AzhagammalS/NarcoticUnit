import React, { useState } from 'react';
import {
  Box, Grid, TextField, Button, Typography
} from '@mui/material';

const MafiaMemberAddlInfo = () => {
  const [formData, setFormData] = useState({
    adeptIn: '',
    weaponsUsed: '',
    addiction: '',
    areaOfOperation: '',
    politicalAffiliation: '',
    casteAffiliation: '',
    additionalInfo: '',
  });

  const [crimeDetails, setCrimeDetails] = useState([
    { type: '', date: '', station: '', sections: '', status: '', io: '', remarks: '' }
  ]);

  const [familyDetails, setFamilyDetails] = useState([
    { name: '', relation: '', mobile: '', address: '' }
  ]);

  const [accompliceDetails, setAccompliceDetails] = useState([
    { name: '', relation: '', mobile: '', address: '' }
  ]);

  const [frequentPlaces, setFrequentPlaces] = useState([
    { name: '', relation: '', mobile: '', address: '' }
  ]);

  const [vehicles, setVehicles] = useState([
    { brand: '', make: '', regNumber: '', color: '', owner: '', address: '' }
  ]);

  const [phones, setPhones] = useState([
    { number: '', provider: '', imei: '', subscriber: '', address: '' }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDynamicChange = (setter, index, field, value) => {
    setter(prev => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  const handleAddRow = (setter, emptyRow) => {
    setter(prev => [...prev, emptyRow]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      crimeDetails,
      familyDetails,
      accompliceDetails,
      frequentPlaces,
      vehicles,
      phones
    };
    console.log(data);
    // Submit logic here
  };

  return (
    <Box p={3}>
      <Typography variant="h6" gutterBottom>Additional Info</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Adept In" name="adeptIn" fullWidth value={formData.adeptIn} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Weapons Normally Used" name="weaponsUsed" fullWidth value={formData.weaponsUsed} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Addiction If Any" name="addiction" fullWidth value={formData.addiction} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Area of Operation" name="areaOfOperation" fullWidth value={formData.areaOfOperation} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Political Affiliation" name="politicalAffiliation" fullWidth value={formData.politicalAffiliation} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Caste Organization Affiliation" name="casteAffiliation" fullWidth value={formData.casteAffiliation} onChange={handleChange} />
          </Grid>

          {/* Previous Crime Details */}
          <Grid item xs={12}><Typography variant="subtitle1">Previous Crime Details</Typography></Grid>
          {crimeDetails.map((row, i) => (
            <Grid container spacing={1} key={i}>
              <Grid item xs={12} sm={2}>
                <TextField label="Type" value={row.type} onChange={e => handleDynamicChange(setCrimeDetails, i, 'type', e.target.value)} fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField type="date" label="Date" InputLabelProps={{ shrink: true }}
                  value={row.date} onChange={e => handleDynamicChange(setCrimeDetails, i, 'date', e.target.value)} fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Station" value={row.station} onChange={e => handleDynamicChange(setCrimeDetails, i, 'station', e.target.value)} fullWidth />
              </Grid>
              <Grid item xs={12} sm={1}>
                <TextField label="CrPC" value={row.sections} onChange={e => handleDynamicChange(setCrimeDetails, i, 'sections', e.target.value)} fullWidth />
              </Grid>
              <Grid item xs={12} sm={1}>
                <TextField label="Status" value={row.status} onChange={e => handleDynamicChange(setCrimeDetails, i, 'status', e.target.value)} fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="IO" value={row.io} onChange={e => handleDynamicChange(setCrimeDetails, i, 'io', e.target.value)} fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Remarks" value={row.remarks} onChange={e => handleDynamicChange(setCrimeDetails, i, 'remarks', e.target.value)} fullWidth />
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button onClick={() => handleAddRow(setCrimeDetails, { type: '', date: '', station: '', sections: '', status: '', io: '', remarks: '' })}>
              + Add More
            </Button>
          </Grid>

          {/* Similar sections for Family, Accomplice, Frequent Places, Vehicles, Phones */}
          {[
            { label: 'Family/Friend Details', state: familyDetails, setter: setFamilyDetails, empty: { name: '', relation: '', mobile: '', address: '' } },
            { label: 'Accomplice Details', state: accompliceDetails, setter: setAccompliceDetails, empty: { name: '', relation: '', mobile: '', address: '' } },
            { label: 'Frequented Places', state: frequentPlaces, setter: setFrequentPlaces, empty: { name: '', relation: '', mobile: '', address: '' } },
            { label: 'Types of Vehicles Used', state: vehicles, setter: setVehicles, empty: { brand: '', make: '', regNumber: '', color: '', owner: '', address: '' } },
            { label: 'Details of Phone numbers used', state: phones, setter: setPhones, empty: { number: '', provider: '', imei: '', subscriber: '', address: '' } },
          ].map((section, idx) => (
            <React.Fragment key={idx}>
              <Grid item xs={12}><Typography variant="subtitle1">{section.label}</Typography></Grid>
              {section.state.map((row, i) => (
                <Grid container spacing={1} key={i}>
                  {Object.keys(section.empty).map((field, j) => (
                    <Grid item xs={12} sm={2} key={j}>
                      <TextField
                        label={field.charAt(0).toUpperCase() + field.slice(1)}
                        value={row[field]}
                        onChange={e => handleDynamicChange(section.setter, i, field, e.target.value)}
                        fullWidth
                      />
                    </Grid>
                  ))}
                </Grid>
              ))}
              <Grid item xs={12}>
                <Button onClick={() => handleAddRow(section.setter, section.empty)}>
                  + Add More
                </Button>
              </Grid>
            </React.Fragment>
          ))}

          {/* Additional info */}
          <Grid item xs={12}>
            <TextField
              label="Any other additional information"
              name="additionalInfo"
              fullWidth
              multiline
              rows={3}
              value={formData.additionalInfo}
              onChange={handleChange}
            />
          </Grid>

          {/* Submit */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">Save and Next</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default MafiaMemberAddlInfo;