import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar';

const meta = {
  title: 'Components/Avatar/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: { type: 'select' },
    },
    background: {
      options: ['image', 'icon', 'initials'],
      control: { type: 'radio' },
    },
    image: { control: 'text' },
    initials: { control: 'text' },
    focused: { control: 'boolean' },
    onlineIndicator: { control: 'boolean' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    background: 'initials',
    focused: false,
    onlineIndicator: false,
  },
};
