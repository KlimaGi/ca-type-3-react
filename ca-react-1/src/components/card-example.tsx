import React from 'react';
import { Box, CardMedia, Typography, Button, Paper } from '@mui/material';

const CardExample: React.FC = () => {
  return (
    <Paper
      elevation={8}
      sx={{
        display: 'flex',
        flexGrow: 1,
        alignSelf: 'flex-start',
        borderRadius: 0.5,
        overflow: 'hidden',
        width: 650,
      }}>
      <Box sx={{ flexBasis: '50%' }}>
        <CardMedia
          image="http://unsplash.it/400/400"
          sx={{ width: '100%', height: '100%' }}
        />
      </Box>
      <Box sx={{
        flexBasis: '50%',
        px: 4,
        py: 6
      }}>
        <Box sx={{ px: 6, py: 4, height: '100%' }}>
          <Typography variant='h5'>Bea Hold</Typography>
          <Typography variant='subtitle1'>By studio and friends</Typography>
          <Typography sx={{ mt: 6, mb: 6 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nemo dolorum accusamus esse aspernatur est rem omnis deleniti ab necessitatibus?</Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Typography variant="h5">78$</Typography>
            <Button
              variant="contained"
              sx={{ borderRadius: 0.5, py: 1.5, px: 2 }}
            >Buy now</Button>
          </Box>
        </Box>

      </Box>

    </Paper>
  )
}

export default CardExample;
