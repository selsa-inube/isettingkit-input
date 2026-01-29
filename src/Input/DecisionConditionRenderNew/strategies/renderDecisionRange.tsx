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
  const pathFrom = "value.from";
  const pathTo = "value.to";

  const touchedFrom = Boolean(
    formik.touched.value?.from || formik.touched?.from,
  );
  const touchedTo = Boolean(formik.touched.value?.to || formik.touched?.to);

  const dirtyFrom = formik.submitCount > 0 || touchedFrom;
  const dirtyTo = formik.submitCount > 0 || touchedTo;

  const errorFrom = formik.errors.value?.from || formik.errors?.from;
  const errorTo = formik.errors.value?.to || formik.errors?.to;

  return (
    <StyledDecisionAlignmentContainer>
      <InputRangeNew
        id={condition.ruleName!}
        label={condition.labelName!}
        valueFrom={formik.values.value?.from}
        valueTo={formik.values.value?.to}
        handleInputChangeFrom={(value) => formik.setFieldValue(pathFrom, value)}
        handleInputChangeTo={(value) => formik.setFieldValue(pathTo, value)}
        messageFrom={dirtyFrom ? errorFrom : undefined}
        messageTo={dirtyTo ? errorTo : undefined}
        statusFrom={
          (dirtyFrom
            ? errorFrom
              ? "invalid"
              : "valid"
            : "pending") as IInputStatus
        }
        statusTo={
          (dirtyTo
            ? errorTo
              ? "invalid"
              : "valid"
            : "pending") as IInputStatus
        }
        onBlurFrom={() => formik.setFieldTouched(pathFrom, true, true)}
        onBlurTo={() => formik.setFieldTouched(pathTo, true, true)}
        typeInput={condition.decisionDataType!.toLowerCase() as IInputType}
        listOfPossibleValues={
          condition.listOfPossibleValues?.list?.length
            ? condition.listOfPossibleValues
            : undefined
        }
        placeholderFrom={condition.placeholderFrom ?? condition.placeholder}
        placeholderTo={condition.placeholderTo ?? condition.placeholder}
      />
    </StyledDecisionAlignmentContainer>
  );
};

export { renderDecisionRange };
