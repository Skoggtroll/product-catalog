import { Space as AntSpace, SpaceProps as AntSpacerops } from "antd";

export interface SpaceProps extends AntSpacerops {}

const Space = (props: SpaceProps) => {
  return <AntSpace {...props} />;
};

export default Space;
