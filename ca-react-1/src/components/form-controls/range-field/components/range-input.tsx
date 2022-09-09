import React, { useEffect, useState } from 'react';
import { FilledInput, FilledInputProps } from '@mui/material';

type RangeInputProps = Omit<FilledInputProps, 'size' | 'type' | 'multiline' | 'onChange' | 'value'> & {
  value: number,
  onChange: (e: React.FocusEvent<HTMLInputElement>, val: number) => void,
};

// sx - {} | FUN | Array< {} | FUN >

// todo: Kviesti onChange prop'są tik tuomet, kai įvyksta eventas "onBlur"

export const RangeInput: React.FC<RangeInputProps> = ({
  value,
  onChange,
  sx = [],
  ...props
}) => {
  const [privateValue, setPrivateValue] = useState(value);

  useEffect(() => {
    setPrivateValue(value);
  }, [value]);

  return (
    <FilledInput
      size="small"
      type="number"
      multiline={false}
      sx={[
        {
          flexGrow: 1,
          input: {
            pt: 1,
            textAlign: 'center',
          },
        },
        ...(sx instanceof Array ? sx : [sx]),
      ]}
      value={privateValue}
      onChange={(e) => setPrivateValue(Number(e.target.value))}
      onBlur={(e) => onChange(e as React.FocusEvent<HTMLInputElement>, Number(e.target.value))}
      {...props}
    />
  );
};
export default RangeInput;
