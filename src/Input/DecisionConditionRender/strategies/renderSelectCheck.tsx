import { Select } from "@inubekit/inubekit";
import { Condition, FormikType } from "../types/types";

const renderSelectCheck = ({
  condition,
  formik,
}: {
  condition: Condition;
  formik: FormikType;
}) => {
  const options =
    condition.listOfPossibleValues?.list?.map((item: string) => ({
      id: item,
      label: item,
      value: item,
    })) || [];
  const handleChange = (_: string, newValue: string) => {
    formik.setFieldValue(
      `conditionsThatEstablishesTheDecision.${condition.conditionName}`,
      newValue,
    );
  };

  return (
    <Select
      id={condition.conditionName}
      label={condition?.labelName}
      name={`conditionsThatEstablishesTheDecision.${condition.conditionName}`}
      options={options}
      value={
        formik.values.conditionsThatEstablishesTheDecision[
          condition.conditionName
        ]
      }
      onChange={handleChange}
      placeholder={`Select ${condition.conditionName}`}
      message={
        formik.errors.conditionsThatEstablishesTheDecision?.[
          condition.conditionName
        ]
      }
      invalid={Boolean(
        formik.touched.conditionsThatEstablishesTheDecision?.[
          condition.conditionName
        ] &&
          formik.errors.conditionsThatEstablishesTheDecision?.[
            condition.conditionName
          ],
      )}
      fullwidth
    />
  );
};

export { renderSelectCheck };
