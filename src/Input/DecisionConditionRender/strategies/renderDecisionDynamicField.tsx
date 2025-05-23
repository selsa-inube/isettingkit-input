import { DynamicField } from "../../DynamicField";
import { StyledDecisionAlignmentContainer } from "../styles";
import { Condition, FormikType } from "../types/types";

const renderDecisionDynamicField = ({
  condition,
  formik,
}: {
  condition: Condition;
  formik: FormikType;
}) => (
  <StyledDecisionAlignmentContainer>
    <DynamicField
      type={condition.decisionDataType!.toLowerCase()}
      name={condition.ruleName!}
      label={condition.labelName!}
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
  </StyledDecisionAlignmentContainer>
);

export { renderDecisionDynamicField };
