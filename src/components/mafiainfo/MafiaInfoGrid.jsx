import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Autocomplete,
  Tooltip
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import HistoryIcon from '@mui/icons-material/History';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { Link } from 'react-router-dom';

export default function MafiaGrid() {
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    leader: '',
    countries: []
  });

  const [rows, setRows] = useState([]);

  const countriesList = [
    'Sri Lanka',
    'India',
    'Pakistan',
    'Bangladesh',
    'Myanmar',
    'Nepal',
    'Afghanistan',
    'Maldives'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAdd = () => {
    const newRow = {
      id: rows.length + 1,
      sno: rows.length + 1,
      ...formData
    };
    setRows([...rows, newRow]);
    setFormData({
      name: '',
      status: '',
      leader: '',
      countries: []
    });
  };

  const columns = [
    { field: 'sno', headerName: 'S.No', width: 70 },
    { field: 'name', headerName: 'Mafia Name', width: 180 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'leader', headerName: 'Mafia Leader', width: 180 },
    {
        field: 'countries',
        headerName: 'Countries of Operation',
        width: 260,
        renderCell: (params) => {
            const countries = params.row?.countries || [];
            return countries.length > 0 ? countries.join(', ') : '';
        }
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 300,
     renderCell: (params) => (
      <>
        <Tooltip title="Mafia Info">
          <IconButton
          component={Link}
          to={`/newmafia/personal/${params.row.id}`}
          style={{ color: '#09b39b' }}
        >
          <PersonIcon />
        </IconButton>
        </Tooltip>

        <Tooltip title="Mafia Additional Info">
          <IconButton
          component={Link}
          to={`/newmafia/info/${params.row.id}`}
          style={{ color: '#de0621' }}
        >
          <InfoIcon />
        </IconButton>
        </Tooltip>

        <Tooltip title="Mafia History">
          <IconButton
          component={Link}
          to={`/newmafia/history/${params.row.id}`}
          style={{ color: '#e30d64' }}
        >
          <WorkHistoryIcon />
        </IconButton>
        </Tooltip>

        <Tooltip title="Mafia Chronology">
          <IconButton
          component={Link}
          to={`/newmafia/chronology/${params.row.id}`}
          style={{ color: '#8308c2' }}
        >
          <HistoryIcon />
        </IconButton>
        </Tooltip>

        <Tooltip title="Case Status">
          <IconButton
          component={Link}
          to={`/newmafia/casestatus/${params.row.id}`}
          style={{ color: '#e59e06' }}
        >
          <CheckCircleIcon />
        </IconButton>
        </Tooltip>

        <Tooltip title="Photos and Videos">
          <IconButton
          component={Link}
          to={`/newmafia/photos/${params.row.id}`}
          style={{ color: '#04d76d' }}
        >
          <PhotoLibraryIcon />
        </IconButton>
        </Tooltip>
      </>
    )
    }
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Box className="glassStyle" sx={{ mb: 2, p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Mafia Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              select
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              fullWidth
              style={{width:'200px'}}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              label="Mafia Leader"
              name="leader"
              value={formData.leader}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <Autocomplete
              multiple
              freeSolo
              options={countriesList}
              value={formData.countries}
              onChange={(e, newValue) =>
                setFormData({ ...formData, countries: newValue })
              }
              renderInput={(params) => (
                <TextField {...params} label="Countries of Operation" />
              )}
              
              style={{width:'350px'}}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 2 }} style={{textAlign:'center'}}>
          <Button variant="contained" color='warning' onClick={handleAdd}>
            Add
          </Button>
        </Box>
      </Box>

      <DataGrid showToolbar
        rows={rows}
        columns={columns}
        autoHeight
        pageSize={5}
        rowsPerPageOptions={[5]}
      /> 
    </Box>
  );
}
