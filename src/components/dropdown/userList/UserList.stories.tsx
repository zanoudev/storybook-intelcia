import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import UserList, { UserListProps } from './UserList';

const meta = {
  title: 'Components/Dropdowns/UserList',
  component: UserList,
  parameters: {
      layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof UserList>;
export default meta;

type Story = StoryObj<typeof meta>;

// Define stories directly with named exports
export const Default: Story = {
    args: {
        name: 'User Name',
        state: 'default',
        addID: true,
        ID: '123456',
        addAvatar: false,
        addLabel: true,
        label: 'label',
        size: 'md',
    },
  };