import { Radio } from "antd";

const { Button } = Radio;
export interface RadioButtonProps extends React.ComponentProps<typeof Button> {}

export const RadioButton = (props: RadioButtonProps) => {
  return <Radio.Button {...props} />;
};
