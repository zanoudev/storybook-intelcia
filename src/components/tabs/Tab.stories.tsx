import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Tab, { TabProps } from './Tab';
import { Disabled } from '../input/Input.stories';

export default {
    title: 'Components/Tabs/Tab',
    component: Tab,
    tags: ['autodocs'],
    argTypes: {
        name: { control: { type: 'text'}},
        addOn: { control: { type: 'radio', options: ['icon', 'badge'] }},
        disabled: {control : { type: 'boolean'}},
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<TabProps> = (args) => <Tab {...args} />;
export const LineTab: StoryFn<TabProps> = Template.bind({});
export const RoundedTab: StoryFn<TabProps> = Template.bind({});

export const Icon: StoryFn<TabProps> = Template.bind({});
export const Badge: StoryFn<TabProps> = Template.bind({});
export const DisabledTab: StoryFn<TabProps> = Template.bind({});



LineTab.args = {
    rounded: false,
    addOn: 'none',
    disabled: false,
};

LineTab.args = {
    addOn: 'none',
    disabled: false,
    rounded: true,
};

Icon.args = {
    addOn: 'icon',
    disabled: false,
};

Badge.args = {
    addOn: 'badge',
    disabled: false,
}

DisabledTab.args = {
    addOn: 'none',
    disabled: true,
}