import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Loader, { LoaderProps } from "..";

export default {
  title: "Rigel UI/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Basic: Story<LoaderProps> = (args) => <Loader {...args} />;

export const BasicUsage = Basic.bind({});
