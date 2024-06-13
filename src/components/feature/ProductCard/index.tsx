import Text from "components/core/display/Typography/Text";
import {
  ClothingDetails,
  ElectronictsDetails,
  FoodDetails,
  FurnitureDetails,
  InstallmentDetails,
  PriceDetails,
} from "./ProductDetails";
import { useMemo } from "react";
import { TProduct } from "schemas/types";
import { defaultImagePaths } from "constants/Product";
import { ProductTypesEnum } from "enums";
import { CardContainer, CardMeta } from "components/core/display/Card";
import "./index.scss";

export interface ProductCardProps {
  product: TProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { type: productType, name, installment, price, oldPrice } = product;

  const productImageSrc = defaultImagePaths[productType];

  const Details = useMemo(() => {
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
      {Boolean(oldPrice) && (
        <Text className="sale_title" type="danger">
          Акция!
        </Text>
      )}
      <CardMeta
        title={name}
        description={<PriceDetails price={price} oldPrice={oldPrice} />}
      />
      <div className="product_card_details_container">
        <InstallmentDetails price={price} installment={installment} />
        {Details}
      </div>
    </CardContainer>
  );
};

export default ProductCard;
