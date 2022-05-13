import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const CustomRadioGroup = ({
  defaultValue,
  value,
  onChange,
  options,
  ...rest
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <RadioGroup
      row
      defaultValue={defaultValue}
      onChange={handleChange}
      value={value}
      {...rest}
    >
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
};

export default CustomRadioGroup;
