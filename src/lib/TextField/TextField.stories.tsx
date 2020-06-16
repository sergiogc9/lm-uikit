import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, radios } from "@storybook/addon-knobs";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ThemeProvider from 'lib/ThemeProvider';

import TextField from './TextField';

export default {
    component: TextField,
    title: 'TextField',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$|.*Props$/,
    decorators: [withKnobs]
};

const getKnobsProps = () => ({
    disabled: boolean("Disabled", false),
    error: boolean("Error", false),
    label: text("Label", "Awesome"),
    color: radios("Color", { Primary: 'primary', Secondary: 'secondary' }, 'primary')
});

export const TextFieldProps = {
    label: 'Awesome'
};

export const actionsData = {
    onChange: action('Changed'),
    onBlur: action('Blur')
};

export const Default = () => <ThemeProvider ><TextField {...TextFieldProps} {...actionsData} {...getKnobsProps()} /></ThemeProvider>;

export const DefaultWithoutProvider = () => <TextField {...TextFieldProps} {...actionsData} {...getKnobsProps()} />;

export const WithSearchIcon = () => <ThemeProvider ><TextField {...TextFieldProps} {...actionsData} InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>) }} {...getKnobsProps()} /></ThemeProvider>;

export const FullWidth = () => <ThemeProvider ><TextField {...TextFieldProps} {...actionsData} fullWidth {...getKnobsProps()} /></ThemeProvider>;
