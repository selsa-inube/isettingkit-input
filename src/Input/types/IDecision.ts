import { IValue } from "./IValue";
import { ValueDataType } from "./ValueDataType";
import { ValueHowToSetUp } from "./ValueHowToSetUp";

interface IDecision {
  decisionDataType: (typeof ValueDataType)[keyof typeof ValueDataType];
  validUntil?: Date;
  labelName: string;
  ruleDataType: (typeof ValueDataType)[keyof typeof ValueDataType];
  ruleName: string;
  listOfPossibleValues?: IValue;
  effectiveFrom?: Date;
  value?: string | string[] | number | IValue | undefined;
  howToSetTheDecision: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
  descriptionUse?: string;
}

export type { IDecision };
