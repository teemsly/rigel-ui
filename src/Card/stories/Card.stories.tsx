import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Card, { CardProps } from "..";

export default {
  title: "Rigel UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Basic: Story<CardProps> = (args) => (
  <Card {...args}>
    <Card.Header>This acard header</Card.Header>
    <Card.Body>This card body</Card.Body>
    <Card.Footer>This card Footer</Card.Footer>
  </Card>
);

export const BasicUsage = Basic.bind({});
