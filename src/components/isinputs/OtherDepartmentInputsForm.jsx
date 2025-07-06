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
import EditSquareIcon from '@mui/icons-material/EditSquare'
import DeleteIcon from '@mui/icons-material/Delete'

function OtherDepartmentInputsForm() {
  const [formData, setFormData] = useState({
    caseNo: '',
    filingDate: '',
    court: '',
    section: '',
    accusedDetails: '',
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
        { ...formData, id: Date.now() }, // unique id
      ]);
    }

    setFormData({
      caseNo: '',
      filingDate: '',
      court: '',
      section: '',
      accusedDetails: '',
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
    { field: 'caseNo', headerName: 'Case No', flex: 1 },
    { field: 'filingDate', headerName: 'Date of Filing', flex: 1 },
    { field: 'court', headerName: 'Court', flex: 1 },
    { field: 'section', headerName: 'Section', flex: 1 },
    { field: 'accusedDetails', headerName: 'Accused', flex: 1 },
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
                px: 0.5,         // small horizontal padding
                py: 0.1,         // small vertical padding for thin background
                borderRadius: 10,
                display: 'inline-block',
                lineHeight: 1.5,   // remove extra line height
                fontSize: '0.875rem' // optional: smaller text
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
          <Tooltip title="Edit"><IconButton onClick={() => handleEdit(params.row.id)} color="warning"><EditSquareIcon /></IconButton></Tooltip>
          <Tooltip title="Delete"><IconButton onClick={() => handleDelete(params.row.id)} color="error"><DeleteIcon /></IconButton></Tooltip>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" component="h1" gutterBottom align="center" sx={{ mb: 3, color: 'black' }}>
        Customs Department Input
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Case No"
              name="caseNo"
              value={formData.caseNo}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Date of Filing"
              name="filingDate"
              type="date"
              value={formData.filingDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
              
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Court"
              name="court"
              value={formData.court}
              onChange={handleChange}
              fullWidth
              
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Section"
              name="section"
              value={formData.section}
              onChange={handleChange}
              fullWidth
              
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Accused Details"
              name="accusedDetails"
              value={formData.accusedDetails}
              onChange={handleChange}
              multiline
              rows={1}
              fullWidth
              sx={{width:'220px'}}
              
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
                sx={{width:'220px'}}
                >
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              component="label"
              fullWidth
            >
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

          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Button type="submit" variant="contained" sx={{ bgcolor: '#ffcc00', color: 'black', '&:hover': { bgcolor: '#e6b800' } }}>
              {editId !== null ? 'Update' : 'Save'}
            </Button>
          </Grid>
      </form>

      <Box sx={{ height: 400, width: '100%', mt: 2 }}>
        <DataGrid
          rows={records}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          showToolbar
        />
      </Box>
    </Box>
  );
}

export default OtherDepartmentInputsForm;
