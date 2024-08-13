import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Breadcrumbs, { BreadcrumbsProps } from './Breadcrumbs';
import { Disabled } from '../input/Input.stories';

export default {
    title: 'Components/Breadcrumbs/Breadcrumbs',
    component: Breadcrumbs,
    tags: ['autodocs'],
    argTypes: {
        divider: { control: { type: 'radio', options: ['slash', 'chevron'] }},
        level: { control: { type: 'radio', options: [1, 2] }},
        label: { control: { type: 'text'}},
        current: { control: { type: 'text'}},
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;
export const BreadcrumbSlash: StoryFn<BreadcrumbsProps> = Template.bind({});
export const BreadcrumbChevron: StoryFn<BreadcrumbsProps> = Template.bind({});


BreadcrumbSlash.args = {
    divider: 'slash',
    level: 1,
}


BreadcrumbChevron.args = {
    divider: 'chevron',
    level: 1,
}

