import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import RadioBase, { RadioBaseProps } from './RadioBase';

export default {
  title: 'Components/Checkbox/Bases/RadioBase',
  component: RadioBase,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio', options: ['small', 'medium'] } },
    checked: { control: 'boolean' },
    focused: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<RadioBaseProps> = (args) => <RadioBase {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 'medium',
    checked: false,
    focused: false,
    disabled: false,
};
