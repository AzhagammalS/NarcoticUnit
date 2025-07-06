import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import AddCommentIcon from '@mui/icons-material/AddComment';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ForwardIcon from '@mui/icons-material/Forward';
import {
  Button,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Box,
  Chip,
  Autocomplete,
  Grid
} from '@mui/material';

export default function IsInputsGrid() {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [dialogType, setDialogType] = React.useState(''); // 'comment' or 'escalate'
  const [dialogRow, setDialogRow] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [selectedEscalateTo, setSelectedEscalateTo] = React.useState([]);
    const [selectedDepartments, setSelectedDepartments] = React.useState([]);


  const rows = Array.from({ length: 14 }).map((_, index) => ({
    id: index + 1,
    sno: index + 1,
    date: `2024-06-${String(index + 1).padStart(2, '0')}`,
    location: `Zone ${index % 4 + 1}`,
    mafia: `Mafia ${String.fromCharCode(65 + (index % 5))}`,
    member: `Member ${1000 + index}`,
    description: `Suspicious activity in sector ${index + 1}`,
  }));

  const handleOpenDialog = (type, row) => {
    setDialogType(type);
    setDialogRow(row);
    setInputValue('');
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmitDialog = () => {
    if (dialogType === 'comment') {
      alert(`Comment for row ${dialogRow.id}: ${inputValue}`);
    } else {
      alert(`Escalate for row ${dialogRow.id}:\nNotes: ${inputValue}\nTo: ${selectedEscalateTo.join(', ')}`);
    }
    setOpenDialog(false);
    setInputValue('');
    setSelectedEscalateTo([]);
  };

  const columns = [
    { field: 'sno', headerName: 'S.No', width: 80 },
    { field: 'date', headerName: 'Date', width: 120 },
    { field: 'location', headerName: 'Location', width: 150 },
    { field: 'mafia', headerName: 'Mafia', width: 120 },
    { field: 'member', headerName: 'Mafia Member', width: 160 },
    { field: 'description', headerName: 'Description', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
          <Tooltip title="Comment">
            <AddCommentIcon
              style={{ cursor: 'pointer', color: '#66ed0f' }}
              onClick={() => handleOpenDialog('comment', params.row)}
            />
          </Tooltip>
          <Tooltip title="Escalate">
            <FlashOnIcon
              style={{ cursor: 'pointer', color: '#fa9003' }}
              onClick={() => handleOpenDialog('escalate', params.row)}
            />
          </Tooltip>
          <Tooltip title="Forward">
            <ForwardIcon
              style={{ cursor: 'pointer', color: '#0326fa' }}
              onClick={() => alert(`Forwarding row ${params.row.id}`)}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  const handleChange = (event) => {
    setSelectedDepartments(event.target.value);
  };

  const departments = ['Customs', 'Police', 'IB', 'Narcotics Dept', 'Interpol'];


  return (
    <>
    <Grid item>
      <Autocomplete
        multiple
        options={departments}
        value={selectedDepartments}
        onChange={(event, newValue) => setSelectedDepartments(newValue)}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip key={option} label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Departments"
            placeholder="Departments"
          />
        )}
        fullWidth
      />
      </Grid>
      <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <Button variant="contained" color="error">High Priority</Button>
        <Button variant="contained" color="warning">Medium Priority</Button>
        <Button variant="contained" color="success">Low Priority</Button>
      </div>

      <div style={{ height: 500, width: '100%' }}>
        <DataGrid columns={columns} rows={rows} showToolbar />
      </div>

      {/* Modal dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {dialogType === 'comment' ? 'Add Comment' : 'Escalate Issue'}
        </DialogTitle>
        <DialogContent sx={{ mt: 1 }}>
          {dialogType === 'comment' ? (
            <TextField
              autoFocus
              margin="dense"
              label="Comment"
              type="text"
              fullWidth
              multiline
              minRows={3}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          ) : (
            <>
              <TextField
                margin="dense"
                label="Escalation Notes"
                type="text"
                fullWidth
                multiline
                minRows={3}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <FormControl fullWidth margin="dense" sx={{ mt: 2 }}>
                <InputLabel>Escalate To</InputLabel>
                <Select
                  multiple
                  value={selectedEscalateTo}
                  onChange={(e) => setSelectedEscalateTo(e.target.value)}
                  input={<OutlinedInput label="Escalate To" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {['Supervisor', 'Regional Head', 'HQ', 'Legal', 'Security'].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmitDialog} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
