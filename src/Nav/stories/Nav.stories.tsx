import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Nav, { NavItemProps } from "..";

export default {
  title: "Rigel UI/Navigation/Nav",
  component: Nav,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Basic: Story<NavItemProps> = (args) => (
  <Nav {...args}>
    <Nav.Item href="/nav-item-1" active>
      Nav Item 1
    </Nav.Item>
    <Nav.Item href="/nav-item-2">Nav Item 2</Nav.Item>
    <Nav.Item href="/nav-item-3">Nav Item 3</Nav.Item>
  </Nav>
);

export const BasicUsage = Basic.bind({});

const Subtle: Story<NavItemProps> = (args) => (
  <Nav {...args}>
    <Nav.Item href="/nav-item-1" active>
      Activity
    </Nav.Item>
    <Nav.Item href="/nav-item-2">Overview</Nav.Item>
    <Nav.Item href="/nav-item-3">Massages</Nav.Item>
  </Nav>
);

export const NavSubtle = Subtle.bind({});
NavSubtle.args = {
  appearance: "subtle",
};
