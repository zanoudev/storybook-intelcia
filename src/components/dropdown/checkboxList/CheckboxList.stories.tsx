import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import CheckboxList, { CheckboxListProps } from './CheckboxList';

const meta = {
  title: 'Components/Dropdowns/CheckboxList',
  component: CheckboxList,
  parameters: {
      layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof CheckboxList>;
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