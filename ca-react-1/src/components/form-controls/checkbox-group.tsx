import React from 'react'
import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel } from '@mui/material';

export type CheckboxOption = {
  value: string,
  label: string,
};

export type CheckboxGroupProps = {
  label: string,
  name: string,
  options: CheckboxOption[],
  value?: CheckboxOption[],
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: CheckboxOption[]) => void
};

export type MutateOptions = (value: CheckboxOption[], option: CheckboxOption) => CheckboxOption[];

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label, name, options, value, onChange,
}) => {
  const checkboxGroupRef = React.useRef<null | HTMLDivElement>(null);
  const selectedValues = value && value.map(x => x.value);

  const createAppendedValue: MutateOptions = (currentValue, option) => [...currentValue, option];

  const createReducedValue: MutateOptions = (currentValue, option) => currentValue.filter((x) => x.value !== option.value);

  const createControlledValue = (
    currentValue: CheckboxOption[],
    checked: boolean,
    newOption: CheckboxOption,
  ): CheckboxOption[] => (checked ? createAppendedValue(currentValue, newOption) : createReducedValue(currentValue, newOption));

  const createUncontrolledValue = (): CheckboxOption[] => {
    const optionContainer = checkboxGroupRef.current as HTMLDivElement;
    const checkboxes = Array.from(
      optionContainer.querySelectorAll<HTMLInputElement>('input[type=checkbox]'),
    );
    return checkboxes.filter((checkbox) => checkbox.checked).map(
      (checkbox) => options.find((option) => option.value === checkbox.value),
    ) as CheckboxOption[];
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    newOption: CheckboxOption,
  ): void => {

    if (onChange) {
      const componentIsControlled = value !== undefined;

      const newValue: CheckboxOption[] = componentIsControlled
        ? createControlledValue(value, checked, newOption)
        : createUncontrolledValue();

      onChange(event, newValue);
    }
  };

  return (
    <Box >
      <FormLabel sx={{ letterSpacing: '0.05em', mb: 1 }}>{label}</FormLabel>
      <FormGroup sx={{ display: 'flex', flexDirection: 'column', px: 2 }} ref={checkboxGroupRef}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={(
              <Checkbox
                value={option.value}
                name={name}
                onChange={(e, newChecked) => handleCheckboxChange(
                  e, newChecked, option
                )}
                checked={selectedValues?.includes(option.value)}
              />
            )}
            label={option.label}
          />
        ))}
      </FormGroup>
    </Box>
  )
}

export default CheckboxGroup;
