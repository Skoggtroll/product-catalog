import { Typography } from "antd";

const { Text: AntText } = Typography;

export interface TextProps extends React.ComponentProps<typeof AntText> {}

const Text = (props: TextProps) => {
  return <AntText {...props} />;
};

export default Text;
