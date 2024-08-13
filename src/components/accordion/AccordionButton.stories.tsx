import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import AccordionButton, { AccordionButtonProps } from './AccordionButton';

export default {
    title: 'Components/Accordion/Accordion Button',
    component: AccordionButton,
    tags: ['autodocs'],
    argTypes: {
        state: { control: { type: 'select', options: ['open', 'closed'] } },
    },
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn<AccordionButtonProps> = (args) => <AccordionButton {...args} />;
export const AccordionButtonOpen = Template.bind({});
export const AccordionButtonClosed = Template.bind({});

AccordionButtonOpen.args = {
    state: 'open',
};

AccordionButtonClosed.args = {
    state: 'closed',
};