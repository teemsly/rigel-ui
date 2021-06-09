import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Select, { SelectProps } from "..";
import { Form } from "../..";

export default {
  title: "Rigel UI/Data Entry/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
} as Meta;

const cityPayload = [
  {
    label: "Jakarta Utara",
    value: "jktutr",
    status: { date: "12-12-2021", text: "active" },
    area: "Jakarta",
  },
  {
    label: "Jakarta Barat",
    value: "jktbrt",
    status: { date: "12-12-2021", text: "active" },
    area: "Jakarta",
  },
  {
    label: "Jakarta Timur",
    value: "jkttmr",
    status: { date: "12-12-2021", text: "active" },
    area: "Jakarta",
  },
  {
    label: "Kota Bandung",
    value: "bdg",
    status: { date: "12-12-2021", text: "inactive" },
    area: "Jawa Barat",
  },
  {
    label: "Karawang",
    value: "krw",
    status: { date: "12-12-2021", text: "inactive" },
    area: "Jawa Barat",
  },
];

const Basic: Story<SelectProps> = (args) => (
  <Form>
    <Form.FormGroup id="country">
      <Form.Label>Country</Form.Label>
      <Select
        {...args}
        options={[
          { label: "Jakarta", value: "jkt" },
          { label: "Bandung", value: "bdg" },
        ]}
        placeholder="Select country"
        defaultValue="jkt"
        // value="bdg"
      />
    </Form.FormGroup>
  </Form>
);

export const BasicUsage = Basic.bind({});

const BasicGroupBy: Story<SelectProps> = (args) => (
  <Form>
    <Form.FormGroup id="City">
      <Form.Label>City</Form.Label>
      <Select {...args} />
    </Form.FormGroup>
  </Form>
);

export const UsingGroupBy = BasicGroupBy.bind({});
UsingGroupBy.args = {
  options: cityPayload,
  placeholder: "Select city",
  defaultValue: "bdg",
  groupBy: "area",
};

const BasicCustomSelected: Story<SelectProps> = (args) => (
  <Form>
    <Form.FormGroup id="City">
      <Form.Label>City</Form.Label>
      <Select {...args} />
    </Form.FormGroup>
  </Form>
);

export const CustomSelectedValue = BasicCustomSelected.bind({});
CustomSelectedValue.args = {
  options: cityPayload,
  placeholder: "Select city",
  groupBy: "area",
  renderSelected: (option: any) => {
    return <div>{option?.value}</div>;
  },
  onShow: () => {
    console.log("show");
  },
  onhide: () => {
    console.log("hide");
  },
};
