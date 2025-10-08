import { IValue } from "./IValue";
import { ValueDataType } from "./ValueDataType";
import { ValueHowToSetUp } from "./ValueHowToSetUp";

interface ICondition {
  conditionDataType: (typeof ValueDataType)[keyof typeof ValueDataType];
  hidden?: boolean;
  conditionName: string;
  listOfPossibleValues?: IValue;
  switchPlaces?: boolean;
  value?: string | string[] | number | IValue | undefined;
  howToSetTheCondition: (typeof ValueHowToSetUp)[keyof typeof ValueHowToSetUp];
  labelName: string;
  descriptionUse?: string;
  i18n?: Partial<Record<string, string>>;
}

export type { ICondition };
