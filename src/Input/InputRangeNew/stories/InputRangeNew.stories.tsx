import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { InputRangeNew, IInputRangeNew } from "..";
import { InputRangeNewController } from "./InputRange.controller";

const meta: Meta<typeof InputRangeNew> = {
  title: "components/inputs/InputRangeNewNew",
  component: InputRangeNewController,
  parameters,
  argTypes: props,
};

type Story = StoryObj<typeof InputRangeNew>;

const Currency: Story = (args: IInputRangeNew) => (
  <InputRangeNewController {...args} />
);
Currency.args = {
  condition: true,
  handleInputChangeFrom: () => {},
  handleInputChangeTo: () => {},
  id: "inputRango",
  label: "Tasa efectiva anual",
  valueFrom: 0,
  valueTo: 0,
  typeInput: "currency",
  required: false,
};

const Number: Story = (args: IInputRangeNew) => (
  <InputRangeNewController {...args} />
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
