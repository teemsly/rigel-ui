import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Section, { SectionProps } from "..";

export default {
  title: "Rigel UI/Section/Section Header",
  component: Section,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Basic: Story<SectionProps> = (args) => (
  <Section>
    <Section.Header {...args} heading="Section Heading" />
  </Section>
);

export const BasicUsage = Basic.bind({});

const EstraElement: Story<SectionProps> = (args) => (
  <Section>
    <Section.Header
      {...args}
      heading="Section Heading"
      extraElements={<div>Heding Extra Element</div>}
    />
  </Section>
);

export const WithExtraElement = EstraElement.bind({});
