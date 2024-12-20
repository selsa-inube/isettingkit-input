import { MultipleChoices } from "../../MultipleChoices";
import { Condition, FormikType } from "../types/types";

const renderMultipleChoices = ({
  condition,
  formik,
}: {
  condition: Condition;
  formik: FormikType;
}) => (
  <MultipleChoices
    id={condition.conditionName}
    options={
      condition.listOfPossibleValues?.list?.map((item) => ({
        id: item,
        label: item,
        checked:
          formik.values.conditions[condition.conditionName]?.includes(item),
      })) || []
    }
    onHandleSelectCheckChange={(newOptions) => {
      const selectedValues = newOptions
        .filter((option) => option.checked)
        .map((option) => option.id);

      formik.setFieldValue(
        `conditions.${condition.conditionName}`,
        selectedValues,
      );
    }}
    message={formik.errors.conditions?.[condition.conditionName]}
    placeholderSelect={`Select ${condition.conditionName}`}
    onBlur={() =>
      formik.setFieldTouched(
        `conditions.${condition.conditionName}`,
        true,
        true,
      )
    }
    labelSelect={""}
    labelSelected={""}
  />
);

export { renderMultipleChoices };
