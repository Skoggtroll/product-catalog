import AppHeader from "components/feature/AppHeader";
import {
  Content,
  Footer,
  LayoutContainer,
} from "components/core/layoutAdapters/Layout";
import AdaptiveContainer from "../AdaptiveContainer";
import HomePage from "pages/HomePage";
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
      <Footer />
    </LayoutContainer>
  );
};

export default BaseLayout;
