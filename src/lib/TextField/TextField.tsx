import React from 'react';
import MUITextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import './TextField.css';

type ComponentProps = Omit<OutlinedTextFieldProps, 'variant' | 'translate'>; // Forcing only outlined design

const TextField: React.FC<ComponentProps> = props => {
  const label = `LM: ${props.label}`;
  return <MUITextField
    InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>) }}
    {...props} size="small" className='lm-ui-select-field' label={label} variant='outlined' />;
}

export default React.memo(TextField);
