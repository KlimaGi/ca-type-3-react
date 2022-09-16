import React from 'react';
import { Button, Typography, styled } from '@mui/material';
import { Add, CheckCircle, Settings } from '@mui/icons-material';

const App: React.FC = () => {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: '888',
    margin: 5,
    '&:hover': {
      backgroundColor: 'lightblue',
    },
    '&disabled': {
      backgroundColor: 'grey',
      color: 'white',
    },
  }));
  return (
    <main>
      <h3>Boilerplate</h3>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="secondary" startIcon={<Add />} size="small">Add new post</Button>
      <Button variant="outlined" endIcon={<Settings />}>Settings</Button>
      <Button
        variant="outlined"
        color="success"
        startIcon={<CheckCircle />}
      >
        Done
      </Button>
      <Typography variant="h1" component="p" sx={{ fontSize: '2rem' }}>
        It uses h1 style but it is a p tag
      </Typography>
      <BlueButton>One button</BlueButton>
      <BlueButton>Another button</BlueButton>

    </main>
  );
};
export default App;
