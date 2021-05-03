import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Tile, { TileProps } from "..";

export default {
  title: "Rigel UI/Tile",
  component: Tile,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Basic: Story<TileProps> = (args) => (
  <div style={{ width: "500px", display: "flex" }}>
    <Tile {...args}>
      <div></div>
    </Tile>
    <Tile title="Company" subtitle="Company's Goals" border="borderSolid">
      <div></div>
    </Tile>
    <Tile title="Teams" subtitle="Teams's Goals" border="borderSolid">
      <div></div>
    </Tile>
  </div>
);

export const BasicUsage = Basic.bind({});
BasicUsage.args = {
  title: "Blank Project",
  subtitle: "Start from scratch",
};
