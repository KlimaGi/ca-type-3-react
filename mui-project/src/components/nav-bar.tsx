import * as React from 'react';
import {
  styled, AppBar, Toolbar, Typography,
} from '@mui/material';
import { Pets } from '@mui/icons-material';

const StyleToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const NavBar = () => (
  <AppBar position="sticky">
    <StyleToolBar>
      <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>NAVBAR</Typography>
      <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
    </StyleToolBar>

  </AppBar>
);

export default NavBar;
