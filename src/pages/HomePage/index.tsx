import { useGetProductsQuery } from "store/api/productsApi";
import Spin from "components/core/display/Spin";
import Alert from "components/core/display/Alert";
import ProductList from "components/feature/ProductList";
import "./index.scss";

const HomePage = () => {
  const { data, isLoading, isFetching, isError } = useGetProductsQuery({});

  if (isLoading || isFetching) {
    return (
      <div className="loading-container">
        <Spin size="large" tip="Loading..." />
      </div>
    );
  }

  if (isError) {
    return (
      <Alert
        message="Упс!"
        description="Произошла ошибка загрузки"
        type="error"
        className="home_page_error_alert"
        showIcon
      />
    );
  }

  return <ProductList products={data} />;
};

export default HomePage;
