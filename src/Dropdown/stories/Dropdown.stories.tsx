import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Dropdown, { DropdownProps } from "..";

export default {
  title: "Rigel UI/Navigation/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Basic: Story<DropdownProps> = (args) => (
  <Dropdown activeKey="opt-1" {...args}>
    <Dropdown.Item eventKey="opt-1">Edit project details</Dropdown.Item>
    <Dropdown.Item eventKey="opt-2">Duplicated</Dropdown.Item>
    <Dropdown.Item eventKey="opt-3">Import</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item eventKey="opt-4">Export Data</Dropdown.Item>
  </Dropdown>
);
export const BasicUsage = Basic.bind({});
BasicUsage.args = {
  toggle: "Dropdown Toggle",
};
