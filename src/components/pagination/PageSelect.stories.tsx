import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import PageSelect, { PageSelectProps } from './PageSelect';

export default {
    title: 'Components/Pagination/PageSelect',
    component: PageSelect,
    tags: ['autodocs'],
    argTypes: {
        pressed: {control : { type: 'boolean'}},
        disabled: {control : { type: 'boolean'}},
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<PageSelectProps> = (args) => <PageSelect {...args} />;
export const Default: StoryFn<PageSelectProps> = Template.bind({});
export const Pressed: StoryFn<PageSelectProps> = Template.bind({});
export const Disabled: StoryFn<PageSelectProps> = Template.bind({});


Default.args = {
    pressed: false,
};

Pressed.args = {
    pressed: true,
};

Disabled.args = {
    pressed: false,
    disabled: true,
};