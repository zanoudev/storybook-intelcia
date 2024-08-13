import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import FileUpload from './FileUpload';
import { Disabled } from '../input/Input.stories';

export default {
    title: 'Components/FileUpload/FileUpload',
    component: FileUpload,
    tags: ['autodocs'],
    parameters: { layout: 'centered', },
} as Meta;

const Template: StoryFn = (args) => <FileUpload {...args} />;
export const Default: StoryFn = Template.bind({});
// export const RoundedFileUpload: StoryFn = Template.bind({});

// export const Icon: StoryFn = Template.bind({});
// export const Badge: StoryFn = Template.bind({});
// export const DisabledFileUpload: StoryFn = Template.bind({});



// LineFileUpload.args = {
//     rounded: false,
//     addOn: 'none',
//     disabled: false,
// };

// LineFileUpload.args = {
//     addOn: 'none',
//     disabled: false,
//     rounded: true,
// };

// Icon.args = {
//     addOn: 'icon',
//     disabled: false,
// };

// Badge.args = {
//     addOn: 'badge',
//     disabled: false,
// }

// DisabledFileUpload.args = {
//     addOn: 'none',
//     disabled: true,
// }