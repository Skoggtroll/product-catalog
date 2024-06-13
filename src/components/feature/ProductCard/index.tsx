import { currencySymbol, defaultImagePaths } from "../../../constants";
import { ProductTypesEnum } from "../../../enums";
import { TProduct } from "../../../schemas/types";
import ElementWithTitle from "../../core/display/ElementWithTitle";
import Text from "../../core/display/Typography/Text";
import Space from "../../core/layouts/Space";
import {
  ClothingDetails,
  ElectronictsDetails,
  FoodDetails,
  FurnitureDetails,
} from "./ProductDetails";
import { CardContainer, CardMeta } from "../../core/display/Card";
import "./index.scss";
import { useCallback } from "react";

export interface ProductCardProps {
  product: TProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { type: productType, name, installment, price, oldPrice } = product;

  const productImageSrc = defaultImagePaths[productType];

  const renderDetails = useCallback(() => {
    switch (productType) {
      case ProductTypesEnum.CLOTHING:
        return <ClothingDetails product={product} />;
      case ProductTypesEnum.ELECTRONICS:
        return <ElectronictsDetails product={product} />;
      case ProductTypesEnum.FURNITURE:
        return <FurnitureDetails product={product} />;
      case ProductTypesEnum.FOOD:
        return <FoodDetails product={product} />;
      default:
        return null;
    }
  }, [product, productType]);

  const renderPrice = useCallback(() => {
    if (oldPrice) {
      return (
        <Space>
          <Text type={"danger"}> {`${price} ${currencySymbol}`}</Text>
          <Text delete disabled>
            {`${oldPrice} ${currencySymbol}`}
          </Text>
        </Space>
      );
    }
    return <Text>{`${price} ${currencySymbol}`}</Text>;
  }, [oldPrice, price]);

  const renderInstallment = useCallback(() => {
    if (installment) {
      return (
        <ElementWithTitle title={"В рассрочку по:"}>
          <Text type="success">
            {`${(price / 12).toFixed(2)} ${currencySymbol}`}
          </Text>
        </ElementWithTitle>
      );
    }
    return null;
  }, [price, installment]);

  const renderBadge = useCallback(() => {
    if (oldPrice) {
      return (
        <Text className="sale_title" type="danger">
          Акция!
        </Text>
      );
    }
    return null;
  }, [oldPrice]);

  return (
    <CardContainer
      className="product_card"
      cover={
        <img
          alt={productType}
          src={productImageSrc}
          className="product_card_image"
        />
      }
    >
      {renderBadge()}
      <CardMeta title={name} description={renderPrice()} />
      <div className="product_card_details_container">
        {renderInstallment()}
        {renderDetails()}
      </div>
    </CardContainer>
  );
};

export default ProductCard;
