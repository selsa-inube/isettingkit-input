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
  listOfPossibleValues: {
    list: [
      { id: "value-1", label: "Muy alto", value: "ass" },
      { id: "value-2", label: "Alto", value: "cdd" },
      { id: "value-3", label: "Medio", value: "vbfb" },
      { id: "value-4", label: "Bajo", value: "hnh" },
      { id: "value-5", label: "Muy bajo", value: "yyy" },
    ],
  },
  messageValidate: "asadsa",
  statusValidate: "invalid",
};

export { Default };
export default story;
