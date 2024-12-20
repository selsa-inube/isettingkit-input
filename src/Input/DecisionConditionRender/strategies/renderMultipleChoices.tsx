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
          formik.values.conditionThatEstablishesTheDecision[
            condition.conditionName
          ]?.includes(item),
      })) || []
    }
    onHandleSelectCheckChange={(newOptions) => {
      const selectedValues = newOptions
        .filter((option) => option.checked)
        .map((option) => option.id);

      formik.setFieldValue(
        `conditionThatEstablishesTheDecision.${condition.conditionName}`,
        selectedValues,
      );
    }}
    message={
      formik.errors.conditionThatEstablishesTheDecision?.[
        condition.conditionName
      ]
    }
    placeholderSelect={`Select ${condition.conditionName}`}
    onBlur={() =>
      formik.setFieldTouched(
        `conditionThatEstablishesTheDecision.${condition.conditionName}`,
        true,
        true,
      )
    }
    labelSelect={""}
    labelSelected={""}
  />
);

export { renderMultipleChoices };
