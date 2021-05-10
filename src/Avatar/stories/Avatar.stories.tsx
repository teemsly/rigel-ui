import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Avatar, { AvatarProps } from "..";

export default {
  title: "Rigel UI/Avatar",
  component: Avatar,
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
        options: ["rectangle", "rounded", "circle"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
  },
} as Meta;

const Basic: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const BasicUsage = Basic.bind({});
BasicUsage.args = {
  children: "av",
};

const Image: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const AvatarImage = Image.bind({});
AvatarImage.args = {
  src: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
};
