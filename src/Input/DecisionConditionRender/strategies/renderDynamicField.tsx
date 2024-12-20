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
    name={`conditionThatEstablishesTheDecision.${condition.conditionName}`}
    label={condition.labelName!}
    value={
      formik.values.conditionThatEstablishesTheDecision[
        condition.conditionName!
      ]
    }
    onChange={(value) =>
      formik.setFieldValue(
        `conditionThatEstablishesTheDecision.${condition.conditionName}`,
        value,
      )
    }
    messageValidate={String(
      formik.errors.conditionThatEstablishesTheDecision?.[
        condition.conditionName!
      ] || "",
    )}
    statusValidate={
      formik.touched.conditionThatEstablishesTheDecision?.[
        condition.conditionName
      ]
        ? formik.errors.conditionThatEstablishesTheDecision?.[
            condition.conditionName
          ]
          ? "invalid"
          : "valid"
        : undefined
    }
    onBlur={formik.handleBlur}
  />
);

export { renderDynamicField };
