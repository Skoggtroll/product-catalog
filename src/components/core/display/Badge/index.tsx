import { Badge as AntBadge, BadgeProps as AntBadgeProps } from "antd";

export interface BadgeProps extends AntBadgeProps {}

const Badge = (props: BadgeProps) => {
  return <AntBadge {...props} />;
};

export default Badge;
