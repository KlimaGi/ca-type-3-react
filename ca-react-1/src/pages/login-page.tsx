import React, { useState } from 'react';
import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CustomSizeCheckbox from '../components/form-controls/custom-size-checkbox';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('siunciami duomenys i serveri per globalios busenos valdymo iraki');
    console.log({ email, password, remember });
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
        backgroundImage: 'url(/image-bg.png)',
        backgroundSize: 'cover',
      }}
    >
      <Paper
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          width: 400,
          p: 4,
        }}
        elevation={10}
        onSubmit={handleSubmit}
      >
        <SecurityIcon sx={{ fontSize: 50, alignSelf: 'center' }} color="primary" />
        <Typography component="h1" variant="h4" align="center">Login</Typography>
        <TextField
          variant="filled"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="filled"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={(
            <CustomSizeCheckbox
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
          )}
          label="Remember"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ height: 60 }}
          size="large"
        >
          Sign In
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginPage;
