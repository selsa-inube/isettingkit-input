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
  const groupKey = condition.groupKey!;
  const basePath = `conditionsThatEstablishesTheDecision.${groupKey}.${condition.conditionName}`;

  const groupValues =
    formik.values.conditionsThatEstablishesTheDecision?.[groupKey] || {};
  const groupErrors =
    formik.errors.conditionsThatEstablishesTheDecision?.[groupKey] || {};
  const groupTouched =
    formik.touched.conditionsThatEstablishesTheDecision?.[groupKey] || {};

  const value = groupValues[condition.conditionName!].value;
  const error = groupErrors[condition.conditionName!];
  const touched = groupTouched[condition.conditionName!];

  return (
    <DynamicFieldNew
      condition
      type={condition.conditionDataType!.toLowerCase()}
      name={basePath}
      label={condition.labelName!}
      value={value}
      onChange={(newValue) => formik.setFieldValue(basePath, newValue)}
      messageValidate={String(error || "")}
      statusValidate={touched ? (error ? "invalid" : "valid") : undefined}
      onBlur={formik.handleBlur}
    />
  );
};

export { renderDynamicField };
