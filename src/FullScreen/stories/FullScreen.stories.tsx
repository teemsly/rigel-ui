import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import FullScreen, { FullScreenProps } from "..";

export default {
  title: "Rigel UI/Full Screen",
  component: FullScreen,
} as Meta;

const Basic: Story<FullScreenProps> = (args) => (
  <FullScreen {...args}>
    <FullScreen.Header>Children</FullScreen.Header>
    <FullScreen.Content scrollable>
      <div style={{ height: "1000px" }}>Full screen content</div>
    </FullScreen.Content>
  </FullScreen>
);

export const BasicUsage = Basic.bind({});
