import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import GroupAvatar, {GroupAvatarProps} from './GroupAvatar';

export default {
    title: 'Components/Avatar/Group Avatar',
    component: GroupAvatar,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      size: {
        options: ['xs', 'sm', 'md'],
        control: { type: 'select' },
      },
      groupCount: {
        options: [1,2,3,4],
        control: { type: 'select' },
      },
      otherAvatars: { control: 'text' },
    },
} as Meta;

const Template: StoryFn<GroupAvatarProps> = (args) => <GroupAvatar {...args} />;
export const GroupOfOne = Template.bind({});
export const GroupOfTwo = Template.bind({});
export const GroupOfThree = Template.bind({});
export const GroupOfFour = Template.bind({});

GroupOfOne.args = {
    size: 'md',
    groupCount: 1,
    otherAvatars: '+6',
};

GroupOfTwo.args = {
    size: 'md',
    groupCount: 2,
    otherAvatars: '+6',
};

GroupOfThree.args = {
    size: 'md',
    groupCount: 3,
    otherAvatars: '+6',
};

GroupOfFour.args = {
    size: 'md',
    groupCount: 4,
    otherAvatars: '+6',
};