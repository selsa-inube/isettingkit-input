import { parameters, props } from "./props";
import { DecisionConditionRenderController } from "./DecisionConditionRender.controller";

const story = {
  title: "components/inputs/DecisionConditionRender",
  component: DecisionConditionRenderController,
  parameters,
  argTypes: props,
};

const Default = () => <DecisionConditionRenderController />;
Default.args = {
  type: "percentage",
  name: "name",
  label: "label",
  valueInput: 0,
  handleChange: () => {},
};

export { Default };
export default story;
