import ElementWithTitle from "components/core/display/ElementWithTitle";
import Flex from "components/core/layoutAdapters/Flex";
import Text from "components/core/display/Typography/Text";
import { IElectronicsProduct } from "schemas/interfaces";
import { ColorDetailsRow } from "..";

export const ElectronictsDetails = ({
  product,
}: {
  product: IElectronicsProduct;
}) => {
  return (
    <Flex vertical>
      <ElementWithTitle title={"Мощность:"}>
        <Text>{product.power}</Text>
      </ElementWithTitle>
      <ColorDetailsRow colors={product.colors} />
    </Flex>
  );
};
