import React from 'react';
import { StoryObj } from '@storybook/react';
import { DropdownBasicProps } from './DropdownBasic';
declare const meta: {
    title: string;
    component: React.FC<DropdownBasicProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const Error: Story;
