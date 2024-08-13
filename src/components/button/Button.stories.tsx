    // import type { Meta, StoryObj } from '@storybook/react';
    import React from 'react';
    import { StoryFn, Meta } from '@storybook/react';
    import Button, { ButtonProps } from './Button';

    export default {
        title: 'Components/Button/Button',
        component: Button,
        parameters: { layout: 'centered', },
        tags: ['autodocs'],
        argTypes: {
            label: { control: 'text' },
            type: { control: {type: 'radio', options: ['primary', 'secondary', 'tertiary']}},
            size: { control: {type: 'radio', options: ['small', 'medium', 'large']}},
            backgroundColor: { control: 'color' },
            disabled: { control: 'boolean'},
            onClick: { action: 'clicked' },
        },
    } as Meta;

    const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

    export const Primary = Template.bind({});
    export const Secondary = Template.bind({});
    export const Tertiary = Template.bind({});

    Primary.args = {
        label: 'Button',
        type: 'primary',
    }

    Secondary.args = {
        label: 'Button',
        type: 'secondary',
    }

    Tertiary.args = {
        label: 'Button',
        type: 'tertiary',
    }
