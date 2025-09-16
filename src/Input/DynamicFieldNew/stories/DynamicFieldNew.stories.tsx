import { parameters, props } from "./props";
import { DynamicFieldController } from "./DynamicField.controller";
import { IDynamicField } from "../../../Input/types/IDynamicField";

const story = {
  title: "components/inputs/DynamicFieldNew",
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
  condition: false,
};

export { Default };
export default story;
