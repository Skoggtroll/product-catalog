import { Alert as AntAlert, AlertProps as AntAlertProps } from "antd";

export interface AlertProps extends AntAlertProps {}

const Alert = (props: AntAlertProps) => {
  return <AntAlert {...props} />;
};

export default Alert;
