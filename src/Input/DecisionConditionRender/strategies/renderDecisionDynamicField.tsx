import { DynamicField } from "../../DynamicField";
import { Condition, FormikType } from "../types/types";

const renderDecisionDynamicField = ({
  condition,
  formik,
}: {
  condition: Condition;
  formik: FormikType;
}) => (
  <DynamicField
    type={condition.conditionDataType!.toLowerCase()}
    name="value"
    label={condition.name}
    value={formik.values.value}
    onChange={(value) => formik.setFieldValue("value", value)}
    messageValidate={String(formik.errors.value || "")}
    statusValidate={
      formik.touched.value
        ? formik.errors.value
          ? "invalid"
          : "valid"
        : undefined
    }
    onBlur={formik.handleBlur}
  />
);

export { renderDecisionDynamicField };
