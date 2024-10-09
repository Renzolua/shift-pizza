import { useEffect } from "react";
import { Button } from "../../../../shared/ui/Button";
import { useCookies } from "react-cookie";
import { useCartStore } from "../../../Cart/model/store/useCartStore";
import { PizzaInCatalog, PizzaSize } from "../../model/types/pizza";
// import Cookies from "suniversal-cookie";

interface AddToCardButtonProps {
  pizza: PizzaInCatalog;
  pizzaSize: PizzaSize;
}

export const AddToCardButton = (props: AddToCardButtonProps) => {
  const { pizzas, setPizzas } = useCartStore();
  const { pizza, pizzaSize } = props;

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
              doughs: { name: "THIN", price: 0 },
              name: pizza.name,
              size: pizzaSize,
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
