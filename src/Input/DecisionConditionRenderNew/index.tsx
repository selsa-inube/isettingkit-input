import { IConditionNew } from "./types/IConditionNew";
import { IFormikTypeNew } from "./types/IFormikTypeNew";
import { getStrategyNew } from "./utils";
import { normalizeValueUseNew } from "./utils/normalizeValueUse";

const DecisionConditionRender = ({
  condition,
  formik,
  isDecision = false,
}: {
  condition: IConditionNew;
  formik: IFormikTypeNew;
  isDecision?: boolean;
}) => {
  const normalizedValueUse = normalizeValueUseNew(
    condition.howToSetTheDecision || condition.howToSetTheCondition!,
  );

  const strategyKey = isDecision
    ? `DECISION_${normalizedValueUse}`
    : normalizedValueUse;

  const renderStrategy = getStrategyNew(
    strategyKey as keyof typeof getStrategyNew,
  );

  if (!renderStrategy) {
    console.warn(`No renderer found for valueUse: ${strategyKey}`);
    return null;
  }

  return renderStrategy({ condition, formik });
};

export { DecisionConditionRender };
