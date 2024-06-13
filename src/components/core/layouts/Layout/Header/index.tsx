import { Layout } from "antd";

const { Header: AntHeader } = Layout;

export interface HeaderProps extends React.ComponentProps<typeof AntHeader> {}

export const Header = (props: HeaderProps) => {
  return <AntHeader {...props} />;
};
