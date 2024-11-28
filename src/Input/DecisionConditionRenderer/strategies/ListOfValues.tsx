/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from "@inubekit/select";
import { StyledLabelAlignment } from "../styles";
import { IStrategy } from "../types";
import { useDecisionHandlers } from "../utils/useDecisionHandlers";

function ListOfValuesStrategy(props: IStrategy) {
  const { message, type } = props;

  const { form, handleSelectChange, name, nameLabel, possibleValues } =
    useDecisionHandlers(props as any);

  const interceptHandleSelectChange = (name: string, value: string) => {
    try {
      handleSelectChange && handleSelectChange(name, value);
    } catch (error) {
      console.error("Error in interceptHandleSelectChange:", error);
    }
  };

  return (
    <StyledLabelAlignment
      $type={type === "condition" ? "flex-start" : "center"}
    >
      <Select
        id={name}
        name={name!}
        label={nameLabel}
        options={
          Array.isArray(possibleValues?.list)
            ? possibleValues.list.map((item) => ({
                id: item,
                label: item,
                value: item,
              }))
            : []
        }
        message={String(message)}
        fullwidth
        onChange={(name, value) => interceptHandleSelectChange(name, value)}
        value={String(form[name!])}
      />
    </StyledLabelAlignment>
  );
}

export { ListOfValuesStrategy };
