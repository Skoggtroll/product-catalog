import { ProductTypesEnum } from "../../../enums/Product";

export interface IBaseProduct {
  id: number;
  type: ProductTypesEnum;
  name: string;
  price: number;
  oldPrice?: number;
  colors: string[];
  installment?: boolean;
}

export interface IClothingProduct extends IBaseProduct {
  sizes: string[];
  type: ProductTypesEnum.CLOTHING;
}

export interface IElectronicsProduct extends IBaseProduct {
  power: string;
  type: ProductTypesEnum.ELECTRONICS;
}

export interface IFurnitureProduct extends IBaseProduct {
  size: string;
  type: ProductTypesEnum.FURNITURE;
}

export interface IFoodProduct extends IBaseProduct {
  expiryDate: string;
  manufactureDate: string;
  type: ProductTypesEnum.FOOD;
}
