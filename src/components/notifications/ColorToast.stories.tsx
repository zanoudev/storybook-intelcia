import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ColorToast, { ColorToastProps } from './ColorToast';

export default {
    title: 'Components/Notifications/Color Toast',
    component: ColorToast,
    tags: ['autodocs'],
    argTypes: {
        type: { control: { type: 'select', options: ['info', 'success', 'warning', 'error'] } },
        label: { control: 'text' },
        addSubtitle: { control: 'boolean' },
        addIcon: { control: 'boolean' },
        addCloseIcon: { control: 'boolean' },
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<ColorToastProps> = (args) => <ColorToast {...args} />;
export const SuccessToast = Template.bind({});
export const InfoToast = Template.bind({});
export const WarningToast = Template.bind({});
export const ErrorToast = Template.bind({});


SuccessToast.args = {
    label: 'This is a success banner',
    addSubtitle: true,
    addIcon: true,
    addCloseIcon: true,
    type: 'success',
};

WarningToast.args = {
    label: 'This is a warning banner',
    addSubtitle: true,
    addIcon: true,
    addCloseIcon: true,
    type: 'warning',
};

ErrorToast.args = {
    label: 'This is an error banner',
    addSubtitle: true,
    addIcon: true,
    addCloseIcon: true,
    type: 'error',
};

InfoToast.args = {
    label: 'This is an info banner',
    addSubtitle: true,
    addIcon: true,
    addCloseIcon: true,
    type: 'info',
};