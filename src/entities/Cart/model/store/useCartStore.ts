import { create } from "zustand";
import { PizzaInCart } from "../../../Pizza/model/types/pizza";

// import type { User } from '../types/user';

export interface UserState {
  pizzas: PizzaInCart[];
}

export interface UserActions {
  setPizzas: (pizza: PizzaInCart[]) => void;
  clearCart: () => void;
}

const initialState: UserState = {
  pizzas: [],
};

export const useCartStore = create<UserState & UserActions>((set) => ({
  ...initialState,

  setPizzas: (pizzas) => set({pizzas}),
  clearCart: () => {
    set(initialState);
  },
}));
