const parameters = {
  docs: {
    description: {
      component:
        "This component renders a **Textfield Component** or a **Datefield Component** based on the input type. It manages the state of the selected input component.",
    },
  },
  controls: {
    exclude: ["value", "state"],
  },
};

const props = {
  condition: {
    control: {
      type: "boolean",
    },
    description: "The condition of the input.",
    table: {
      type: {
        summary: "boolean",
      },
      defaultValue: {
        summary: "false",
      },
    },
  },
  type: {
    control: {
      type: "select",
    },
    description: "The type of the input.",
    options: ["number", "date", "alphabetical", "currency", "percentage"],
    table: {
      type: {
        summary: "string",
      },
      defaultValue: {
        summary: "number",
      },
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
    description: "The function to handle changes in the input value.",
    table: {
      type: {
        summary: "(value: string | number) => void",
      },
    },
  },
  messageValidate: {
    description: "The validation message for the input.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  statusValidate: {
    description: "The validation status for the input.",
    table: {
      type: {
        summary: "string",
      },
    },
  },
  onBlur: {
    description: "The function to handle the blur event of the input.",
    table: {
      type: {
        summary: "() => void",
      },
    },
  },
};

export { props, parameters };
