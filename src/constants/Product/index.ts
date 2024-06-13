import { ProductTypesEnum } from "enums";

export const defaultImagePaths: Record<ProductTypesEnum, string> = {
  furniture: "/assets/images/furniture.png",
  electronics: "/assets/images/electronics.png",
  clothing: "/assets/images/clothing.png",
  food: "/assets/images/food.png",
} as const;

export const currencySymbol = "₽" as const;

export const installmentMonthCount = 12 as const;
