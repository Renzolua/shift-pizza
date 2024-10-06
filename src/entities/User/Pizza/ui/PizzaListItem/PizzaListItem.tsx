import { memo } from "react";
import { Flex } from "../../../../../shared/ui/Stack/Flex/Flex";
import { PizzaImage } from "../PizzaImage/PizzaImage";

import cls from "./PizzaListItem.module.scss";
import { classNames } from "../../../../../shared/lib/classNames";
import { Typography } from "../../../../../shared/ui/Typography";
import { Button } from "../../../../../shared/ui/Button";

interface PizzaListItemProps {
  className?: string;
  pizza: any;
  onClick: () => void;
}
export const PizzaListItem = memo((props: PizzaListItemProps) => {
  const { className, pizza, onClick } = props;
  return (
    <Flex
      direction="column"
      gap="16"
      className={classNames(cls.PizzaListItem, {}, [className])}
    >
      <PizzaImage pizza={pizza} />
      <Flex direction="column" gap="32">
        <Flex direction="column" gap="8">
          <Typography variant="typography20_bold">{pizza.name}</Typography>
          <Typography variant="typography16_regular">
            {pizza.description}
          </Typography>
        </Flex>
      </Flex>{" "}
      <Typography variant="typography20_bold">
        от {pizza?.sizes?.[0]?.price} ₽
      </Typography>
        <Button size="m" fullWidth className={cls.select_button} onClick={onClick}>
          <Typography tag="h1" variant="typography16_regular">
            Выбрать
          </Typography>
        </Button>
    </Flex>
  );
});
