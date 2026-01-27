import { FieldStrategy, IFieldStrategy } from "../types";
import { Numberfield } from "@inubekit/inubekit";
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
    placeholder,
  }: IFieldStrategy) => (
    <Numberfield
      id={name}
      label={label}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
      fullwidth
      iconAfter={
        <Icon appearance="dark" icon={<MdOutlinePercent />} size="18px" />
      }
      message={messageValidate}
      status={statusValidate as "invalid" | "pending" | undefined}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  ),
};

export { PercentageStrategy };
