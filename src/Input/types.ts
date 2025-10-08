declare const inputTypes: readonly [
  "alphabetical",
  "currency",
  "date",
  "monetary",
  "number",
  "percentage",
];

declare type IInputType = (typeof inputTypes)[number];
export type { IInputType };
