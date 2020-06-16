import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from "@storybook/addon-knobs";
import ThemeProvider from 'lib/ThemeProvider';

import Select from './Select';

const selectOptions = [
    { label: "January", value: "1" },
    { label: "February", value: "2" },
    { label: "March", value: "3" },
    { label: "April", value: "4" },
    { label: "May", value: "5" },
    { label: "June", value: "6" },
    { label: "July", value: "7" },
    { label: "August", value: "8" },
    { label: "September", value: "9" },
    { label: "October", value: "10" },
    { label: "November", value: "11" },
    { label: "December", value: "12" },
]

export default {
    component: Select,
    title: 'Select',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$|.*Props$/,
    decorators: [withKnobs]
};

const getKnobsProps = () => ({
    isDisabled: boolean("Disabled", false),
    isLoading: boolean("Loading", false)
});

export const SelectProps = {
    options: selectOptions
};

export const actionsData = {
    onChange: action('Changed')
};

export const Default = () => <ThemeProvider ><Select {...SelectProps} {...actionsData} {...getKnobsProps()} /></ThemeProvider>;

export const DefaultWithoutProvider = () => <Select {...SelectProps} {...actionsData} {...getKnobsProps()} />;

export const Multi = () => <ThemeProvider ><Select {...SelectProps} {...actionsData} {...getKnobsProps()} isMulti /></ThemeProvider>;

export const WithOptionsSelected = () => <ThemeProvider ><Select {...SelectProps} {...actionsData} {...getKnobsProps()} isMulti defaultValue={[selectOptions[0], selectOptions[3]]} /></ThemeProvider>;

export const AutoFocus = () => <ThemeProvider ><Select {...SelectProps} {...actionsData} fullWidth {...getKnobsProps()} autoFocus={true} /></ThemeProvider>;
