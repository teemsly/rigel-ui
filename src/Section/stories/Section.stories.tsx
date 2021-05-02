import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Section, { SectionProps } from "../";

export default {
  title: "Rigel UI/Section",
  component: Section,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Basic: Story<SectionProps> = (args) => (
  <Section
    onCollapsible={(callback: boolean) =>
      console.log("callback on collapisble", callback)
    }
    {...args}
  >
    <Section.Header heading="Section Heading" />
    <Section.Body>Section Body</Section.Body>
  </Section>
);

export const BasicUsage = Basic.bind({});

const CollapseBody: Story<SectionProps> = (args) => (
  <Section
    onCollapsible={(callback: boolean) =>
      console.log("callback on collapisble", callback)
    }
    {...args}
  >
    <Section.Header
      heading="Section Heading"
      extraElements={<div>Heading Extra Element</div>}
    />
    <Section.Body>Section Body</Section.Body>
  </Section>
);

export const Collapsible = CollapseBody.bind({});
Collapsible.args = {
  collapsible: true,
};
