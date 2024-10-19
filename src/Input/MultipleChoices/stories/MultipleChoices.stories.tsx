import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { MultipleChoices, MultipleChoicesProps } from "..";

const options = [
  { id: "1", label: "Option 1", checked: false },
  { id: "2", label: "Option 2", checked: false },
  { id: "3", label: "Option 3", checked: false },
  { id: "4", label: "Option 4", checked: false },
];

const meta: Meta<typeof MultipleChoices> = {
  title: "components/inputs/MultipleChoices",
  component: MultipleChoices,
  parameters,
  argTypes: props,
};

type Story = StoryObj<typeof MultipleChoices>;

export const Default: Story = (args: MultipleChoicesProps) => (
  <MultipleChoices {...args} />
);
Default.args = {
  id: "MultipleOptionesCategorias",
  labelSelect: "Selecciones las categorias",
  labelSelected: "Categorias Seleccionadas",
  onHandleSelectCheckChange: (options) => console.log(options),
  options: options,
  required: false,
  placeholderSelect: "Selecciona una categoria",
};

export default meta;
