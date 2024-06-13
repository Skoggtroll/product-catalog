import { Card } from "antd";

const { Meta } = Card;

export interface CardMetaProps extends React.ComponentProps<typeof Meta> {}

export const CardMeta = (props: CardMetaProps) => {
  return <Meta {...props} />;
};
