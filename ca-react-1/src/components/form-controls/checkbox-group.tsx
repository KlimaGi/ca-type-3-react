import React from 'react'
import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel } from '@mui/material';

type CheckboxOption = {
  value: string,
  label: string
  checked?: boolean,
};

type CheckboxGroupProps = {
  label: string,
  name: string,
  options: CheckboxOption[]
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label, name, options,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <FormLabel sx={{ letterSpacing: '0.05em', mb: 1 }}>{label}</FormLabel>
      <FormGroup sx={{ display: 'flex', flexDirection: 'column', px: 2 }}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={<Checkbox value={option.value} name={name} checked={option.checked} />}
            label={option.label}
          />
        ))}


      </FormGroup>
    </Box>

  )
}

export default CheckboxGroup;
