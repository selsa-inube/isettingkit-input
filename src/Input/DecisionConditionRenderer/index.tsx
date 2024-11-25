import React from "react";
import { IStrategy } from "./types";
import { normalizeValueUse } from "./utils/normalizeValueUse";
import { getStrategy, StrategyType } from "./utils";
import {
  IUseDecisionHandlers,
  useDecisionHandlers,
} from "./utils/useDecisionHandlers";

function DecisionConditionRenderer(props: IStrategy) {
  const handlers = useDecisionHandlers(props as IUseDecisionHandlers);

  const { element } = props;

  const normalizedValueUse = normalizeValueUse(element.valueUse);

  if (!normalizedValueUse) {
    console.error(
      `Invalid valueUse: ${element.valueUse}. Please ensure it matches the supported types.`,
    );
    return null;
  }

  const strategy = getStrategy(normalizedValueUse as StrategyType);

  if (!strategy) {
    console.error(
      `No strategy found for normalized valueUse: ${normalizedValueUse}. Please verify the strategy registry.`,
    );
    return null;
  }

  try {
    return React.createElement(strategy, { ...props, ...handlers });
  } catch (error) {
    console.error(
      `Error rendering strategy for valueUse: ${normalizedValueUse}`,
      error,
    );
    return null;
  }
}

export { DecisionConditionRenderer };
