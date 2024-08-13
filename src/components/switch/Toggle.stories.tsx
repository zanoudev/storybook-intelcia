import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Toggle, { ToggleProps } from './Toggle';

export default {
  title: 'Components/Toggle/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    supportingText: { control: 'text' },
    disabled: { control: 'boolean' },
    focused: { control: 'boolean' },
    checked: { control: 'boolean' },
    addLabel: { control: 'boolean' },
    addSupportingText: { control: 'boolean' },
  },
  parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<ToggleProps> = (args) => <Toggle {...args} />;


export const DefaultToggle = Template.bind({});
DefaultToggle.args = {
  label: 'Remember me',
  supportingText: 'Save my login details for next time.',
  addLabel: true,
  addSupportingText: true,
  type: 'Toggle',
};
