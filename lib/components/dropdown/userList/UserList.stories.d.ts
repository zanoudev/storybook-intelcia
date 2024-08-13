import React from 'react';
import { StoryObj } from '@storybook/react';
import { UserListProps } from './UserList';
declare const meta: {
    title: string;
    component: React.FC<UserListProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
