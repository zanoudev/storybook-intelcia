import React from 'react';
import { StoryObj } from '@storybook/react';
import { CheckboxListProps } from './CheckboxList';
declare const meta: {
    title: string;
    component: React.FC<CheckboxListProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
