import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import CheckboxBase, { CheckboxBaseProps } from './CheckboxBase';

export default {
  title: 'Components/Checkbox/Bases/CheckboxBase',
  component: CheckboxBase,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio', options: ['small', 'medium'] } },
    checked: { control: { type: 'select', options: ['unchecked', 'checked', 'indeterminate'] } },
    focused: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<CheckboxBaseProps> = (args) => <CheckboxBase {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 'medium',
    checked: 'unchecked',
    focused: false,
};
