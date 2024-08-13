import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import RadioList, { RadioListProps } from './RadioList';

const meta = {
  title: 'Components/Dropdowns/RadioList',
  component: RadioList,
  parameters: {
      layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof RadioList>;
export default meta;

type Story = StoryObj<typeof meta>;

// Define stories directly with named exports
export const Default: Story = {
    args: {
        state: 'default',
        addID: true,
        ID: '123456',
        addCheck: true,
        addIcon: true,
        label: 'Label',
        size: 'sm',
    },
  };