import ElementWithTitle from "components/core/display/ElementWithTitle";
import Text from "components/core/display/Typography/Text";
import Flex from "components/core/layoutAdapters/Flex";
import { IFoodProduct } from "schemas/interfaces";
import { formatDate } from "utils";

export const FoodDetails = ({ product }: { product: IFoodProduct }) => {
  const { manufactureDate, expiryDate } = product;
  return (
    <Flex vertical>
      <ElementWithTitle title={"Изготовлено:"}>
        <Text>{formatDate(manufactureDate)}</Text>
      </ElementWithTitle>
      <ElementWithTitle title={"Употребить до:"}>
        <Text>{formatDate(expiryDate)}</Text>
      </ElementWithTitle>
    </Flex>
  );
};
