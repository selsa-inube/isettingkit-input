import { DynamicField } from "../../DynamicField";
import { Condition, FormikType } from "../types/types";

const renderDynamicField = ({
  condition,
  formik,
}: {
  condition: Condition;
  formik: FormikType;
}) => (
  <DynamicField
    type={condition.conditionDataType!.toLowerCase()}
    name={`conditions.${condition.conditionName}`}
    label={condition.labelName!}
    value={formik.values.conditions[condition.conditionName!]}
    onChange={(value) =>
      formik.setFieldValue(`conditions.${condition.conditionName}`, value)
    }
    messageValidate={String(
      formik.errors.conditions?.[condition.conditionName!] || "",
    )}
    statusValidate={
      formik.touched.conditions?.[condition.conditionName]
        ? formik.errors.conditions?.[condition.conditionName]
          ? "invalid"
          : "valid"
        : undefined
    }
    onBlur={formik.handleBlur}
  />
);

export { renderDynamicField };
