import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  IconButton,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';


// --- Reusable Components for Dynamic Sections ---

const VehicleInput = ({ vehicle, index, handleChange, handleRemove }) => (
  <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
    <Grid item xs={12}>
      <Typography variant="subtitle2" gutterBottom>
        Vehicle #{index + 1}
      </Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={2}>
      <TextField
        label="Brand"
        name="brand"
        value={vehicle.brand}
        onChange={(e) => handleChange(e, index, 'vehicles')}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6} md={2}>
      <TextField
        label="Make"
        name="make"
        value={vehicle.make}
        onChange={(e) => handleChange(e, index, 'vehicles')}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6} md={2}>
      <TextField
        label="Reg. Number"
        name="regNumber"
        value={vehicle.regNumber}
        onChange={(e) => handleChange(e, index, 'vehicles')}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6} md={2}>
      <TextField
        label="Color"
        name="color"
        value={vehicle.color}
        onChange={(e) => handleChange(e, index, 'vehicles')}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6} md={2}>
      <TextField
        label="Owner"
        name="owner"
        value={vehicle.owner}
        onChange={(e) => handleChange(e, index, 'vehicles')}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6} md={1}>
      <TextField
        label="Address"
        name="address"
        value={vehicle.address}
        onChange={(e) => handleChange(e, index, 'vehicles')}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} md={1}>
      <IconButton color="error" onClick={() => handleRemove('vehicles', index)}>
        <DeleteIcon />
      </IconButton>
    </Grid>
  </Grid>
);

const PhoneNumberInput = ({ phoneNumber, index, handleChange, handleRemove }) => (
  <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
    <Grid item xs={12}>
      <Typography variant="subtitle2" gutterBottom>
        Phone Number #{index + 1}
      </Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={2}>
      <TextField
        label="Phone"
        name="phone"
        value={phoneNumber.phone}
        onChange={(e) => handleChange(e, index, 'phoneNumbers')}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6} md={2}>
      <TextField
        label="Provider"
        name="provider"
        value={phoneNumber.provider}
        onChange={(e) => handleChange(e, index, 'phoneNumbers')}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6} md={2}>
      <TextField
        label="IMEI"
        name="imei"
        value={phoneNumber.imei}
        onChange={(e) => handleChange(e, index, 'phoneNumbers')}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6} md={2}>
      <TextField
        label="Subscriber"
        name="subscriber"
        value={phoneNumber.subscriber}
        onChange={(e) => handleChange(e, index, 'phoneNumbers')}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <TextField
        label="Address"
        name="address"
        value={phoneNumber.address}
        onChange={(e) => handleChange(e, index, 'phoneNumbers')}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} md={1}>
      <IconButton color="error" onClick={() => handleRemove('phoneNumbers', index)}>
        <DeleteIcon />
      </IconButton>
    </Grid>
  </Grid>
);

const RivalInput = ({ rival, index, handleChange, handleRemove }) => (
  <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
    <Grid item xs={12}>
      <Typography variant="subtitle2" gutterBottom>
        Rival Mafia #{index + 1}
      </Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <TextField
        label="Name"
        name="name"
        value={rival.name}
        onChange={(e) => handleChange(e, index, 'rivals')}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <TextField
        label="Leader"
        name="leader"
        value={rival.leader}
        onChange={(e) => handleChange(e, index, 'rivals')}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <TextField
        label="Area"
        name="area"
        value={rival.area}
        onChange={(e) => handleChange(e, index, 'rivals')}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sm={6} md={2}>
      <TextField
        label="Modus Operandi"
        name="modus"
        value={rival.modus}
        onChange={(e) => handleChange(e, index, 'rivals')}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} md={1}>
      <IconButton color="error" onClick={() => handleRemove('rivals', index)}>
        <DeleteIcon />
      </IconButton>
    </Grid>
  </Grid>
);

// --- Main Form Component ---

const MafiaAddInfo = () => {
  const [formData, setFormData] = useState({
    yearOfFormation: '',
    mafiaLeader: '',
    yearOfFallout: '',
    mainMafiaInfo: '',
    numberOfDivisions: '',
    divisions: '',
    vehicles: [{ brand: '', make: '', regNumber: '', color: '', owner: '', address: '' }],
    phoneNumbers: [{ phone: '', provider: '', imei: '', subscriber: '', address: '' }],
    rivals: [{ name: '', leader: '', area: '', modus: '' }],
    weapons: [{ type: '', make: '', license: '', owner: '' }],
    countries: [{ country: '', city: '', activity: '' }],
  });

  // State to hold validation errors
  const [errors, setErrors] = useState({});

  const handleChange = (e, index, section) => {
    const { name, value } = e.target;
    if (section) {
      // Handle changes for dynamic sections (vehicles, phoneNumbers, rivals)
      const updatedSection = [...formData[section]];
      updatedSection[index] = { ...updatedSection[index], [name]: value };
      setFormData((prev) => ({ ...prev, [section]: updatedSection }));
    } else {
      // Handle changes for top-level form fields
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // Clear error for the current field if it exists
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const addRow = (section) => {
    const emptyRow = {
      vehicles: { brand: '', make: '', regNumber: '', color: '', owner: '', address: '' },
      phoneNumbers: { phone: '', provider: '', imei: '', subscriber: '', address: '' },
      rivals: { name: '', leader: '', area: '', modus: '' },
       weapons: { type: '', make: '', license: '', owner: '' },
       countries: { country: '', city: '', activity: '' },
    };
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], emptyRow[section]],
    }));
  };

  const handleRemoveRow = (section, index) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Basic validation for years
    if (formData.yearOfFormation && isNaN(Number(formData.yearOfFormation))) {
      tempErrors.yearOfFormation = 'Must be a number';
      isValid = false;
    }
    if (formData.yearOfFallout && isNaN(Number(formData.yearOfFallout))) {
      tempErrors.yearOfFallout = 'Must be a number';
      isValid = false;
    }
    // Add more validation rules as needed for other fields

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data Submitted:', formData);
      // Add your actual submission logic here, e.g., API call
      alert('Form submitted successfully! Check console for data.');
      // Optional: Reset form after successful submission
      // setFormData(initialState);
    } else {
      alert('Please correct the errors in the form.');
    }
  };

  return (
    <Box p={3} sx={{ maxWidth: 1000, margin: 'auto', borderRadius: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom align="center" sx={{ mb: 3, color: 'primary.main' }}>
        Mafia Additional Information
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* === General Info Section === */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              General Information
            </Typography>
            <Divider sx={{ mb: 2 }} />
          </Grid>
        <Grid container spacing={3} sx={{ mb: 4 }}>

          <Grid item xs={12} sm={4}>
            <TextField
              label="Year Of Formation"
              name="yearOfFormation"
              fullWidth
              value={formData.yearOfFormation}
              onChange={handleChange}
              error={!!errors.yearOfFormation}
              helperText={errors.yearOfFormation}
              type="number"
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
              label="Year Of Fallout (if applicable)"
              name="yearOfFallout"
              fullWidth
              value={formData.yearOfFallout}
              onChange={handleChange}
              error={!!errors.yearOfFallout}
              helperText={errors.yearOfFallout}
              type="number"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Main Mafia Info / Description"
              name="mainMafiaInfo"
              fullWidth
              multiline
              // rows={3}
              value={formData.mainMafiaInfo}
              onChange={handleChange}
              placeholder="Provide a detailed description of the main mafia, its history, activities, etc."
              style={{width:'210px'}}
            />
          </Grid>
        </Grid>

        {/* === Divisions Info Section === */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Divisions Information
            </Typography>
            <Divider sx={{ mb: 2 }} />
          </Grid>
        <Grid container spacing={3} sx={{ mb: 4 }}>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Number of Divisions"
              name="numberOfDivisions"
              fullWidth
              value={formData.numberOfDivisions}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Divisions (Comma Separated or Detailed)"
              name="divisions"
              fullWidth
              multiline
              // rows={3}
              value={formData.divisions}
              onChange={handleChange}
              placeholder="e.g., North Side Crew, East End Syndicate, or provide detailed info for each."
              style={{width:'300px'}}
            />
          </Grid>
        {/* </Grid> */}

          {/* Vehicles Section */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Vehicles Used
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <TableContainer  variant="outlined">
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Brand</TableCell>
                    <TableCell>Make</TableCell>
                    <TableCell>Reg. Number</TableCell>
                    <TableCell>Color</TableCell>
                    <TableCell>Owner</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {formData.vehicles.map((vehicle, i) => (
                    <TableRow key={i}>
                      {['brand', 'make', 'regNumber', 'color', 'owner', 'address'].map((field) => (
                        <TableCell key={field}>
                          <TextField
                            name={field}
                            value={vehicle[field]}
                            onChange={(e) => handleChange(e, i, 'vehicles')}
                            variant="standard"
                            fullWidth
                          />
                        </TableCell>
                      ))}
                      <TableCell align="center">
                        <IconButton color="error" onClick={() => handleRemoveRow('vehicles', i)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              onClick={() => addRow('vehicles')}
              variant="outlined"
              color="primary"
              startIcon={<AddIcon />}
              sx={{ mt: 1 }}
            >
              Add Vehicle
            </Button>
          </Grid>


          {/* Phone Numbers Section */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Phone Numbers Used
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <TableContainer  variant="outlined">
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Phone</TableCell>
                    <TableCell>Provider</TableCell>
                    <TableCell>IMEI</TableCell>
                    <TableCell>Subscriber</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {formData.phoneNumbers.map((phone, i) => (
                    <TableRow key={i}>
                      {['phone', 'provider', 'imei', 'subscriber', 'address'].map((field) => (
                        <TableCell key={field}>
                          <TextField
                            name={field}
                            value={phone[field]}
                            onChange={(e) => handleChange(e, i, 'phoneNumbers')}
                            variant="standard"
                            fullWidth
                          />
                        </TableCell>
                      ))}
                      <TableCell align="center">
                        <IconButton color="error" onClick={() => handleRemoveRow('phoneNumbers', i)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              onClick={() => addRow('phoneNumbers')}
              variant="outlined"
              color="primary"
              startIcon={<AddIcon />}
              sx={{ mt: 1 }}
            >
              Add Phone Number
            </Button>
          </Grid>


          {/* Rivals Section */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Rival Mafias
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <TableContainer  variant="outlined">
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Leader</TableCell>
                    <TableCell>Area</TableCell>
                    <TableCell>Modus Operandi</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {formData.rivals.map((rival, i) => (
                    <TableRow key={i}>
                      {['name', 'leader', 'area', 'modus'].map((field) => (
                        <TableCell key={field}>
                          <TextField
                            name={field}
                            value={rival[field]}
                            onChange={(e) => handleChange(e, i, 'rivals')}
                            variant="standard"
                            fullWidth
                          />
                        </TableCell>
                      ))}
                      <TableCell align="center">
                        <IconButton color="error" onClick={() => handleRemoveRow('rivals', i)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              onClick={() => addRow('rivals')}
              variant="outlined"
              color="primary"
              startIcon={<AddIcon />}
              sx={{ mt: 1 }}
            >
              Add Rival Mafia
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Weapons Information
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <TableContainer variant="outlined">
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>Make</TableCell>
                    <TableCell>License No.</TableCell>
                    <TableCell>Owner</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {formData.weapons.map((weapon, i) => (
                    <TableRow key={i}>
                      {['type', 'make', 'license', 'owner'].map((field) => (
                        <TableCell key={field}>
                          <TextField
                            name={field}
                            value={weapon[field]}
                            onChange={(e) => handleChange(e, i, 'weapons')}
                            variant="standard"
                            fullWidth
                          />
                        </TableCell>
                      ))}
                      <TableCell align="center">
                        <IconButton color="error" onClick={() => handleRemoveRow('weapons', i)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Button
              onClick={() => addRow('weapons')}
              variant="outlined"
              color="primary"
              startIcon={<AddIcon />}
              sx={{ mt: 1 }}
            >
              Add Weapon
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Countries of Operation
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <TableContainer variant="outlined">
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Country</TableCell>
                    <TableCell>Main City</TableCell>
                    <TableCell>Activity Type</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {formData.countries.map((country, i) => (
                    <TableRow key={i}>
                      {['country', 'city', 'activity'].map((field) => (
                        <TableCell key={field}>
                          <TextField
                            name={field}
                            value={country[field]}
                            onChange={(e) => handleChange(e, i, 'countries')}
                            variant="standard"
                            fullWidth
                          />
                        </TableCell>
                      ))}
                      <TableCell align="center">
                        <IconButton color="error" onClick={() => handleRemoveRow('countries', i)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Button
              onClick={() => addRow('countries')}
              variant="outlined"
              color="primary"
              startIcon={<AddIcon />}
              sx={{ mt: 1 }}
            >
              Add Country
            </Button>
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

export default MafiaAddInfo;