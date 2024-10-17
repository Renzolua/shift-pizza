import { useEffect } from "react";
import { Button } from "../../../../shared/ui/Button";
import { useCookies } from "react-cookie";
import { useCartStore } from "../../../Cart/model/store/useCartStore";
import { PizzaDough, PizzaInCatalog, PizzaSize, PizzaTopping } from "../../model/types/pizza";
// import Cookies from "suniversal-cookie";

interface AddToCardButtonProps {
  pizza: PizzaInCatalog;
  pizzaSize: PizzaSize;
  pizzaDough: PizzaDough;
  pizzaToppings: PizzaTopping[]
}

export const AddToCardButton = (props: AddToCardButtonProps) => {
  const { pizzas, setPizzas } = useCartStore();
  const { pizza, pizzaSize, pizzaDough, pizzaToppings } = props;

  return (
    <>
      <Button
        fullWidth
        size="l"
        type="submit"
        onClick={() => {
          setPizzas([
            ...pizzas,
            {
              id: pizza.id,
              description: pizza.description,
              doughs: pizzaDough,
              name: pizza.name,
              size: pizzaSize,
              toppings: pizzaToppings
            },
          ]);
        }}
      >
        Добавить в корзину
      </Button>
    </>
  );
  //   return <><Button style={{width: '100%'}} fullWidth size="l" type="submit">Добавить в корзину</Button></>;
};
