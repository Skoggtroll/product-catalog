import { Radio, RadioGroupProps as AntRadioGroupProps } from "antd";

export interface RadioGroupProps extends AntRadioGroupProps {}

export const RadioGroup = (props: RadioGroupProps) => {
  return <Radio.Group {...props} />;
};
