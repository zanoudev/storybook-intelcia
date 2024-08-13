import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TableHeaderText, { TableHeaderTextProps } from './TableHeaderText';

export default {
    title: 'Components/Table/TableHeaderText',
    component: TableHeaderText,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        arrow: { control: { type: 'select', options: ['none', 'up', 'down'] } },
        helpIcon: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<TableHeaderTextProps> = (args) => <TableHeaderText {...args} />;
export const Basic: StoryFn<TableHeaderTextProps> = Template.bind({});
export const Disabled: StoryFn<TableHeaderTextProps> = Template.bind({});

export const HelpCircle: StoryFn<TableHeaderTextProps> = Template.bind({});
export const ArrowUp: StoryFn<TableHeaderTextProps> = Template.bind({});
export const ArrowDown: StoryFn<TableHeaderTextProps> = Template.bind({});
export const ArrowUpHelpCircle: StoryFn<TableHeaderTextProps> = Template.bind({});
export const ArrowDownHelpCircle: StoryFn<TableHeaderTextProps> = Template.bind({});

Basic.args = {
    arrow: 'none',
    helpIcon: false,
}

Disabled.args = {
    arrow: 'none',
    disabled: true,
}

HelpCircle.args = {
    arrow: 'none',
    helpIcon: true,
}
ArrowUp.args = {
    arrow: 'up',
    helpIcon: false,
}
ArrowDown.args = {
    arrow: 'down',
    helpIcon: false,
}
ArrowUpHelpCircle.args = {
    arrow: 'up',
    helpIcon: false,
}
ArrowDownHelpCircle.args = {
    arrow: 'down',
    helpIcon: false,
}




