import { Row as AntRow, RowProps as AntRowProps } from "antd";

export interface RowProps extends AntRowProps {}

export const Row = (props: RowProps) => {
  return <AntRow {...props} />;
};
