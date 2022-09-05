import React from 'react';
import logo from './logo.png';
import { Typography, Container, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';



const App: React.FC = () => (
  <Container>
    <Typography variant='h2' component='h1' align='center' >
      Mui
      <div>
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
      </div>

    </Typography>
  </Container>
);


export default App;
