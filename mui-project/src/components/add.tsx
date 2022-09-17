import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const AddEl = () => (
  <Tooltip title="Delete" sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 20px)', md: 30 } }}>
    <Fab color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  </Tooltip>
);

export default AddEl;
