import ElementWithTitle from "components/core/display/ElementWithTitle";
import Text from "components/core/display/Typography/Text";
import Flex from "components/core/layoutAdapters/Flex";
import { IFurnitureProduct } from "schemas/interfaces";
import { ColorDetailsRow } from "../ColorDetailsRow";

export const FurnitureDetails = ({
  product,
}: {
  product: IFurnitureProduct;
}) => {
  return (
    <Flex vertical>
      <ElementWithTitle title={"Размер:"}>
        <Text>{product.size}</Text>
      </ElementWithTitle>
      <ColorDetailsRow colors={product.colors} />
    </Flex>
  );
};
