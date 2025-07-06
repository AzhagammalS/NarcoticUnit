import React from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Grid,
  Paper,
  Divider
} from '@mui/material';
import MafiaHistoryTimeline from './MafiaHistoryTimeline';

function MafiaHistory() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h5" component="h1" gutterBottom align="center" sx={{ mb: 3, color: 'primary.main' }}>
          Mafia History
        </Typography>

        <Grid container spacing={3}>
          {/* Mafia History */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Area Mafia Originated"
              variant="outlined"
              placeholder="Enter Area of Origin"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Initial Crimes"
              variant="outlined"
              multiline
              rows={4}
              placeholder="Enter Initial Crimes"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Merger Or Collaboration"
              variant="outlined"
              multiline
              rows={4}
              placeholder="Enter Merger Or Collaboration"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mafia Signature Crime"
              variant="outlined"
              placeholder="Enter Signature Crime"
            />
          </Grid>
          </Grid>

          {/* Previous Member Details */}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              Previous Member Details
            </Typography>
            <Divider sx={{ mt:2, mb: 2 }} />
          </Grid>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              placeholder="Enter Name"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Area"
              variant="outlined"
              placeholder="Enter Area"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Age"
              variant="outlined"
              placeholder="Enter Age"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Skills or Expertise"
              variant="outlined"
              placeholder="Enter Skills or Expertise"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              select
              fullWidth
              label="Status"
              variant="outlined"
              defaultValue=""
              style={{width:'200px'}}
            >
              <MenuItem value="">
                <em>- Select Here -</em>
              </MenuItem>
              {/* Add more status options here if known */}
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="dormant">Dormant</MenuItem>
              <MenuItem value="absconding">Absconding</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Reason for Leaving"
              variant="outlined"
              multiline
              rows={4}
              placeholder="Enter Reason for Leaving"
            />
          </Grid>
        
        </Grid> {/* Save and Next Button */}
          <Grid item xs={12} style={{textAlign:'center'}}>
            <Button variant="contained" sx={{ mt: 2, bgcolor: '#ffcc00', color: 'black', '&:hover': { bgcolor: '#e6b800' } }}>
              Save and Next
            </Button>
          </Grid>
        <Divider sx={{ mt:2, mb: 2 }} />
        <MafiaHistoryTimeline />
    </Box>
  );
}

export default MafiaHistory;