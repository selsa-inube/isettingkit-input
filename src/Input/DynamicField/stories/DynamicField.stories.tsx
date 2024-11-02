import { parameters, props } from "./props";
import { IDynamicField } from "..";
import { DynamicFieldController } from "./DynamicField.controller";

const story = {
  title: "components/inputs/DynamicField",
  component: DynamicFieldController,
  parameters,
  argTypes: props,
};

const style = {
  width: "400px",
};

const Default = (args: IDynamicField) => (
  <div style={style}>
    <DynamicFieldController {...args} />
  </div>
);
Default.args = {
  type: "percentage",
  name: "name",
  label: "label",
  valueInput: 0,
  handleChange: () => {},
};

export { Default };
export default story;
