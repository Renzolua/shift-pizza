import { memo } from "react";

import { classNames } from "../../../../shared/lib/classNames";
import cls from "./PizzaDoughButtons.module.scss";
import { Button } from "../../../../shared/ui/Button";
import { Flex } from "../../../../shared/ui/Stack/Flex/Flex";
import { PizzaDough, PizzaSize } from "../../model/types/pizza";

interface PizzaDoughButtonsProps {
  className?: string;
  pizzaDough: PizzaDough;
  pizzaDoughs: PizzaDough[];
  onChangePizzaDough: (dought: PizzaDough) => void;
}

export const PizzaDoughButtons = memo((props: PizzaDoughButtonsProps) => {
  const { className, pizzaDough, pizzaDoughs, onChangePizzaDough } = props;
  return (
    <Flex
      direction="row"
      className={classNames(cls.PizzaCardModal, {}, [className])}
    >
      {pizzaDoughs?.map((dough) => {
        return (
          <Button
            key={dough.name}
            variant={
              pizzaDough.name === dough.name ? "primary_text" : "default_text"
            }
            size="m"
            onClick={() => onChangePizzaDough(dough)}
          >
            {dough.name}
          </Button>
        );
      })}
    </Flex>
  );
});
