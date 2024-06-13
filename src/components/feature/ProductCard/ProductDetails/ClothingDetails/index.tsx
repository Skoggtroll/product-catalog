import { ColorDetailsRow } from "../ColorDetailsRow";
import Flex from "components/core/layoutAdapters/Flex";
import ElementWithTitle from "components/core/display/ElementWithTitle";
import { RadioButton, RadioGroup } from "components/core/controls/Radio";
import { IClothingProduct } from "schemas/interfaces";

export const ClothingDetails = ({ product }: { product: IClothingProduct }) => {
  return (
    <Flex vertical>
      <ElementWithTitle title={"Размеры:"}>
        <RadioGroup size="small">
          {product.sizes.map((size) => (
            <RadioButton key={`${size}`} value={size}>
              {size}
            </RadioButton>
          ))}
        </RadioGroup>
      </ElementWithTitle>
      <ColorDetailsRow colors={product.colors} />
    </Flex>
  );
};
