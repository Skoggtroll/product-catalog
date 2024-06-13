import { Layout } from "antd";
import "./index.scss";

const { Footer: AntFooter } = Layout;

export interface FooterProps extends React.ComponentProps<typeof AntFooter> {}

export const Footer = (props: FooterProps) => {
  return <AntFooter className="app_footer" {...props} />;
};
