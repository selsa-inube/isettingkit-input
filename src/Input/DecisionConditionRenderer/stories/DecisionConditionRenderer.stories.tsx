import { Meta, StoryObj } from "@storybook/react";
import { DecisionConditionRenderer } from "..";
import {
  ICondition,
  IInputStatus,
  ValueDataType,
  ValueHowToSetUp,
} from "../../types";

const meta: Meta<typeof DecisionConditionRenderer> = {
  title: "components/inputs/DecisionConditionRenderer",
  component: DecisionConditionRenderer,
};

type Story = StoryObj<typeof DecisionConditionRenderer>;

const element: ICondition = {
  name: "exampleCondition",
  value: ["Option1"],
  possibleValue: { list: ["Option1", "Option2", "Option3"] },
  valueUse: ValueHowToSetUp.LIST_OF_VALUES,
  dataType: ValueDataType.ALPHABETICAL,
};

const textValues = {
  selectOptions: "Select options",
  selectOption: "Selected option",
  rangeMin: (label: string) => `Minimum ${label}`,
  rangeMax: (label: string) => `Maximum ${label}`,
};

const ListOfValues: Story = {
  args: {
    element: {
      ...element,
      valueUse: ValueHowToSetUp.LIST_OF_VALUES,
    },
    onDecision: (value, nameCondition) =>
      console.log("List of Values Decision:", value, nameCondition),
    valueData: "Option1",
    message: "Choose an option",
    status: "pending" as IInputStatus,
    textValues,
  },
};

const MultipleChoices: Story = {
  args: {
    element: {
      ...element,
      valueUse: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    },
    onDecision: (value, nameCondition) =>
      console.log("Multiple Choices Decision:", value, nameCondition),
    valueData: "Option1",
    message: "Select multiple options",
    status: "pending" as IInputStatus,
    textValues,
    type: "condition",
  },
};

const Range: Story = {
  args: {
    element: {
      ...element,
      valueUse: ValueHowToSetUp.RANGE,
      dataType: "number",
    },
    onDecision: (value, nameCondition) =>
      console.log("Range Decision:", value, nameCondition),
    type: "decision",
    valueData: { from: 1, to: 10 },
    message: { from: "Min value required", to: "Max value required" },
    status: { from: "pending", to: "invalid" },
    textValues,
  },
};

const GreaterThan: Story = {
  args: {
    element: {
      ...element,
      valueUse: ValueHowToSetUp.GREATER_THAN,
      dataType: "number",
    },
    onDecision: (value, nameCondition) =>
      console.log("Range Decision:", value, nameCondition),
    type: "decision",
    valueData: "0",
    message: "asd",
    status: "pending",
    textValues,
  },
};

const Equal: Story = {
  args: {
    element: {
      ...element,
      valueUse: ValueHowToSetUp.EQUAL,
      dataType: "alphabetical",
    },
    onDecision: (value, nameCondition) =>
      console.log("Range Decision:", value, nameCondition),
    type: "decision",
    valueData: "asd",
    message: "asd",
    status: "pending",
    textValues,
  },
};

const LessThan: Story = {
  args: {
    element: {
      ...element,
      valueUse: ValueHowToSetUp.LESS_THAN,
      dataType: "number",
    },
    onDecision: (value, nameCondition) =>
      console.log("Range Decision:", value, nameCondition),
    type: "decision",
    valueData: "0",
    message: "asd",
    status: "pending",
    textValues,
  },
};

export { ListOfValues, MultipleChoices, Range, GreaterThan, Equal, LessThan };
export default meta;
