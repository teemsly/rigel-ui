import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Section, { SectionProps } from "..";

export default {
  title: "Rigel UI/Section/Section Body",
  component: Section,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<SectionProps> = (args) => (
  <Section>
    <Section.Body {...args}>Content on the section body</Section.Body>
  </Section>
);

export const SectionBody = Template.bind({});
