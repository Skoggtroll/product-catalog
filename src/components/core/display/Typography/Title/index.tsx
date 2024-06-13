import { Typography } from "antd";

const { Title: AntTitle } = Typography;

export interface TitleProps extends React.ComponentProps<typeof AntTitle> {}

const Title = (props: TitleProps) => {
  return <AntTitle {...props} />;
};

export default Title;
