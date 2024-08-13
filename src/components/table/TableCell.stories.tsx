import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TableCell, { TableCellProps } from './TableCell';

export default {
    title: 'Application Components/Table/TableCell',
    component: TableCell,
    tags: ['autodocs'],
    argTypes: {
        style: { control: { type: 'select', options: [ 'lead-text', 'lead-checkbox', 'lead-radio', 'lead-toggle', 'lead-avatar', 'avatar-group', 'lead-avatar-checkbox', 'lead-avatar-radio', 'lead-avatar-toggle', 'badge', 'badge-multiple', 'trend', 'action-icon', 'progress-bar', 'payment-method', 'star-ratings'] } },
        addSupportingText: { control: 'boolean' },
        label: { control: 'text' },
        supportingText: { control: 'text' },
        disabled: { control: 'boolean' },
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<TableCellProps> = (args) => <TableCell {...args} />;
export const Text: StoryFn<TableCellProps> = Template.bind({});
export const Checkbox: StoryFn<TableCellProps> = Template.bind({});
export const Radio: StoryFn<TableCellProps> = Template.bind({});


Text.args = {
    style: 'lead-text',
    addSupportingText: true,
    label: 'Jone Doe',
    supportingText: 'jone@intelcia.com'
}

Checkbox.args = {
    style: 'lead-checkbox',
    addSupportingText: true,
    label: 'Jone Doe',
    supportingText: 'jone@intelcia.com'
}

Radio.args = {
    style: 'lead-radio',
    addSupportingText: true,
    label: 'Jone Doe',
    supportingText: 'jone@intelcia.com'
}



