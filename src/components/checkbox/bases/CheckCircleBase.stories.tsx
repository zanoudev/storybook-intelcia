import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import CheckCircleBase, { CheckCircleBaseProps } from './CheckCircleBase';

export default {
  title: 'Components/Checkbox/Bases/CheckCircleBase',
  component: CheckCircleBase,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio', options: ['small', 'medium'] } },
    checked: { control: 'boolean' },
    focused: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<CheckCircleBaseProps> = (args) => <CheckCircleBase {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 'medium',
    checked: true,
    focused: false,
    disabled: false,
};
