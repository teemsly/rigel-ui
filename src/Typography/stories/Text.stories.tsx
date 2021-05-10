import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Text, TextProps } from "..";

export default {
  title: "Rigel UI/Typography/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    textType: {
      control: {
        type: "select",
        options: ["muted", "primary", "info", "success", "warning", "danger"],
      },
    },
  },
} as Meta;

const Basic: Story<TextProps> = (args) => <Text {...args} />;

export const BasicUsage = Basic.bind({});
BasicUsage.args = {
  children: "Text",
};

const TextMuted: Story<TextProps> = (args) => <Text {...args} />;
export const Muted = TextMuted.bind({});
Muted.args = {
  children: "Text Muted Color",
  textType: "muted",
};

const TextPrimary: Story<TextProps> = (args) => <Text {...args} />;
export const Primary = TextPrimary.bind({});
Primary.args = {
  children: "Text Primary Color",
  textType: "primary",
};

const TextInfo: Story<TextProps> = (args) => <Text {...args} />;
export const Info = TextInfo.bind({});
Info.args = {
  children: "Text Info Color",
  textType: "info",
};

const TextSuccess: Story<TextProps> = (args) => <Text {...args} />;
export const Success = TextSuccess.bind({});
Success.args = {
  children: "Text Success Color",
  textType: "success",
};

const TextWarning: Story<TextProps> = (args) => <Text {...args} />;
export const Warning = TextWarning.bind({});
Warning.args = {
  children: "Text Warning Color",
  textType: "warning",
};

const TextDanger: Story<TextProps> = (args) => <Text {...args} />;
export const Danger = TextDanger.bind({});
Danger.args = {
  children: "Text Danger Color",
  textType: "danger",
};

const TextParagraph: Story<TextProps> = (args) => <Text {...args} />;
export const Paragraph = TextParagraph.bind({});
Paragraph.args = {
  wrapperAs: "p",
  children:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
};
