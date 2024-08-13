import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Tooltip, { TooltipProps } from './Tooltip';

export default {
    title: 'Components/Tooltips/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    argTypes: {
        theme : { control: { type: 'radio', options: ['light', 'dark'] } },
        text: { control: { type: 'text' } },
        addSupportText: {control : { type: 'boolean'}},
        supportText: { control : { type: 'text'}},
        arrow: { control: { type: 'select', options: ['none', 'top center', 'bottom center', 'bottom left', 'bottom right', 'left', 'right']}}
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<TooltipProps> = (args) => <Tooltip {...args} />;
export const Light = Template.bind({});
export const Dark = Template.bind({});


Light.args = {
    theme: 'light',
    text: 'This is a tooltip',
    addSupportingText: false,
    arrow: 'none',
};

Dark.args = {
    theme: 'dark',
    text: 'This is a tooltip',
    addSupportingText: false,
    arrow: 'none',
};