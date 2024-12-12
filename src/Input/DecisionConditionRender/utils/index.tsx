import { renderDecisionDynamicField } from "../strategies/renderDecisionDynamicField";
import { renderDecisionMultipleChoices } from "../strategies/renderDecisionMultipleChoices";
import { renderDecisionRange } from "../strategies/renderDecisionRange";
import { renderDecisionSelectCheck } from "../strategies/renderDecisionSelectCheck";
import { renderDynamicField } from "../strategies/renderDynamicField";
import { renderInputRange } from "../strategies/renderInputRange";
import { renderMultipleChoices } from "../strategies/renderMultipleChoices";
import { renderSelectCheck } from "../strategies/renderSelectCheck";

const strategies = {
  LIST_OF_VALUES: renderSelectCheck,
  LIST_OF_VALUES_MULTI: renderMultipleChoices,
  RANGE: renderInputRange,
  GREATER_THAN: renderDynamicField,
  LESS_THAN: renderDynamicField,
  EQUAL: renderDynamicField,

  DECISION_RANGE: renderDecisionRange,
  DECISION_LIST_OF_VALUES: renderDecisionSelectCheck,
  DECISION_LIST_OF_VALUES_MULTI: renderDecisionMultipleChoices,
  DECISION_EQUAL: renderDecisionDynamicField,
  DECISION_GREATER_THAN: renderDecisionDynamicField,
  DECISION_LESS_THAN: renderDecisionDynamicField,
};

type IStrategy = keyof typeof strategies;
const getStrategy = (type: IStrategy) => strategies[type];

export { getStrategy };
export type { IStrategy };
