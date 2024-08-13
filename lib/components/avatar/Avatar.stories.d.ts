import React from 'react';
import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: React.FC<import("./Avatar").AvatarProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        size: {
            options: string[];
            control: {
                type: "select";
            };
        };
        background: {
            options: string[];
            control: {
                type: "radio";
            };
        };
        image: {
            control: "text";
        };
        initials: {
            control: "text";
        };
        focused: {
            control: "boolean";
        };
        onlineIndicator: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
