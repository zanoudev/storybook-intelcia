import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Pagination, { PaginationProps } from './Pagination';

export default {
    title: 'Components/Pagination/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    argTypes: {
        style: { control: { type: 'select', options: ['left', 'right', 'page-number', 'overflow']}},
        disabled: {control : { type: 'boolean'}},
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<PaginationProps> = (args) => <Pagination {...args} />;
export const Default: StoryFn<PaginationProps> = Template.bind({});
export const Overflow: StoryFn<PaginationProps> = Template.bind({});
export const NoOverflow: StoryFn<PaginationProps> = Template.bind({});


Default.args = {
    style: 'single-page',
    label: 'Page 1 of 10'
};

Overflow.args = {
    style: 'overflow',
    label: 'Page 1 of 100'
};

NoOverflow.args = {
    style: 'no-overflow',
    label: 'Page 1 of 100'
};