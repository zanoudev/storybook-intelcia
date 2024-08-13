import React from 'react';
import { StoryObj } from '@storybook/react';
import { InputProps } from './Input';
declare const meta: {
    title: string;
    component: React.FC<InputProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        label: {
            control: "text";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Error: () => React.JSX.Element;
export declare const Disabled: () => React.JSX.Element;
