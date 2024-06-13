import {
  IClothingProduct,
  IElectronicsProduct,
  IFoodProduct,
  IFurnitureProduct,
} from "../../interfaces";

export type TProduct =
  | IClothingProduct
  | IElectronicsProduct
  | IFurnitureProduct
  | IFoodProduct;
