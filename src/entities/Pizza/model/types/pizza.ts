import { PizzaDoughs } from "./pizzaDoughs";
import { PizzaSizesName } from "./pizzaSizes";

export interface PizzaInCart {
  id: string;
  name: string;
  toppings: PizzaTopping[];
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

export interface Ingredient {
  cost: number;
  img: string;
  name: string;
}
export interface PizzaSize {
  name: PizzaSizesName;
  price: number;
}
export interface PizzaTopping {
  name: string;
  cost: number;
  img: string;
}
export interface PizzaDough {
  name: PizzaDoughs;
  price: number;
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
  toppings: PizzaTopping[];
  totalFat: string;
}
