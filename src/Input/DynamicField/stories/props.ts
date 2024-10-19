import { ArgTypes } from "@storybook/react";
import { IDynamicField } from "..";

export const parameters = {
  docs: {
    description: {
      component:
        "This component is used to render a **Textfield Component** or a **Datefield Component** based on the type of the input. It is used to handle the state of the **Textfield Component** or the **Datefield Component**.",
    },
  },
  controls: {
    exclude: ["value", "state"],
  },
};

export const props: Partial<ArgTypes<IDynamicField>> = {
  type: {
    description: "The type of the input.",
    table: {
      type: {
        summary: "string",
      },
      defaultValue: {
        summary: "number",
      },
    },
    control: {
      type: "select",
      options: ["number", "date", "alphabetical", "currency", "percentage"],
    },
  },
  name: {
    description: "The name of the input.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  label: {
    description: "The label of the input.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  valueInput: {
    description: "The value of the input.",
    table: {
      type: {
        summary: "string | number",
      },
    },
  },
  handleChange: {
    description: "The function to handle the change of the input.",
    table: {
      type: {
        summary: "Function",
      },
    },
  },
};
