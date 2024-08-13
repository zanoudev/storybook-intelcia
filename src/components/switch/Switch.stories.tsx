import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Switch, { SwitchProps } from './Switch';

export default {
title: 'Components/Toggle/Switch',
component: Switch,
tags: ['autodocs'],
parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
},
} as Meta;

const Template: StoryFn<SwitchProps> = (args) => {
    const [checked, setChecked] = useState(args.checked);

    const handleChange = () => {
        setChecked(!checked);
        args.onChange();
    };

    return <Switch {...args} checked={checked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
    checked: false,
    onChange: () => {
        console.log('Switch toggled');
    },
};