import { Radio } from "antd";
import { RadioButtonProps as AntRadioButtonProps } from "antd/lib/radio/radioButton";

export interface RadioButtonProps extends AntRadioButtonProps {}

export const RadioButton = (props: RadioButtonProps) => {
  return <Radio.Button {...props} />;
};
