import { FieldStrategy, IFieldStrategy } from "../types";
import { Textfield } from "@inubekit/inubekit";
import { Icon } from "@inubekit/inubekit";
import { MdOutlinePercent } from "react-icons/md";

const PercentageStrategy: FieldStrategy = {
  render: ({
    name,
    label,
    value,
    onChange,
    messageValidate,
    statusValidate,
    onBlur,
  }: IFieldStrategy) => (
    <Textfield
      id={name}
      label={label}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
      type="number"
      fullwidth
      iconAfter={
        <Icon appearance="dark" icon={<MdOutlinePercent />} size="18px" />
      }
      message={messageValidate}
      status={statusValidate as "invalid" | "pending" | undefined}
      onBlur={onBlur}
    />
  ),
};

export { PercentageStrategy };
