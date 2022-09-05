import React from 'react';
import { Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';

const ButtonExample = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Button variant="outlined" size="large">
        Large
      </Button>
      <Button variant="contained" size="small">
        Small
      </Button>

      <Button variant="contained" endIcon={<SendIcon />} color="error">
        Send
      </Button>

      <Button variant="contained" color="success" startIcon={<DeleteIcon />}>
        Delete
      </Button>

      <IconButton color="warning" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
    </Box>
  )
}

export default ButtonExample;
