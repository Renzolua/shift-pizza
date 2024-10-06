import { memo } from "react";

import { classNames } from "../../../../../shared/lib/classNames";
import cls from "./PizzaSizeButtons.module.scss";
import { Button } from "../../../../../shared/ui/Button";
import { Flex } from "../../../../../shared/ui/Stack/Flex/Flex";

interface PizzaSizeButtonsProps {
  className?: string;
  selectedPizzaSize: string | undefined;
  pizzaSizes: any;
  onChangePizzaSize: (name: string) => void;
}

export const PizzaSizeButtons = memo((props: PizzaSizeButtonsProps) => {
  const { className, pizzaSizes, selectedPizzaSize, onChangePizzaSize } = props;
  return (
    <Flex
      direction="row"
      className={classNames(cls.PizzaCardModal, {}, [className])}
    >
      {pizzaSizes.map((pizzaType: any) => {
        return (
          <Button
            variant={
              selectedPizzaSize === pizzaType.name
                ? "primary_text"
                : "default_text"
            }
            size="m"
            onClick={() => onChangePizzaSize(pizzaType.name)}
          >
            {pizzaType.name}
          </Button>
        );
      })}
    </Flex>
  );
});
