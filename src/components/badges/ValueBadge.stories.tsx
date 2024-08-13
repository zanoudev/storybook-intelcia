import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ValueBadge, { ValueBadgeProps } from './ValueBadge';

export default {
    title: 'Components/Badges/Value Badge',
    component: ValueBadge,
    tags: ['autodocs'],
    argTypes: {
        theme: { control: { type: 'radio', options: ['neutral', 'positive', 'negative'] } },
        value: { control: 'text' },
        iconDirection: { control: {type: 'radio' , options: ['up' , 'down']}},
        iconPosition: { control: {type: 'radio' , options: ['left' , 'right']}},
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<ValueBadgeProps> = (args) => <ValueBadge {...args} />;
export const ValueBadgePositive = Template.bind({});
export const ValueBadgeNegative = Template.bind({});
export const ValueBadgeNeutral = Template.bind({});

ValueBadgePositive.args = {
    theme: 'positive',
    value: '20%',
    iconDirection: 'up',
    iconPosition: 'left',
};

ValueBadgeNegative.args = {
    theme: 'negative',
    value: '-20%',
    iconDirection: 'down',
    iconPosition: 'left',
};

ValueBadgeNeutral.args = {
    theme: 'neutral',
    value: '0%',
    iconDirection: 'down',
    iconPosition: 'right',
};
