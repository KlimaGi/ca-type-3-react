import React, { useState } from 'react';
import { Box, Typography, Slider } from '@mui/material';
import { RangeInput, InputContainer } from './components';

type RangeFieldProps = {
  min?: number,
  max?: number,
};

type RangeInputChangeHandler = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

const RangeField: React.FC<RangeFieldProps> = ({ min = 0, max = 100 }) => {
  const [privateValue, setPrivateValue] = useState<[number, number]>([min, max]);
  const [privateMinValue, privateMaxValue] = privateValue;

  const handleMinValueChange: RangeInputChangeHandler = (e) => {
    // todo: nustatyti reiksme tik tuomet, jeigu ji nera mazesne uz props'a  - min
    const minValue = Number(e.target.value) >= min ? Number(e.target.value) : min;
    setPrivateValue([
      minValue,
      privateMaxValue,
    ]);
  };
  const handleMaxValueChange: RangeInputChangeHandler = (e) => {
    //  todo: nustatyti reiksme tik tuomet, jeigu ji nera didesne uz props'a  - max
    const maxValue = Number(e.target.value) <= max ? Number(e.target.value) : max;
    setPrivateValue([
      privateMinValue,
      maxValue,
    ]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <InputContainer>
        <RangeInput
          value={privateMinValue}
          onChange={handleMinValueChange}
        />
        <Typography>Iki</Typography>
        <RangeInput value={privateMaxValue} onChange={handleMaxValueChange} />

      </InputContainer>
      <Box sx={{ mx: 2 }}>
        <Slider value={privateValue} min={min} max={max} />
      </Box>
    </Box>
  );
};

export default RangeField;
