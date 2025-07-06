import React, { useState } from 'react';
import {
  Box, Tabs, Tab, Grid, TextField, Button, Typography
} from '@mui/material';

const MafiaMemberPhotoVideo = () => {
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState({
    file: null,
    date: '',
    place: '',
    time: '',
    description: ''
  });

  const handleTabChange = (e, newValue) => setTab(newValue);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData(prev => ({ ...prev, file: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Tab: ${tab}`, formData);
    // Handle upload logic here
  };

  const tabLabels = ["Upload Photos", "Upload Videos", "Biometrics"];

  return (
    <Box p={3}>
      <Tabs value={tab} onChange={handleTabChange} sx={{ mb: 2 }}>
        {tabLabels.map((label, idx) => (
          <Tab key={idx} label={label} />
        ))}
      </Tabs>

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" component="label" color="warning">
              Choose File
              <input
                type="file"
                hidden
                onChange={handleChange}
              />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Uploaded {tabLabels[tab]}:
              {formData.file ? ` ${formData.file.name}` : ' None'}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              label="Date"
              type="date"
              name="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={formData.date}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Place"
              name="place"
              fullWidth
              value={formData.place}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
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

          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              fullWidth
              multiline
              rows={3}
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              {tab === 0 || tab === 1 ? "Submit" : "Upload"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MafiaMemberPhotoVideo;