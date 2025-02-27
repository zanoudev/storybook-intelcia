import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Input, { InputProps } from './Input';

// export default {
//   title: 'Input',
//   component: Input,
// } as Meta;

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Input/Input',
  component: Input,
  parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
      label: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //args: { onClick: fn() },
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof meta>;


// Define stories directly with named exports
export const Default: Story = {
  args: {
      label: 'LABEL',
      placeholder: 'Placeholder',
      state: 'default',
      addLeftIcon: true,
      addRightIcon: true,

  },
};

export const Error = () => (
  <Input label="LABEL" placeholder="Placeholder" state="error" hint="This is a hint text to help user." />
);

export const Disabled = () => <Input label="LABEL" placeholder="Placeholder" state="disabled" />;

