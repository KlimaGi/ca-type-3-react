import React, { useEffect, useState } from 'react';
import { FilledInput, FilledInputProps } from '@mui/material';

export type RangeInputProps = Omit<FilledInputProps, 'size' | 'type' | 'multiline' | 'onChange' | 'value'> & {
  value: number,
  onChange: (e: React.FocusEvent<HTMLInputElement>, val: number) => void,
  newValueIsValid: (val: number) => boolean
};

const RangeInput: React.FC<RangeInputProps> = ({
  value,
  onChange,
  newValueIsValid,
  sx = [],
  ...props
}) => {
  const [privateValue, setPrivateValue] = useState(value);
  // TODO: pasalinti nulius pries verte input'e

  const handleBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const newValue = Number(e.target.value);

    if (newValueIsValid(newValue)) {
      onChange(e as React.FocusEvent<HTMLInputElement>, Number(e.target.value));
    } else {
      setPrivateValue(value);
    }
  };

  useEffect(() => setPrivateValue(value), [value]);

  return (
    <FilledInput
      size="small"
      type="number"
      multiline={false}
      sx={[
        {
          flexGrow: 1,
          '.MuiInputBase-input': {
            pt: 1,
            textAlign: 'center',
          },
        },
        ...(sx instanceof Array ? sx : [sx]),
      ]}
      value={privateValue}
      onChange={(e) => setPrivateValue(Number(e.target.value))}
      onBlur={handleBlur}
      {...props}
    />
  );
};
export default RangeInput;
