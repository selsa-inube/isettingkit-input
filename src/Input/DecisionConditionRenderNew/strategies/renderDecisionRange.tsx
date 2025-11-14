import { StyledDecisionAlignmentContainer } from "../styles";
import { InputRangeNew } from "../../../Input/InputRangeNew";
import { IConditionNew } from "../types/IConditionNew";
import { IFormikTypeNew } from "../types/IFormikTypeNew";
import { IInputStatus } from "../../../Input/types/IInputStatus";
import { IInputType } from "../../../Input/types";
const renderDecisionRange = ({
  condition,
  formik,
}: {
  condition: IConditionNew;
  formik: IFormikTypeNew;
}) => {
  return (
    <StyledDecisionAlignmentContainer>
      <InputRangeNew
        id={condition.ruleName!}
        label={condition.labelName!}
        valueFrom={formik.values.value?.from}
        valueTo={formik.values.value?.to}
        handleInputChangeFrom={(value) =>
          formik.setFieldValue("value.from", value)
        }
        handleInputChangeTo={(value) => formik.setFieldValue("value.to", value)}
        messageFrom={formik.errors.value?.from}
        messageTo={formik.errors.value?.to}
        statusFrom={
          (formik.touched.value?.from
            ? formik.errors.value?.from
              ? "invalid"
              : "valid"
            : "pending") as IInputStatus
        }
        statusTo={
          (formik.touched.value?.to
            ? formik.errors.value?.to
              ? "invalid"
              : "valid"
            : "pending") as IInputStatus
        }
        onBlur={formik.handleBlur}
        typeInput={condition.decisionDataType!.toLowerCase() as IInputType}
        listOfPossibleValues={condition.listOfPossibleValues}
      />
    </StyledDecisionAlignmentContainer>
  );
};

export { renderDecisionRange };
