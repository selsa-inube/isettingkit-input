import { MultipleChoices } from "../../MultipleChoices";
import { Condition, FormikType } from "../types/types";

const renderDecisionMultipleChoices = ({
  condition,
  formik,
}: {
  condition: Condition;
  formik: FormikType;
}) => (
  <MultipleChoices
    id={condition.ruleName!}
    labelSelected={condition.labelName!}
    labelSelect={condition.labelName!}
    options={
      condition.listOfPossibleValues?.list?.map((item) => ({
        id: item,
        label: item,
        checked: formik.values.value?.includes(item),
      })) || []
    }
    onHandleSelectCheckChange={(newOptions) => {
      const selectedValues = newOptions
        .filter((option) => option.checked)
        .map((option) => option.id);

      formik.setFieldValue("value", selectedValues);
    }}
    message={formik.errors.value}
    placeholderSelect={`Select ${condition.ruleName}`}
    onBlur={() => formik.setFieldTouched("value", true, true)}
  />
);

export { renderDecisionMultipleChoices };
