import { Layout as AntLayout, LayoutProps as AntLayoutProps } from "antd";

export interface LayoutContainerProps extends AntLayoutProps {}

export const LayoutContainer = (props: LayoutContainerProps) => {
  return <AntLayout {...props} />;
};
