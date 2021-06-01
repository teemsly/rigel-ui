import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import FormGroup, { FormGroupProps } from "..";
import { Input } from "../..";

export default {
  title: "Rigel UI/Data Entry/Form/FormGroup",
  component: FormGroup,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Basic: Story<FormGroupProps> = (args) => (
  <FormGroup {...args}>
    <Input name="email" />
  </FormGroup>
);

export const BasicUsage = Basic.bind({});
BasicUsage.args = {
  id: "emailAddress",
};
