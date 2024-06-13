import { Card as AntCard, CardProps as AntCardProps } from "antd";

export interface CardProps extends AntCardProps {}

export const CardContainer = (props: CardProps) => {
  return <AntCard {...props} />;
};
