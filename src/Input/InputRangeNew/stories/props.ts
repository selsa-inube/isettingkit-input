import { ArgTypes } from "@storybook/react";
import { IInputRangeNew } from "..";

const parameters = {
  docs: {
    description: {
      component:
        "Select allows users to make a single selection or multiple selections from a list of option.",
    },
  },
  controls: {
    exclude: ["value", "state"],
  },
};

const props: Partial<ArgTypes<IInputRangeNew>> = {
  condition: {
    description:
      "is a boolean that is used to determine the condition of the **Toggle Component**.",
  },
  handleInputChangeFrom: {
    description:
      "is a function that is called when the **Textfield Component** is clicked.",
  },
  handleInputChangeTo: {
    description:
      "is a function that is called when the **Textfield Component** is clicked.",
  },
  id: {
    description:
      "is a string that is used to identify the **Toggle Component**.",
  },
  valueFrom: {
    description:
      "is a string or number that is used to display the value of the **Textfield Component**.",
  },
  valueTo: {
    description:
      "is a string or number that is used to display the value of the **Textfield Component**.",
  },
  typeInput: {
    description:
      "is a string that is used to determine the type of the **Textfield Component**. (Value: 'money' or 'number')",
  },
};

export { parameters, props };
