import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    supportingText: { control: 'text' },
    disabled: { control: 'boolean' },
    focused: { control: 'boolean' },
    checked: { control: 'boolean' },
    addLabel: { control: 'boolean' },
    addSupportingText: { control: 'boolean' },
    type: { control: { type: 'radio', options: ['radio', 'checkbox'] } }, // Added control for type prop
  },
  parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const DefaultRadio = Template.bind({});
DefaultRadio.args = {
  label: 'Remember me',
  supportingText: 'Save my login details for next time.',
  addLabel: true,
  addSupportingText: true,
  type: 'radio',
};

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
  label: 'Remember me',
  supportingText: 'Save my login details for next time.',
  addLabel: true,
  addSupportingText: true,
  type: 'checkbox',
};
