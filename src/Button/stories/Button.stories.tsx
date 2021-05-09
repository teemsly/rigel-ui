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
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "info", "success", "warning", "danger"],
      },
    },
    shape: {
      control: {
        type: "radio",
        options: ["rectangle", "rounded", "semiCircle"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
    appearance: {
      control: {
        type: "radio",
        options: ["subtle", "link", "default", "outline"],
      },
    },
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

const Outline: Story<ButtonProps> = (args) => (
  <div>
    <Button
      style={{ margin: "0 12px" }}
      {...args}
      appearance="outline"
      color="primary"
    >
      Button
    </Button>
    <Button
      style={{ margin: "0 12px" }}
      {...args}
      appearance="outline"
      color="success"
    >
      Button
    </Button>
    <Button
      style={{ margin: "0 12px" }}
      {...args}
      appearance="outline"
      color="info"
    >
      Button
    </Button>
    <Button
      style={{ margin: "0 12px" }}
      {...args}
      appearance="outline"
      color="warning"
    >
      Button
    </Button>
    <Button
      style={{ margin: "0 12px" }}
      {...args}
      appearance="outline"
      color="danger"
    >
      Button
    </Button>
  </div>
);
export const ButtonOutline = Outline.bind({
  appearance: "outline",
});
