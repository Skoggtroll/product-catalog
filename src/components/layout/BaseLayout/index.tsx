import { LayoutContainer, Footer, Content } from "../../core/layouts/Layout";
import AppHeader from "../../feature/AppHeader";
import AdaptiveContainer from "../AdaptiveContainer";
import HomePage from "../../../pages/HomePage";
import "./index.scss";

const BaseLayout = () => {
  return (
    <LayoutContainer className="app_container">
      <AppHeader />
      <Content>
        <AdaptiveContainer>
          <HomePage />
        </AdaptiveContainer>
      </Content>
      <Footer></Footer>
    </LayoutContainer>
  );
};

export default BaseLayout;
