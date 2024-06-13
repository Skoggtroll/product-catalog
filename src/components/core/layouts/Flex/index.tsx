import { Flex as AntFlex, FlexProps as AntFlexProps } from "antd";

export interface FlexProps extends AntFlexProps {}

const Flex = (props: FlexProps) => {
  return <AntFlex {...props} />;
};

export default Flex;
