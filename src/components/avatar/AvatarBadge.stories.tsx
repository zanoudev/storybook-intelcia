import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import AvatarBadge, { AvatarBadgeProps } from './AvatarBadge';

export default {
    title: 'Components/Avatar/AvatarBadge',
    component: AvatarBadge,
    tags: ['autodocs'],
    argTypes: {
        status: { control: { type: 'radio', options: ['approuved', 'denied'] } },
        initials: { control: { type: 'text' } },
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<AvatarBadgeProps> = (args) => <AvatarBadge {...args} />;
export const Approuved = Template.bind({});
export const Denied = Template.bind({});


Approuved.args = {
    status: 'approuved',
    initials: 'AB',
};

Denied.args = {
    status: 'denied',
    initials: 'CD',
};
