import { memo } from "react";
import { Grid } from "../../../../shared/ui/Stack/Grid/Grid";
import { PizzaToppingsListItem } from "./PizzaToppingsListItem/PizzaToppingsListItem";

import { classNames } from "../../../../shared/lib/classNames";
import cls from "./PizzaToppingsList.module.scss";
import { PizzaTopping } from "../../model/types/pizza";

interface PizzaToppingsListProps {
  toppingsList: PizzaTopping[];
  onChangePizzaToppings: (topping: PizzaTopping) => void;
}

export const PizzaToppingsList = memo((props: PizzaToppingsListProps) => {
  const { toppingsList, onChangePizzaToppings } = props;
  return (
    <Grid
      columns={3}
      gap={12}
      className={classNames(cls.PizzaListItem, {}, [])}
    >
      {toppingsList.map((toppingItem) => {
        return (
          <PizzaToppingsListItem
            key={toppingItem.name}
            toppingItem={toppingItem}
            onClick={() => onChangePizzaToppings(toppingItem)}
          />
        );
      })}
    </Grid>
  );
});
