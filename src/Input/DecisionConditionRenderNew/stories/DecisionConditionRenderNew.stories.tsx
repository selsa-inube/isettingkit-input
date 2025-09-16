import { parameters, props } from "./props";
import { DecisionConditionRenderControllerNew } from "./DecisionConditionRender.controller";

const story = {
  title: "components/inputs/DecisionConditionRenderNew",
  component: DecisionConditionRenderControllerNew,
  parameters,
  argTypes: props,
};

const Default = () => <DecisionConditionRenderControllerNew />;
Default.args = {
  type: "percentage",
  name: "name",
  label: "label",
  valueInput: 0,
  handleChange: () => {},
  condition: true,
};

export { Default };
export default story;
