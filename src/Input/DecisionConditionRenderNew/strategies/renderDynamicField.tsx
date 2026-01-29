/* eslint-disable @typescript-eslint/no-explicit-any */
import { DynamicFieldNew } from "../../../Input/DynamicFieldNew";
import { IConditionNew } from "../types/IConditionNew";
import { IFormikTypeNew } from "../types/IFormikTypeNew";

const renderDynamicField = ({
  condition,
  formik,
}: {
  condition: IConditionNew;
  formik: IFormikTypeNew;
}) => {
  const groupKey = condition.groupKey || "group-primary";
  const condName = condition.conditionName!;
  const basePath = `conditionsThatEstablishesTheDecision.${groupKey}.${condName}`;

  const groupValues =
    (formik.values as any).conditionsThatEstablishesTheDecision?.[groupKey] ||
    {};
  const groupErrors =
    (formik.errors as any).conditionsThatEstablishesTheDecision?.[groupKey] ||
    {};
  const groupTouched =
    (formik.touched as any).conditionsThatEstablishesTheDecision?.[groupKey] ||
    {};

  const node = groupValues[condName];

  let value: any = "";
  if (node != null) {
    if (typeof node === "object" && !Array.isArray(node) && "value" in node) {
      value = (node as any).value ?? "";
    } else {
      value = node;
    }
  } else if (condition.value !== undefined) {
    value = condition.value;
  }

  const rawError = groupErrors[condName];
  const rawTouched = groupTouched[condName];
  const messageValidate =
    typeof rawError === "string"
      ? rawError
      : rawError &&
          typeof rawError === "object" &&
          typeof rawError.value === "string"
        ? rawError.value
        : "";

  const isTouched =
    rawTouched && typeof rawTouched === "object"
      ? !!(rawTouched as any).value
      : !!rawTouched;

  const statusValidate =
    isTouched && messageValidate ? "invalid" : isTouched ? "valid" : undefined;

  const handleChange = (_name?: any, value?: any) => {
    const current = groupValues[condName];

    if (current && typeof current === "object" && !Array.isArray(current)) {
      formik.setFieldValue(`${basePath}.value`, value);
    } else {
      formik.setFieldValue(basePath, {
        ...(current && typeof current === "object" ? current : {}),
        value: value,
      });
    }
  };

  return (
    <DynamicFieldNew
      condition
      type={condition.conditionDataType!.toLowerCase()}
      name={basePath}
      label={condition.labelName!}
      placeholder={condition.placeholder!}
      value={value}
      onChange={handleChange}
      messageValidate={messageValidate}
      statusValidate={statusValidate}
      onBlur={formik.handleBlur}
      listOfPossibleValues={
        condition.listOfPossibleValues?.list?.length
          ? condition.listOfPossibleValues
          : undefined
      }
    />
  );
};

export { renderDynamicField };
