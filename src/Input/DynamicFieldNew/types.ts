import { ReactNode } from "react";
import { IInputStatus } from "../types/IInputStatus";
import { IOption } from "@inubekit/inubekit";

interface IFieldStrategyNew {
  label: string;
  messageValidate?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  onBlur?: () => void;
  onChange: (name: string, value: string | number) => void;
  statusValidate?: string | IInputStatus;
  value: string | number;
  condition?: boolean;
  listOfPossibleValues?: { list?: IOption[] };
}

type FieldStrategyNew = {
  render: (props: IFieldStrategyNew) => ReactNode;
};

type FieldType =
  | "alphabetical"
  | "currency"
  | "number"
  | "percentage"
  | "date"
  | "monetary";

export type { FieldStrategyNew, FieldType, IFieldStrategyNew };
