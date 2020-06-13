import React from 'react';
import ReactSwitch, { ReactSwitchProps } from 'react-switch';

import { ThemeContext } from '../ThemeProvider/ThemeProvider';

import './Switch.css';

type ComponentProps = ReactSwitchProps;

const Switch: React.FC<ComponentProps> = props => {
  const palette = React.useContext(ThemeContext);

  return <ReactSwitch {...props} className='lm-ui-switch' onColor={palette.primary!.main} />;
}

export default React.memo(Switch);
