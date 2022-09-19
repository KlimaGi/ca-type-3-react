import React, { useState } from 'react';
import {
  Box, Stack, createTheme, ThemeProvider,
} from '@mui/material';
import SideBar from './components/side-bar';
import Feed from './components/feed';
import RightBar from './components/right-bar';
import NavBar from './components/nav-bar';
import AddEl from './components/add';

const App: React.FC = () => {
  const [mode, setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />

        </Stack>
        <AddEl />

      </Box>
    </ThemeProvider>

  );
};
export default App;
