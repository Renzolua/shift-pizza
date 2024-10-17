import { memo, useState } from "react";
import { Modal } from "../../../../shared/ui/Modal/Modal";
import { Flex } from "../../../../shared/ui/Stack/Flex/Flex";
import { PizzaImage } from "../PizzaImage/PizzaImage";
import { Typography } from "../../../../shared/ui/Typography";

import cls from "./PizzaCardModal.module.scss";
import { classNames } from "../../../../shared/lib/classNames";
import { PizzaSizeButtons } from "../PizzaSizeButtons/PizzaSizeButtons";
import { PizzaToppingsList } from "../PizzaToppingsList/PizzaToppingsList";
import { AddToCardButton } from "../AddToCardButton/AddToCardButton";
import {
  Ingredient,
  PizzaDough,
  PizzaInCatalog,
  PizzaSize,
  PizzaTopping,
} from "../../model/types/pizza";
import { PizzaDoughButtons } from "../PizzaDoughButtons/PizzaDoughButtons";

// import { useStore } from "@tanstack/react-store";
// import { Store } from "@tanstack/store";

interface PizzaCardModalProps {
  className?: string;
  isOpen: boolean;
  pizza: PizzaInCatalog;
  onClose: () => void;
}

export const PizzaCardModal = memo((props: PizzaCardModalProps) => {
  const { className, isOpen, onClose, pizza } = props;

  const [pizzaSize, setPizzaSize] = useState<PizzaSize>(pizza.sizes[0]);
  const [pizzaDough, setPizzaDough] = useState<PizzaDough>(pizza.doughs[0]);
  const [pizzaToppings, setPizzaToppings] = useState<PizzaTopping[]>([]);

  const onChangePizzaToppings = (selectedTopping: PizzaTopping) => {
    if (pizzaToppings.includes(selectedTopping)) {
      setPizzaToppings((prev) => {
        return prev.reduce((acc: PizzaTopping[], current) => {
          if (current.name !== selectedTopping.name) acc.push(current);
          return acc;
        }, []);
      });
    } else {
      setPizzaToppings((prev) => [...prev, selectedTopping]);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(cls.PizzaCardModal, {}, [className])}
    >
      <Flex direction="row" gap="24" className={cls.content}>
        <PizzaImage pizza={pizza} />
        <Flex
          direction="column"
          gap="8"
          align="start"
          className={cls.info_column}
        >
          <Typography variant="typography24_bold">{pizza.name}</Typography>
          <Typography variant="typography14_regular">
            {pizza.description}
          </Typography>
          <Typography variant="typography14_regular">
            {pizza.ingredients.map((ingredient: Ingredient, index: number) => {
              return (
                ingredient.name +
                (index !== pizza.ingredients.length - 1 ? ", " : "")
              );
            })}
          </Typography>
          <PizzaSizeButtons
            pizzaSizes={pizza.sizes}
            pizzaSize={pizzaSize}
            onChangePizzaSize={(pizzaSize: PizzaSize) =>
              setPizzaSize(pizzaSize)
            }
          />
          <PizzaDoughButtons
            pizzaDoughs={pizza.doughs}
            pizzaDough={pizzaDough}
            onChangePizzaDough={(dough: PizzaDough) => setPizzaDough(dough)}
          />
          {pizza?.toppings && (
            <Flex direction="row" gap="8">
              <PizzaToppingsList toppingsList={pizza.toppings} onChangePizzaToppings={onChangePizzaToppings}/>
            </Flex>
          )}
          <AddToCardButton
            pizza={pizza}
            pizzaSize={pizzaSize}
            pizzaDough={pizzaDough}
            pizzaToppings={pizzaToppings}
            onConfirm={()=>onClose()}
          />
        </Flex>
      </Flex>
    </Modal>
  );
});
