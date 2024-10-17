import { Link } from "@tanstack/react-router";
import { Button } from "../../../../shared/ui/Button";
import { useCartStore } from "../../model/store/useCartStore";
import { getCart } from "../../../../shared/consts/router";

export const CartButton = () => {
  const { pizzas } = useCartStore();
  return (
    <Button
      onClick={() => {
        console.log(pizzas);
      }}
    >
      <Link
        to={getCart()}
        
      >
        Корзина
      </Link>
    </Button>
  );
};
