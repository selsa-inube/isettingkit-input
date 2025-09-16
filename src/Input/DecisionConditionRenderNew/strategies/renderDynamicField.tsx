import { DynamicFieldNew } from "../../../Input/DynamicFieldNew";
import { IConditionNew } from "../types/IConditionNew";
import { IFormikTypeNew } from "../types/IFormikTypeNew";

const renderDynamicField = ({
  condition,
  formik,
}: {
  condition: IConditionNew;
  formik: IFormikTypeNew;
}) => (
  <DynamicFieldNew
    condition
    type={condition.conditionDataType!.toLowerCase()}
    name={`conditionsThatEstablishesTheDecision.${condition.conditionName}`}
    label={condition.labelName!}
    value={
      formik.values.conditionsThatEstablishesTheDecision[
        condition.conditionName!
      ]
    }
    onChange={(value) =>
      formik.setFieldValue(
        `conditionsThatEstablishesTheDecision.${condition.conditionName}`,
        value,
      )
    }
    messageValidate={String(
      formik.errors.conditionsThatEstablishesTheDecision?.[
        condition.conditionName!
      ] || "",
    )}
    statusValidate={
      formik.touched.conditionsThatEstablishesTheDecision?.[
        condition.conditionName
      ]
        ? formik.errors.conditionsThatEstablishesTheDecision?.[
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
