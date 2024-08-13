import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Chip, { ChipProps } from './Chip';

const meta = {
  title: 'Components/Dropdowns/Chip',
  component: Chip,
  parameters: {
      layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof Chip>;
export default meta;

type Story = StoryObj<typeof meta>;

// Define stories directly with named exports
export const Default: Story = {
    args: {
        state: 'default',
        addAvatar: true,
        size: 'sm',
        addIconLeft: false,
        addIconRight: false,
    },
  };