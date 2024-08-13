import React from 'react';
import { StoryObj } from '@storybook/react';
import { RadioListProps } from './RadioList';
declare const meta: {
    title: string;
    component: React.FC<RadioListProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
