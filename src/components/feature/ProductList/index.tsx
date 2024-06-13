import { TProduct } from "schemas/types";
import { Col, Row } from "components/core/layoutAdapters/Grid";
import ProductCard from "../ProductCard";
import "./index.scss";
export interface ProductListProps {
  products?: TProduct[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Row className="product_list" gutter={[24, 16]}>
      {products?.map((product) => (
        <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
