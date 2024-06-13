import {
  IClothingProduct,
  IElectronicsProduct,
  IFoodProduct,
  IFurnitureProduct,
} from "../../../schemas/interfaces";
import ElementWithTitle from "../../core/display/ElementWithTitle";
import Flex from "../../core/layoutAdapters/Flex";
import RadioColorPicker from "../RadioColorPicker";
import Text from "../../core/display/Typography/Text";
import { RadioButton, RadioGroup } from "../../core/controls/Radio";

const ColorDetailsRow = ({ colors }: { colors: string[] }) => {
  return (
    <ElementWithTitle title={"Цвета:"}>
      <RadioColorPicker colorList={colors} />
    </ElementWithTitle>
  );
};

const ClothingDetails = ({ product }: { product: IClothingProduct }) => {
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

const ElectronictsDetails = ({ product }: { product: IElectronicsProduct }) => {
  return (
    <Flex vertical>
      <ElementWithTitle title={"Мощность:"}>
        <Text>{product.power}</Text>
      </ElementWithTitle>
      <ColorDetailsRow colors={product.colors} />
    </Flex>
  );
};

const FurnitureDetails = ({ product }: { product: IFurnitureProduct }) => {
  return (
    <Flex vertical>
      <ElementWithTitle title={"Размер:"}>
        <Text>{product.size}</Text>
      </ElementWithTitle>
      <ColorDetailsRow colors={product.colors} />
    </Flex>
  );
};

const FoodDetails = ({ product }: { product: IFoodProduct }) => {
  return (
    <Flex vertical>
      <ElementWithTitle title={"Изготовлено:"}>
        <Text>{product.manufactureDate}</Text>
      </ElementWithTitle>
      <ElementWithTitle title={"Употребить до:"}>
        <Text>{product.expiryDate}</Text>
      </ElementWithTitle>
    </Flex>
  );
};

export { FoodDetails, FurnitureDetails, ElectronictsDetails, ClothingDetails };
