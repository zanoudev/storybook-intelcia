import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';

export default {
    title: 'Components/Badges/Badge Classic',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        state: { control: { type: 'select', options: ['gray', 'success', 'warning', 'error', 'primary'] } },
        label: { control: 'text' },
        addAvatar: { control: 'boolean' },
        addLeftIcon: { control: 'boolean' },
        addRightIcon: { control: 'boolean' },
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;
export const BadgeClassic = Template.bind({});
export const BadgeRounded = Template.bind({});

BadgeClassic.args = {
    label: 'Label',
    state: 'primary',
    addAvatar: true,
    addRightIcon: true,
    addLeftIcon: false,
    rounded: false,
};

BadgeRounded.args = {
    label: 'Label',
    state: 'primary',
    addAvatar: true,
    addRightIcon: true,
    addLeftIcon: false,
    rounded: true,
};
