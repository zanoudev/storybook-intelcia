import React from 'react';
import { StoryObj } from '@storybook/react';
import { OptionListProps } from './OptionList';
declare const meta: {
    title: string;
    component: React.FC<OptionListProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
