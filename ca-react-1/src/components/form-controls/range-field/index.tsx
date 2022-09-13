import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Slider,
} from '@mui/material';
import { RangeInput, RangeInputProps, InputContainer } from './components';

type RangeFieldProps = {
  min?: number,
  max?: number,
  value?: NumberRange,
  onChange?: (event: React.SyntheticEvent | Event, value: NumberRange) => void;
};

const orderRangeASC = (range: NumberRange): NumberRange => (
  range.sort((x, y) => x - y) as NumberRange);

const DEFAULT_MIN = 0;
const DEFAULT_MAX = 100;
const DEFAULT_RANGE: NumberRange = [DEFAULT_MIN, DEFAULT_MAX];

const RangeField: React.FC<RangeFieldProps> = ({
  min,
  max,
  value = DEFAULT_RANGE,
  onChange,
}) => {
  const [bounds, setBounds] = useState<NumberRange>(DEFAULT_RANGE);
  const [privateValue, setPrivateValue] = useState<NumberRange>(DEFAULT_RANGE);

  const [privateMin, privateMax] = privateValue;
  const [lowerBound, higherBound] = bounds;

  const valueInRange = (newValue: number) => newValue <= higherBound && newValue >= lowerBound;

  const handleMinValueChange: RangeInputProps['onChange'] = (e, newMinValue) => {
    setPrivateValue(orderRangeASC([newMinValue, privateMax]));
  };

  const handleMaxValueChange: RangeInputProps['onChange'] = (e, newMaxValue) => {
    setPrivateValue(orderRangeASC([privateMin, newMaxValue]));
  };

  const calcInitBounds = (): NumberRange => {
    const [minVal, maxVal] = orderRangeASC(value);

    const initMinBound = min || minVal;
    const initMaxBound = max || maxVal;

    return [initMinBound, initMaxBound];
  };

  const calcInitPrivateValue = (initBounds: NumberRange): NumberRange => {
    const [minVal, maxVal] = orderRangeASC(value);

    return value ? [minVal, maxVal] : initBounds;
  };

  useEffect(() => {
    const initBounds = calcInitBounds();
    const initPrivateValue = calcInitPrivateValue(initBounds);

    setBounds(initBounds);
    setPrivateValue(initPrivateValue);
  }, []);

  useEffect(() => {
    console.log('gauta nauja reiksme', value);
    setPrivateValue(value);
  }, [value]);

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
          onChange={(_, newValue) => setPrivateValue(newValue as NumberRange)}
          onChangeCommitted={onChange && ((e, val) => onChange(e, val as NumberRange))}
        />
      </Box>
    </Box>
  );
};

export default RangeField;
