import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import OptionList, { OptionListProps } from './OptionList';

const meta = {
  title: 'Components/Dropdowns/OptionList',
  component: OptionList,
  parameters: {
      layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof OptionList>;
export default meta;

type Story = StoryObj<typeof meta>;

// Define stories directly with named exports
export const Default: Story = {
    args: {
        state: 'default',
        addID: true,
        ID: '123456',
        addRightIcon: true,
        addLeftIcon: true,
        label: 'Label',
        size: 'sm',
    },
  };