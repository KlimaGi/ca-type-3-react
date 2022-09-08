import React from 'react'
import { Box, Typography, Slider } from '@mui/material';
import { RangeInput, InputContainer } from './components';


const RangeField: React.FC = () => {
  return (
    <Box sx={{ width: 300 }}>
      <InputContainer>
        <RangeInput />
        <Typography>Iki</Typography>
        <RangeInput />

      </InputContainer>
      <Box sx={{ mx: 2 }}>
        <Slider value={[75, 120]} min={15} max={150} />
      </Box>
    </Box>
  )
}

export default RangeField;
