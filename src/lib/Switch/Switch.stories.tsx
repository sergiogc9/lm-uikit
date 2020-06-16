import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from "@storybook/addon-knobs";
import ThemeProvider from 'lib/ThemeProvider';

import Switch from './Switch';

export default {
    component: Switch,
    title: 'Switch',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$|.*Props$/,
    decorators: [withKnobs]
};

const getKnobsProps = (props: any) => ({
    checked: boolean("Checked", props.checked || false)
});

export const SwitchProps = {
    label: 'Awesome'
};

export const actionsData = {
    onChange: action('Changed')
};

export const Default = () => <ThemeProvider ><Switch {...SwitchProps} {...actionsData} {...getKnobsProps({ checked: true })} /></ThemeProvider>;

export const DefaultWithoutProvider = () => <Switch {...SwitchProps} {...actionsData} {...getKnobsProps({ checked: true })} />;

export const UnChecked = () => <ThemeProvider ><Switch {...SwitchProps} {...actionsData} {...getKnobsProps({ checked: false })} /></ThemeProvider>;

export const Long = () => <ThemeProvider ><Switch {...SwitchProps} {...actionsData} {...getKnobsProps({ checked: true })} width={125} /></ThemeProvider>;
