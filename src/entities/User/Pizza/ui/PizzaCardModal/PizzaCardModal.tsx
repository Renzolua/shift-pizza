import { memo, useState } from "react";
import { Modal } from "../../../../../shared/ui/Modal/Modal";
import { Flex } from "../../../../../shared/ui/Stack/Flex/Flex";
import { PizzaImage } from "../PizzaImage/PizzaImage";
import { Typography } from "../../../../../shared/ui/Typography";

import cls from "./PizzaCardModal.module.scss";
import { classNames } from "../../../../../shared/lib/classNames";
import { PizzaSizeButtons } from "../PizzaSizeButtons/PizzaSizeButtons";
import { PizzaToppingsList } from "../PizzaToppingsList/PizzaToppingsList";

interface PizzaCardModalProps {
  className?: string;
  isOpen: boolean;
  pizza: any;
  onClose: () => void;
}

export const PizzaCardModal = memo((props: PizzaCardModalProps) => {
  const { className, isOpen, onClose, pizza } = props;

  const [selectedPizzaSize, setSelectedPizzaSize] = useState<string>(pizza.sizes[0].name);
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
            {pizza.ingredients.map((ingredient: any, index: number) => {
              return (
                ingredient.name +
                (index !== pizza.ingredients.length - 1 ? ", " : "")
              );
            })}
          </Typography>
          <PizzaSizeButtons
            selectedPizzaSize={selectedPizzaSize}
            onChangePizzaSize={(name: string) => setSelectedPizzaSize(name)}
            pizzaSizes={pizza.sizes}
          />
          {pizza?.toppings && (
            <Flex direction="row" gap="8">
              <PizzaToppingsList toppingsList={pizza.toppings} />
            </Flex>
          )}
        </Flex>
      </Flex>
    </Modal>
  );
});
