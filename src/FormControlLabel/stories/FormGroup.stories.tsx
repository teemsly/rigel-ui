import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import FormControlLabel, { FormControlLabelProps } from "..";
import { FormGroup, Input } from "../..";
import Form from "../../Form";

export default {
  title: "Rigel UI/Data Entry/Form/Form Control Label",
  component: FormControlLabel,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Basic: Story<FormControlLabelProps> = (args) => (
  <Form>
    <FormGroup id="emailAddress">
      <FormControlLabel {...args}>Email address</FormControlLabel>
      <Input name="email" />
    </FormGroup>
  </Form>
);

export const BasicUsage = Basic.bind({});
