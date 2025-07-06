import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const MafiaMemberAddlInfo = () => {
  const [formData, setFormData] = useState({
    adeptIn: '',
    weaponsUsed: '',
    addiction: '',
    areaOfOperation: '',
    politicalAffiliation: '',
    casteAffiliation: '',
    additionalInfo: '',
    crimeDetails: [{ type: '', date: '', station: '', sections: '', status: '', io: '', remarks: '' }],
    familyDetails: [{ name: '', relation: '', mobile: '', address: '' }],
    accompliceDetails: [{ name: '', relation: '', mobile: '', address: '' }],
    frequentPlaces: [{ name: '', relation: '', mobile: '', address: '' }],
    vehicles: [{ brand: '', make: '', regNumber: '', color: '', owner: '', address: '' }],
    phones: [{ number: '', provider: '', imei: '', subscriber: '', address: '' }],
    weapons: [{ type: '', make: '', license: '', owner: '' }],
    countries: [{ country: '', city: '', activity: '' }]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTableChange = (e, index, section) => {
    const { name, value } = e.target;
    const updated = [...formData[section]];
    updated[index][name] = value;
    setFormData((prev) => ({
      ...prev,
      [section]: updated
    }));
  };

  const addRow = (section, emptyRow) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], emptyRow]
    }));
  };

  const removeRow = (section, index) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert('Form submitted. Check console for data!');
  };

  const capitalizeHeader = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  };

  const renderTable = (section, title, columns, emptyRow) => (
    <Grid item xs={12}>
      <Typography variant="h6" sx={{ mt: 3, mb: 1}}>
        {title}
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col}>{capitalizeHeader(col)}</TableCell>
              ))}
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData[section].map((row, i) => (
              <TableRow key={i}>
                {columns.map((col) => (
                  <TableCell key={col}>
                    <TextField
                      name={col}
                      value={row[col]}
                      onChange={(e) => handleTableChange(e, i, section)}
                      variant="standard"
                      fullWidth
                      type={col === 'date' ? 'date' : 'text'}
                      InputLabelProps={col === 'date' ? { shrink: true } : {}}
                    />
                  </TableCell>
                ))}
                <TableCell align="center">
                  <IconButton color="error" onClick={() => removeRow(section, i)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={() => addRow(section, emptyRow)}
        variant="outlined"
        startIcon={<AddIcon />}
        sx={{ mt: 1 }}
      >
        Add Row
      </Button>
    </Grid>
  );

  return (
    <Box p={3}>
      <Typography variant="h5" component="h1" gutterBottom align="center" sx={{ mb: 3, color: 'primary.main' }}>
        Accused Additional Information
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {[
            { label: 'Adept In', name: 'adeptIn' },
            { label: 'Weapons Normally Used', name: 'weaponsUsed' },
            { label: 'Addiction If Any', name: 'addiction' },
            { label: 'Area of Operation', name: 'areaOfOperation' },
            { label: 'Political Affiliation', name: 'politicalAffiliation' },
            { label: 'Caste Organization Affiliation', name: 'casteAffiliation' }
          ].map((item) => (
            <Grid item xs={12} sm={6} key={item.name}>
              <TextField
                label={item.label}
                name={item.name}
                fullWidth
                value={formData[item.name]}
                onChange={handleInputChange}
              />
            </Grid>
          ))}

          {renderTable(
            'crimeDetails',
            'Previous Crime Details',
            ['type', 'date', 'station', 'sections', 'status', 'io', 'remarks'],
            { type: '', date: '', station: '', sections: '', status: '', io: '', remarks: '' }
          )}

          {renderTable(
            'familyDetails',
            'Family/Friend Details',
            ['name', 'relation', 'mobile', 'address'],
            { name: '', relation: '', mobile: '', address: '' }
          )}

          {renderTable(
            'accompliceDetails',
            'Accomplice Details',
            ['name', 'relation', 'mobile', 'address'],
            { name: '', relation: '', mobile: '', address: '' }
          )}

          {renderTable(
            'frequentPlaces',
            'Frequented Places',
            ['name', 'relation', 'mobile', 'address'],
            { name: '', relation: '', mobile: '', address: '' }
          )}

          {renderTable(
            'vehicles',
            'Vehicles Used',
            ['brand', 'make', 'regNumber', 'color', 'owner', 'address'],
            { brand: '', make: '', regNumber: '', color: '', owner: '', address: '' }
          )}

          {renderTable(
            'phones',
            'Phone Numbers Used',
            ['number', 'provider', 'imei', 'subscriber', 'address'],
            { number: '', provider: '', imei: '', subscriber: '', address: '' }
          )}

          {renderTable(
            'weapons',
            'Weapons Information',
            ['type', 'make', 'license', 'owner'],
            { type: '', make: '', license: '', owner: '' }
          )}

          {renderTable(
            'countries',
            'Countries of Operation',
            ['country', 'city', 'activity'],
            { country: '', city: '', activity: '' }
          )}

          <Grid item xs={12}>
            <TextField
              label="Any other additional information"
              name="additionalInfo"
              fullWidth
              multiline
              rows={3}
              value={formData.additionalInfo}
              onChange={handleInputChange}
            />
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

export default MafiaMemberAddlInfo;
