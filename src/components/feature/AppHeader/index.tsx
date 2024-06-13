import { Header } from "antd/es/layout/layout";
import Title from "../../core/display/Typography/Title";
import Badge from "../../core/display/Badge";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Flex from "../../core/layouts/Flex";
import "./index.scss";

export interface AppHeaderProps {}

const AppHeader = (props: AppHeaderProps) => {
  return (
    <Header className="app_header">
      <Flex justify="space-between" align="center">
        <Title level={3} className="app_title">
          Каталог товаров
        </Title>
        <Badge count={5}>
          <ShoppingCartOutlined
            className="app_header_cart_icon"
            style={{ fontSize: "24px", color: "white" }}
          />
        </Badge>
      </Flex>
    </Header>
  );
};

export default AppHeader;
