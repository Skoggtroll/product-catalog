import { Layout } from "antd";

const { Content: AntContent } = Layout;

export interface ContentProps extends React.ComponentProps<typeof AntContent> {}

export const Content = (props: ContentProps) => {
  return <AntContent {...props} />;
};
