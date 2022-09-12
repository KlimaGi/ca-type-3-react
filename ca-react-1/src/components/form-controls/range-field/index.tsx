import React, { useState, useEffect } from 'react';
import { Box, Typography, Slider } from '@mui/material';
import { RangeInput, RangeInputProps, InputContainer } from './components';

type Range = [number, number];

type RangeFieldProps = {
  min?: number,
  max?: number,
  value?: Range,
};

const orderRangeASC = (range: Range): Range => range.sort((x, y) => x - y) as Range;

const DEFAULT_MIN = 0;
const DEFAULT_MAX = 100;
const DEFAULT_RANGE: Range = [DEFAULT_MIN, DEFAULT_MAX];

const RangeField: React.FC<RangeFieldProps> = ({
  min,
  max,
  value = DEFAULT_RANGE,
}) => {
  const [bounds, setBounds] = useState<Range>(DEFAULT_RANGE);
  const [privateValue, setPrivateValue] = useState<Range>(DEFAULT_RANGE);

  const [privateMin, privateMax] = privateValue;
  const [lowerBound, higherBound] = bounds;

  const valueInRange = (newValue: number) => newValue <= higherBound && newValue >= lowerBound;

  const handleMinValueChange: RangeInputProps['onChange'] = (e, newMinValue) => {
    setPrivateValue(orderRangeASC([newMinValue, privateMax]));
  };

  const handleMaxValueChange: RangeInputProps['onChange'] = (e, newMaxValue) => {
    setPrivateValue(orderRangeASC([privateMin, newMaxValue]));
  };

  const calcInitBounds = (): Range => {
    const [minVal, maxVal] = orderRangeASC(value);

    const initMinBound = min || minVal;
    const initMaxBound = max || maxVal;

    return [initMinBound, initMaxBound];
  };

  const calcInitPrivateValue = (initBounds: Range): Range => {
    const [minVal, maxVal] = orderRangeASC(value);

    return value ? [minVal, maxVal] : initBounds;
  };

  useEffect(() => {
    const initBounds = calcInitBounds();
    const initPrivateValue = calcInitPrivateValue(initBounds);

    setBounds(initBounds);
    setPrivateValue(initPrivateValue);
  }, []);

  return (
    <Box sx={{ width: 300 }}>
      <InputContainer>
        <RangeInput
          value={privateMin}
          onChange={handleMinValueChange}
          newValueIsValid={valueInRange}
        />
        <Typography>Iki</Typography>
        <RangeInput
          value={privateMax}
          onChange={handleMaxValueChange}
          newValueIsValid={valueInRange}
        />

      </InputContainer>
      <Box sx={{ mx: 2 }}>
        <Slider
          value={privateValue}
          min={lowerBound}
          max={higherBound}
          onChange={(_, newValue) => setPrivateValue(newValue as Range)}
          onChangeCommitted={(_, newValue) => { console.log('onChangeCommitted', { newValue }); }}
        />
      </Box>
    </Box>
  );
};

export default RangeField;
