import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Progressbar, { ProgressbarProps } from './Progressbar';
import { Disabled } from '../input/Input.stories';

export default {
    title: 'Components/Progressbar/Progressbar',
    component: Progressbar,
    tags: ['autodocs'],
    argTypes: {
        progress: { control: { type: 'select', options: ['zero' , 'ten' , 'twenty' , 'thirty' , 'fourty' , 'fifty' , 'sixty' , 'seventy' , 'eighty' , 'ninety' , 'hundred']}},
        labelPosition: { control: { type: 'select', options: ['none', 'bottom' , 'right' , 'bottom-floating' , 'top-floating']}},
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<ProgressbarProps> = (args) => <Progressbar {...args} />;
export const None: StoryFn<ProgressbarProps> = Template.bind({});


None.args = {
    progress: 'twenty',
    labelPosition: 'none',
}

