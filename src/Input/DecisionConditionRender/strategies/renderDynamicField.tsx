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
    name={`conditions.${condition.name}`}
    label={condition.name}
    value={formik.values.conditions[condition.name]}
    onChange={(value) =>
      formik.setFieldValue(`conditions.${condition.name}`, value)
    }
    messageValidate={String(formik.errors.conditions?.[condition.name] || "")}
    statusValidate={
      formik.touched.conditions?.[condition.name]
        ? formik.errors.conditions?.[condition.name]
          ? "invalid"
          : "valid"
        : undefined
    }
    onBlur={formik.handleBlur}
  />
);

export { renderDynamicField };
