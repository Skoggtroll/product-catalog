import { Spin as AntSpin, SpinProps as AntSpinProps } from "antd";

export interface SpinProps extends AntSpinProps {}

const Spin = (props: SpinProps) => {
  return <AntSpin {...props} />;
};

export default Spin;
