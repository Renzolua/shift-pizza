import { memo } from "react";
import { Grid } from "../../../../shared/ui/Stack/Grid/Grid";
import { PizzaToppingsListItem } from "./PizzaToppingsListItem/PizzaToppingsListItem";

import { classNames } from "../../../../shared/lib/classNames";
import cls from "./PizzaToppingsList.module.scss";

interface PizzaToppingsListProps {
  toppingsList: any[];
}

export const PizzaToppingsList = memo((props: PizzaToppingsListProps) => {
  const { toppingsList } = props;
  return (
    <Grid
      columns={3}
      gap={12}
      className={classNames(cls.PizzaListItem, {}, [])}
    >
      {toppingsList.map((toppingItem: any) => {
        return <PizzaToppingsListItem toppingItem={toppingItem}/>;
      })}
    </Grid>
  );
});
