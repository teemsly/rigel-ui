import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "..";

export default {
  title: "Rigel UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Basic: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const BasicUsage = Basic.bind({});

const Size: Story<ButtonProps> = (args) => (
  <div>
    <Button style={{ margin: "0 12px" }} {...args} size="xs">
      Button
    </Button>
    <Button style={{ margin: "0 12px" }} {...args} size="sm">
      Button
    </Button>
    <Button style={{ margin: "0 12px" }} {...args} size="md">
      Button
    </Button>
    <Button style={{ margin: "0 12px" }} {...args} size="lg">
      Button
    </Button>
    <Button style={{ margin: "0 12px" }} {...args} size="xl">
      Button
    </Button>
  </div>
);
export const ButtonSize = Size.bind({
  color: "primary",
});
