import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TableHeaderCell, { TableHeaderCellProps } from './TableHeaderCell';

export default {
    title: 'Components/Table/TableHeaderCell',
    component: TableHeaderCell,
    tags: ['autodocs'],
    argTypes: {
        color: { control: { type: 'radio', options: ['white', 'gray'] } },
        addCheckbox: { control: 'boolean' },
        addText: { control: 'boolean' },
        label: { control: 'text' },
        arrow: { control: { type: 'select', options: ['none', 'up', 'down'] } },
        helpIcon: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<TableHeaderCellProps> = (args) => <TableHeaderCell {...args} />;
export const Basic: StoryFn<TableHeaderCellProps> = Template.bind({});
export const CheckboxOnly: StoryFn<TableHeaderCellProps> = Template.bind({});
export const TextOnly: StoryFn<TableHeaderCellProps> = Template.bind({});


Basic.args = {
    addCheckbox: true,
    addText: true,
    color: 'gray',
}

CheckboxOnly.args = {
    addCheckbox: true,
    addText: false,
    color: 'gray',
}

TextOnly.args = {
    addCheckbox: false,
    addText: true,
    color: 'gray',
}




