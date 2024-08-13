import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import DropdownBasic, { DropdownBasicProps } from './DropdownBasic';

const meta = {
  title: 'Components/Dropdowns/Basic',
  component: DropdownBasic,
  parameters: {
      layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof DropdownBasic>;
export default meta;

type Story = StoryObj<typeof meta>;


// Define stories directly with named exports
export const Default: Story = {
  args: {
      label: 'DROPDOWN',
      placeholder: 'Placeholder',
      state: 'default',
      addLeftIcon: true,

  },
};

export const Disabled: Story = {
  args: {
      label: 'DROPDOWN',
      placeholder: 'Placeholder',
      state: 'disabled'

  },
};

export const Error: Story = {
  args: {
    label: 'DROPDOWN',
    placeholder: 'Placeholder',
    state: 'error',
    hint: "This is an error message"
  },
};