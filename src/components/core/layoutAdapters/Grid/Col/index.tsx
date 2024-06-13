import { Col as AntCol, ColProps as AntColProps } from "antd";

export interface ColProps extends AntColProps {}

export const Col = (props: ColProps) => {
  return <AntCol {...props} />;
};
