import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import FormControl, { FormControlProps } from "..";
import { FormControlLabel, FormGroup } from "../..";
import Form from "../../Form";

export default {
  title: "Rigel UI/Data Entry/Form/Form Control",
  component: FormControl,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Basic: Story<FormControlProps> = (args) => (
  <Form>
    <FormGroup id="emailAddress">
      <FormControlLabel>Emaill Address</FormControlLabel>
      <FormControl {...args} />
    </FormGroup>
  </Form>
);

export const BasicUsage = Basic.bind({});
BasicUsage.args = {
  errorMessage: "Email address is required",
};
