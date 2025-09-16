import { ArgTypes } from "@storybook/react";
import { IMultipleChoicesNew } from "..";

const sizes = ["wide", "compact"] as const;
type ICheckpickerSize = (typeof sizes)[number];

const parameters = {
  docs: {
    description: {
      component:
        "Select allows users to make a single selection or multiple selections from a list of options.",
    },
  },
  controls: {
    exclude: ["value", "state"],
  },
};

const props: Partial<ArgTypes<IMultipleChoicesNew>> = {
  condition: {
    description: "defines if the field is required or not",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  id: {
    description:
      "uniquely identifies the **Textfield Component**, it will also allow the **label element** to be connected to the **input element** through the htmlFor of the label",
  },
  labelSelected: {
    description: "prompts the user what value to enter",
  },
  labelSelect: {
    description: "prompts the user what value to enter",
  },
  options: {
    description: "defines the options of the select",
    table: {
      type: { summary: "IOptionItemCheckedProps[]" },
    },
  },
  placeholderSelect: {
    description: "defines the placeholder of the select",
  },
  required: {
    description: "defines if the field is required or not",
    table: {
      defaultValue: { summary: "false" },
    },
  },
};

export { props, parameters, sizes };
export type { ICheckpickerSize };
