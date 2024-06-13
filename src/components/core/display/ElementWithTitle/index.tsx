import Text from "../../display/Typography/Text";
import { PropsWithChildren } from "react";
import Flex from "../../layouts/Flex";
import { FlexProps } from "antd";
import clsx from "clsx";
import "./index.scss";

export interface ElementWithTitleProps extends PropsWithChildren {
  title?: string;
  flexProps?: FlexProps;
  caption?: boolean;
}

const ElementWithTitle = ({
  children,
  title,
  flexProps,
  caption = true,
}: ElementWithTitleProps) => {
  return (
    <Flex justify="space-between" align="center" {...flexProps}>
      <Text
        className={clsx({
          caption_typography: caption,
        })}
      >
        {title}
      </Text>
      {children}
    </Flex>
  );
};

export default ElementWithTitle;
