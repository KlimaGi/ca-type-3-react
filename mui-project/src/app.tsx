import React from 'react';
import { Box, Stack } from '@mui/material';
import SideBar from './components/side-bar';
import Feed from './components/feed';
import RightBar from './components/right-bar';
import NavBar from './components/nav-bar';
import AddEl from './components/add';

const App: React.FC = () => (
  <Box>
    <NavBar />
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <SideBar />
      <Feed />
      <RightBar />

    </Stack>
    <AddEl />

  </Box>
);
export default App;
