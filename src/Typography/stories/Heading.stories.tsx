import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Heading, HeadingProps } from "..";

export default {
  title: "Rigel UI/Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      },
    },
  },
} as Meta;

const Basic: Story<HeadingProps> = (args) => (
  <div>
    <Heading {...args} type="h1" />
    <Heading {...args} type="h2" />
    <Heading {...args} type="h3" />
    <Heading {...args} type="h4" />
    <Heading {...args} type="h5" />
    <Heading {...args} type="h6" />
  </div>
);

export const BasicUsage = Basic.bind({});
BasicUsage.args = {
  children: "Heading",
};
