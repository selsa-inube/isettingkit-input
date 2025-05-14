import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { MultipleChoices } from "..";
import { MultipleChoicesController } from "./MultipleChoices.controller";

const meta: Meta<typeof MultipleChoices> = {
  title: "components/inputs/MultipleChoices",
  component: MultipleChoicesController,
  parameters,
  argTypes: props,
};

type Story = StoryObj<typeof MultipleChoicesController>;

const Default: Story = {
  render: () => <MultipleChoicesController />,
};

export { Default };
export default meta;
