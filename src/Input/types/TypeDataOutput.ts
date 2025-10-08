import { NumberSchema, StringSchema } from "yup";

interface TypeDataOutput {
  schema: StringSchema | NumberSchema;
  value: string | number | { from: number; to: number } | undefined;
}

export type { TypeDataOutput };
