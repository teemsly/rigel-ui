import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Sidebar, { SidebarProps } from "..";
import { TopNavigation, Page } from "../..";
import Content from "../../Content";
import Header from "../../Header/Header";

export default {
  title: "Rigel UI/Layouts/Sidebar",
  component: Sidebar,
} as Meta;

const Basic: Story<SidebarProps> = (args) => (
  <Page>
    <Sidebar {...args}>
      <Sidebar.Header minimizer>Teemsly</Sidebar.Header>
      <Sidebar.Content>Not scrollable</Sidebar.Content>
      <Sidebar.Content scrollable>
        <div style={{ height: "1000px" }}>cotnent</div>
      </Sidebar.Content>
      <Sidebar.Footer>Foorter</Sidebar.Footer>
    </Sidebar>
    <Content>
      <TopNavigation header={<Header title="Page Title" />} shadow />
      Content page
    </Content>
  </Page>
);

export const BasicUsage = Basic.bind({});
