import React from 'react';
import MUITextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField';

import './TextField.css';

type ComponentProps = Omit<OutlinedTextFieldProps, 'variant' | 'translate'>; // Forcing only outlined design

const TextField: React.FC<ComponentProps> = props => {
  const label = `LM: ${props.label}`;
  return <MUITextField {...props} size="small" className='lm-ui-select-field' label={label} variant='outlined' />;
}

export default React.memo(TextField);
