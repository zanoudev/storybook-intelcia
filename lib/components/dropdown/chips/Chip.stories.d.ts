import React from 'react';
import { StoryObj } from '@storybook/react';
import { ChipProps } from './Chip';
declare const meta: {
    title: string;
    component: React.FC<ChipProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
