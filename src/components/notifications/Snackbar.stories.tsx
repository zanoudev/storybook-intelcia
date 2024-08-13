import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Snackbar, { SnackbarProps } from './Snackbar';

export default {
    title: 'Components/Notifications/Snackbar',
    component: Snackbar,
    tags: ['autodocs'],
    argTypes: {
        type: { control: { type: 'radio', options: ['Light', 'Dark'] } },
        label: { control: 'text' },
        subtitle: { control: 'text' },
        addUndo: { control: 'boolean' },
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<SnackbarProps> = (args) => <Snackbar {...args} />;
export const LightSnackbar = Template.bind({});
export const DarkSnackbar = Template.bind({});
export const UndoSnackbar = Template.bind({});
export const SnackbarWithSubtitle = Template.bind({});

LightSnackbar.args = {
    label: 'Action validée avec succès',
    addSubtitle: false,
    theme: 'light',
    addUndo: false,
};

DarkSnackbar.args = {
    label: 'Action validée avec succès',
    addSubtitle: false,
    theme: 'dark',
    addUndo: false,
};

UndoSnackbar.args = {
    label: 'Action validée avec succès',
    addSubtitle: false,
    theme: 'light',
    addUndo: true,
};

SnackbarWithSubtitle.args = {
    label: 'Action validée avec succès',
    subtitle: 'Second line',
    addSubtitle: true,
    theme: 'light',
    addUndo: false,
};