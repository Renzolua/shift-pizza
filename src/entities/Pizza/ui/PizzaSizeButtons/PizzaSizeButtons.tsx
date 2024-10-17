import { memo } from "react";

import { classNames } from "../../../../shared/lib/classNames";
import cls from "./PizzaSizeButtons.module.scss";
import { Button } from "../../../../shared/ui/Button";
import { Flex } from "../../../../shared/ui/Stack/Flex/Flex";
import { PizzaSize } from "../../model/types/pizza";

interface PizzaSizeButtonsProps {
  className?: string;
  pizzaSize: PizzaSize;
  pizzaSizes: PizzaSize[] | undefined;
  onChangePizzaSize: (pizzaSize: PizzaSize) => void;
}

export const PizzaSizeButtons = memo((props: PizzaSizeButtonsProps) => {
  const { className, pizzaSizes, pizzaSize, onChangePizzaSize } = props;
  return (
    <Flex
      direction="row"
      className={classNames(cls.PizzaCardModal, {}, [className])}
    >
      {pizzaSizes?.map((pizzaType) => {
        return (
          <Button
          key={pizzaType.name}
            variant={
              pizzaSize.name === pizzaType.name
                ? "primary_text"
                : "default_text"
            }
            size="m"
            onClick={() => onChangePizzaSize(pizzaType)}
          >
            {pizzaType.name}
          </Button>
        );
      })}
    </Flex>
  );
});
