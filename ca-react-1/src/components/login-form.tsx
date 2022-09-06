import React from 'react';
import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CustomSizeCheckbox from './custom-size-checkbox'

const LoginForm = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
        backgroundImage: 'url(/)',
        background: 'cover',
      }}>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          width: 400,
          p: 4,
        }}>
        <SecurityIcon sx={{ fontSize: 50, alignSelf: 'center' }} />
        <Typography component="h1" variant="h3" align='center'>Login Form</Typography>
        <TextField variant="filled" label="Email" />
        <TextField variant="filled" label="Password" />
        <FormControlLabel
          control={<CustomSizeCheckbox defaultChecked size={40} />}
          label="Remember"
        />
        <Button variant="contained" sx={{ height: 60 }} size="large">Sign In</Button>
      </Paper>
    </Box>
  )
}

export default LoginForm;
