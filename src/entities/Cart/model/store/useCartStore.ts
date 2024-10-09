import { create } from "zustand";
import { PizzaInCart } from "../../../Pizza/model/types/pizza";

// import type { User } from '../types/user';

export interface UserState {
  // pizzas?: Partial<any>;
  pizzas: PizzaInCart[];
}

export interface UserActions {
  // addPizzaToCart: (cart: Omit<any, 'id'>) => void;
  setPizzas: (pizza: PizzaInCart[]) => void;
  clearCart: () => void;
}

const initialState: UserState = {
  pizzas: [],
};

export const useCartStore = create<UserState & UserActions>((set) => ({
  ...initialState,

  setPizzas: (pizzas) => set({pizzas}),

  // addPizzaToCart: (newPizza) => {
  //   set(( cart ) => ({ cart: { id: cart?.id, ...newUserData } }));
  // },

  clearCart: () => {
    set(initialState);
  },
}));
