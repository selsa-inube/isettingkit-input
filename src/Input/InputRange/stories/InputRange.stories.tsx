import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { InputRange, IInputRange } from "..";
import { InputRangeController } from "./InputRange.controller";

const meta: Meta<typeof InputRange> = {
  title: "components/inputs/InputRange",
  component: InputRangeController,
  parameters,
  argTypes: props,
};

type Story = StoryObj<typeof InputRange>;

const style = {
  width: "400px",
};

const Currency: Story = (args: IInputRange) => (
  <div style={style}>
    <InputRangeController {...args} />
  </div>
);
Currency.args = {
  handleInputChangeFrom: () => {},
  handleInputChangeTo: () => {},
  id: "inputRango",
  label: "Tasa efectiva anual",
  valueFrom: 0,
  valueTo: 0,
  typeInput: "currency",
  required: false,
};

const Number: Story = (args: IInputRange) => (
  <div style={style}>
    <InputRangeController {...args} />
  </div>
);
Number.args = {
  handleInputChangeFrom: () => {},
  handleInputChangeTo: () => {},
  label: "Tasa efectiva anual",
  id: "inputRango",
  valueFrom: 0,
  valueTo: 0,
  typeInput: "number",
  required: false,
};

export { Currency, Number };
export default meta;
