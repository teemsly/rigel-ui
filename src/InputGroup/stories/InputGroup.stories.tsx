import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import InputGroup, { InputGroupProps } from "..";
import { Input } from "../..";

export default {
  title: "Rigel UI/Data Entry/Input Group",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Basic: Story<InputGroupProps> = (args) => (
  <InputGroup {...args}>
    <InputGroup.Addon>Rp.</InputGroup.Addon>
    <Input />
    <InputGroup.Addon>Rp.</InputGroup.Addon>
    <Input />
    <InputGroup.Addon>IDR</InputGroup.Addon>
  </InputGroup>
);

export const BasicUsage = Basic.bind({});
