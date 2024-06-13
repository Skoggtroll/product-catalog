import { PropsWithChildren } from "react";
import { ColProps, Row, RowProps, Col } from "../../core/layouts/Grid";

export interface AdaptiveContainerProps extends PropsWithChildren {
  breakPoints?: Pick<ColProps, "xs" | "sm" | "md" | "lg" | "xl" | "xxl">;
  rowProps?: RowProps;
}

const AdaptiveContainer = (props: AdaptiveContainerProps) => {
  const { children, breakPoints, rowProps } = props;
  return (
    <Row justify={"center"} {...rowProps}>
      <Col xs={24} sm={24} md={22} xl={20} {...breakPoints}>
        {children}
      </Col>
    </Row>
  );
};

export default AdaptiveContainer;
