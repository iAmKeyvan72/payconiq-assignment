import React from 'react';
import { MenuItem, TextField } from '@mui/material';

const CustomSelect = ({ id, label, value, onChange, options, ...rest }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <TextField
      select
      id={id}
      label={label}
      onChange={handleChange}
      value={value}
      variant="standard"
      {...rest}
    >
      {options?.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CustomSelect;
