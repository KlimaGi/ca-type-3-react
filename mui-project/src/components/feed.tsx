import React from 'react';
import {
  Box,
} from '@mui/material';
import Post from './post';

const Feed = () => (
  <Box flex={4} p={2}>

    <Post />
    <Post />
    <Post />
    <Post />

  </Box>
);

export default Feed;
