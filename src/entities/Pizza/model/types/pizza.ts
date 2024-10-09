import { PizzaDoughs } from "./pizzaDoughs";
import { PizzaSizesName } from "./pizzaSizes";

export interface PizzaInCart {
  id: string;
  name: string;
  toppings?: [
    {
      name: string;
      cost: number;
      img: string;
    },
  ];
  description: string;
  size: {
    name: PizzaSizesName;
    price: number;
  };
  doughs: {
    name: PizzaDoughs;
    price: number;
  };
}

export interface PizzaDough {
  name: PizzaDoughs;
  price: number;
}

interface Ingredient {
  cost: number;
  img: string;
  name: string;
}
export interface PizzaSize {
  name: PizzaSizesName;
  price: number;
}
interface Topping {
  name: string;
  cost: number;
  img: string;
}
export interface PizzaInCatalog {
  allergens: string[];
  calories: number;
  carbohydrates: string;
  description: string;
  doughs: PizzaDough[];
  id: string;
  img: string;
  ingredients: Ingredient[];
  isGlutenFree: boolean;
  isHit: boolean;
  isNew: boolean;
  isVegetarian: boolean;
  name: string;
  protein: string;
  sizes: PizzaSize[];
  sodium: string;
  toppings: Topping[];
  totalFat: string;
}
