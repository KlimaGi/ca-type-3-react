import React from 'react';
import { Container } from '@mui/material';
import ButtonExample from './components/button-example';
import CardExample from './components/card-example';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import TestPage from './pages/test-page';


const App: React.FC = () => (
  <Container sx={{ m: 6 }}>
    <TestPage />
  </Container>
);


export default App;
