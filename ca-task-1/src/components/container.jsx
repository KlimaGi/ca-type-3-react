import React from 'react';
import { Box } from '@mui/material';
import DayItem from './day-item';

const Container = () => {
  const items = [
    {
      xy: '00', color: 'white',
    }, {
      xy: '01', color: 'powderblue',
    }, {
      xy: '02', color: 'purple',
    }, {
      xy: '03', color: '',
    }, {
      xy: '04', color: '',
    }, {
      xy: '10', color: '',
    }, {
      xy: '11', color: '',
    }, {
      xy: '12', color: '',
    }, {
      xy: '13', color: '',
    }, {
      xy: '14', color: '',
    }, {
      xy: '20', color: '',
    }, {
      xy: '21', color: '',
    }, {
      xy: '22', color: '',
    }, {
      xy: '23', color: '',
    }, {
      xy: '24', color: '',
    }, {
      xy: '30', color: '',
    }, {
      xy: '31', color: '',
    }, {
      xy: '32', color: '',
    }, {
      xy: '33', color: '',
    }, {
      xy: '34', color: '',
    },
  ];
  return (
    <Box>
      {items.map((item) => <DayItem key={item.xy} data={item} />)}

    </Box>
  );
};

export default Container;
