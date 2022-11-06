/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { Box } from '@mui/material';

const DayItem = ({ xy, color }) => (
  <Box>
    {xy} | {color}
  </Box>
);

export default DayItem;
