import { Condition, FormikType } from "./types/types";
import { getStrategy } from "./utils";
import { normalizeValueUse } from "./utils/normalizeValueUse";

const DecisionConditionRender = ({
  condition,
  formik,
  isDecision = false,
}: {
  condition: Condition;
  formik: FormikType;
  isDecision?: boolean;
}) => {
  const normalizedValueUse = normalizeValueUse(condition.valueUse);

  const strategyKey = isDecision
    ? `DECISION_${normalizedValueUse}`
    : normalizedValueUse;

  const renderStrategy = getStrategy(strategyKey as keyof typeof getStrategy);

  if (!renderStrategy) {
    console.warn(`No renderer found for valueUse: ${strategyKey}`);
    return null;
  }

  return renderStrategy({ condition, formik });
};

export { DecisionConditionRender };
