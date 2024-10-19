import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { DynamicField, IDynamicField } from "..";

const meta: Meta<typeof DynamicField> = {
  title: "components/inputs/DynamicField",
  component: DynamicField,
  parameters,
  argTypes: props,
};

type Story = StoryObj<typeof DynamicField>;

const style = {
  width: "400px",
};

export const Default: Story = (args: IDynamicField) => (
  <div style={style}>
    <DynamicField {...args} />
  </div>
);
Default.args = {
  type: "number",
  name: "name",
  label: "label",
  valueInput: 0,
  handleChange: () => {},
};

export default meta;
