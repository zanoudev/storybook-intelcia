import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import PageControl, { PageControlProps } from './PageControl';

export default {
    title: 'Components/Pagination/PageControl',
    component: PageControl,
    tags: ['autodocs'],
    argTypes: {
        style: { control: { type: 'select', options: ['left', 'right', 'page-number', 'overflow']}},
        disabled: {control : { type: 'boolean'}},
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<PageControlProps> = (args) => <PageControl {...args} />;
export const Left: StoryFn<PageControlProps> = Template.bind({});
export const Right: StoryFn<PageControlProps> = Template.bind({});
export const Number: StoryFn<PageControlProps> = Template.bind({});
export const Overflow: StoryFn<PageControlProps> = Template.bind({});


Left.args = {
    style: 'left',
};

Right.args = {
    style: 'right',
};

Number.args = {
    style: 'page-number',
};

Overflow.args = {
    style: 'overflow',
};