import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Divider,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Import the clock icon
import MafiaChronologyTimeline from './MafiaChronologyTimeline';

function MafiaChronology() {
  return (
    <Box sx={{ flexGrow: 1, p: 3, borderRadius: 2 }}> {/* Added background for visual separation */}
      <Typography variant="h5" component="h1" gutterBottom align="center" sx={{ mb: 3, color: 'primary.main' }}>
        Mafia Chronology
      </Typography>

      <Grid container spacing={3}>
        {/* Row 1 */}
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Sno"
            variant="outlined"
            placeholder="Enter Sno"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Date of Crime"
            variant="outlined"
            type="date" // Use type="date" for a date picker
            InputLabelProps={{
              shrink: true, // Shrink label when value is present or input is focused
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Time"
            variant="outlined"
            type="time" // Use type="time" for a time picker
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        {/* Row 2 */}
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Location"
            variant="outlined"
            placeholder="Enter Location"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Police Station Jurisdiction"
            variant="outlined"
            placeholder="Enter Police Station Jurisdiction"
            style={{width:'200px'}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Type of Crime"
            variant="outlined"
            placeholder="Enter Type of Crime"
          />
        </Grid>

        {/* Row 3 */}
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Cr. P.C Sections"
            variant="outlined"
            multiline
            rows={4}
            placeholder="Enter Cr. P.C Sections"
            style={{width:'200px'}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Case Status"
            variant="outlined"
            multiline
            rows={4}
            placeholder="Enter Case Status"
            style={{width:'200px'}}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="IO Details"
            variant="outlined"
            multiline
            rows={4}
            placeholder="Enter IO Details"
            style={{width:'200px'}}
          />
        </Grid>

        {/* Row 4: Description */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            placeholder="Enter description"
            style={{width:'200px'}}
          />
        </Grid>
      </Grid>

        {/* Save and Next Button */}
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

        <Divider sx={{ mb: 2 }} />
        <MafiaChronologyTimeline />
    </Box>
  );
}

export default MafiaChronology;