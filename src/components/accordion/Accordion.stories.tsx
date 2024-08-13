import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Accordion, { AccordionProps } from './Accordion';

export default {
    title: 'Components/Accordion/Accordion Item',
    component: Accordion,
    tags: ['autodocs'],
    argTypes: {
        state: { control: { type: 'radio', options: ['open', 'closed'] } },
        title: { control: { type: 'text' } },
        addMedia: { control: { type: 'boolean'}},
        mediaType: { control: { type: 'radio', options: ['img', 'video', 'none'] } },
        mediaURL: { control: { type: 'text' } },
    },
    parameters: { layout: 'centered', },
} as Meta<AccordionProps>;

const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;
export const AccordionClosed: StoryFn<AccordionProps> = Template.bind({});
export const AccordionOpen: StoryFn<AccordionProps> = Template.bind({});
export const AccordionWithImage: StoryFn<AccordionProps> = Template.bind({});
export const AccordionWithVideo: StoryFn<AccordionProps> = Template.bind({});

AccordionClosed.args = {
    state: 'closed',
    addMedia: false,
};

AccordionOpen.args = {
    state: 'open',
    addMedia: false,
};

AccordionWithImage.args = {
    state: 'open',
    addMedia: true,
    mediaType: 'img',
};

AccordionWithVideo.args = {
    state: 'open',
    addMedia: true,
    mediaType: 'video'

};
