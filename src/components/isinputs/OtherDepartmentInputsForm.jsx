import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  IconButton,
  Tooltip
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import DeleteIcon from '@mui/icons-material/Delete';

function OtherDepartmentInputsForm() {
  const [formData, setFormData] = useState({
    date: '',
    location: '',
    mafia: '',
    mafiaMember: '',
    description: '',
    evidence: null,
    priority: '',
  });

  const [records, setRecords] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'evidence') {
      setFormData({ ...formData, evidence: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId !== null) {
      setRecords((prev) =>
        prev.map((rec) => (rec.id === editId ? { ...formData, id: editId } : rec))
      );
      setEditId(null);
    } else {
      setRecords([
        ...records,
        { ...formData, id: Date.now() },
      ]);
    }

    setFormData({
      date: '',
      location: '',
      mafia: '',
      mafiaMember: '',
      description: '',
      evidence: null,
      priority: '',
    });
  };

  const handleEdit = (id) => {
    const rec = records.find((r) => r.id === id);
    if (rec) {
      setFormData(rec);
      setEditId(id);
    }
  };

  const handleDelete = (id) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  const columns = [
    { field: 'date', headerName: 'Date', flex: 1 },
    { field: 'location', headerName: 'Location', flex: 1 },
    { field: 'mafia', headerName: 'Mafia', flex: 1 },
    { field: 'mafiaMember', headerName: 'Mafia Member', flex: 1 },
    { field: 'description', headerName: 'Description', flex: 1 },
    {
      field: 'priority',
      headerName: 'Priority',
      flex: 1,
      renderCell: (params) => {
        const color =
          params.value === 'High'
            ? '#f44336'
            : params.value === 'Medium'
              ? '#ffeb3b'
              : '#4caf50';
        const textColor = params.value === 'Medium' ? 'black' : 'white';
        return (
          <Box
            sx={{
              backgroundColor: color,
              color: textColor,
              px: 0.5,
              py: 0.1,
              borderRadius: 10,
              display: 'inline-block',
              lineHeight: 1.5,
              fontSize: '0.875rem'
            }}
          >
            {params.value}
          </Box>
        );
      },
    },
    {
      field: 'evidence',
      headerName: 'Evidence',
      flex: 1,
      valueGetter: (params) => {
        if (!params || !params.row) return 'N/A';
        return params.row.evidence?.name || 'N/A';
      }
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <>
          <Tooltip title="Edit">
            <IconButton onClick={() => handleEdit(params.row.id)} color="warning">
              <EditSquareIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => handleDelete(params.row.id)} color="error">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" align="center" gutterBottom sx={{ mb: 3 }}>
        Mafia Case Entry
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
              style={{width:'220px'}}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Mafia"
              name="mafia"
              value={formData.mafia}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Mafia Member"
              name="mafiaMember"
              value={formData.mafiaMember}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={1}
              fullWidth
              style={{width:'220px'}}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              fullWidth
              SelectProps={{ native: true }}
              style={{width:'220px'}}
            >
              <option value="">Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <Button variant="contained" component="label" fullWidth>
              Upload Evidence
              <input
                type="file"
                hidden
                name="evidence"
                onChange={handleChange}
              />
            </Button>
            {formData.evidence && (
              <Typography variant="body2" mt={1}>
                Selected: {formData.evidence.name}
              </Typography>
            )}
          </Grid>
        </Grid>

          <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: '#ffcc00', color: 'black', '&:hover': { bgcolor: '#e6b800' } }}
            >
              {editId !== null ? 'Update' : 'Save'}
            </Button>
          </Grid>
      </form>

      <Box sx={{ height: 400, width: '100%', mt: 4 }}>
        <DataGrid
          rows={records}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </Box>
    </Box>
  );
}

export default OtherDepartmentInputsForm;