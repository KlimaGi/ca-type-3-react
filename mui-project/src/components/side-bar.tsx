import React from 'react';
import { Box } from '@mui/material';

const SideBar = () => (
  <Box
    bgcolor="lightblue"
    flex={1}
    p={2}
    sx={{ display: { xs: 'none', sm: 'block' } }}
  >
    side bar
  </Box>
);

export default SideBar;
