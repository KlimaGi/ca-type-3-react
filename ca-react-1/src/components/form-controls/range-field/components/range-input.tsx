import React from 'react';
import { FilledInput, FilledInputProps } from '@mui/material';

type RangeInputProps = Omit<FilledInputProps, 'size'>;

// sx - {} | FUN | Array< {} | FUN >

// todo: Kviesti onChange prop'są tik tuomet, kai įvyksta eventas "onBlur"

export const RangeInput: React.FC<RangeInputProps> = ({ sx = [], ...props }) => (
  <FilledInput
    size="small"
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
    {...props}
  />
);

export default RangeInput;
