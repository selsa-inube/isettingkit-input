import { Meta, StoryObj } from "@storybook/react";

import { parameters, props } from "./props";
import { MultipleChoicesNew } from "..";
import { MultipleChoicesNewController } from "./MultipleChoices.controller";

const meta: Meta<typeof MultipleChoicesNew> = {
  title: "components/inputs/MultipleChoicesNew",
  component: MultipleChoicesNewController,
  parameters,
  argTypes: props,
};

type Story = StoryObj<typeof MultipleChoicesNewController>;

const Default: Story = {
  render: () => <MultipleChoicesNewController />,
};

export { Default };
export default meta;
