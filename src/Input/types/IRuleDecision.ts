import { ICondition } from "./ICondition";
import { IDecision } from "./IDecision";
import { IValue } from "./IValue";
import { ValueDataType } from "./ValueDataType";
import { ValueHowToSetUp } from "./ValueHowToSetUp";

interface IRuleDecision {
  businessRuleId?: string;
  conditionDataType?: (typeof ValueDataType)[keyof typeof ValueDataType];
  conditionName?: string;
  conditionsThatEstablishesTheDecision?: ICondition[];
  decision?: IDecision;
  decisions?: IDecision[];
  decisionDataType?: (typeof ValueDataType)[keyof typeof ValueDataType];
  decisionId?: string;
  descriptionOfChange?: string;
  descriptionUse?: string;
  effectiveFrom?: Date | string;
  howToSetTheCondition?: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
  howToSetTheDecision?: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
  labelName?: string;
  listOfPossibleValues?: IValue;
  ruleDataType?: (typeof ValueDataType)[keyof typeof ValueDataType];
  ruleName?: string;
  transactionOperation?: string;
  validUntil?: Date | string;
  value?: string | string[] | number | IValue | undefined;
}

export type { IRuleDecision };
