import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Input, { InputProps } from "..";

export default {
  title: "Rigel UI/Data Entry/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Basic: Story<InputProps> = (args) => <Input {...args} />;

export const BasicUsage = Basic.bind({});
