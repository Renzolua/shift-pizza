import { memo, useState } from "react";
import { PizzaListItem } from "../PizzaListItem/PizzaListItem";
import { Grid } from "../../../../shared/ui/Stack/Grid/Grid";
import { PizzaCardModal } from "../PizzaCardModal/PizzaCardModal";

interface PizzaListProps {
  className?: string;
  pizzaList: any[];
}

export const PizzaList = memo((props: PizzaListProps) => {
  const { className, pizzaList } = props;
  const [selectedPizza, setSelectedPizza] = useState<any>();
  const [isOpenPizzaWindow, setIsOpenPizzaWindow] = useState(false);

  return (
    <div>
      {selectedPizza && (
        <PizzaCardModal
          isOpen={isOpenPizzaWindow}
          onClose={() => {
            setIsOpenPizzaWindow(false);
            setSelectedPizza(undefined)
          }}
          pizza={selectedPizza}
        />
      )}
      <Grid columns={3} gap={32} className={className}>
        {pizzaList.map((pizza) => (
          <PizzaListItem
            key={pizza.id}
            pizza={pizza}
            onClick={() => {
              setIsOpenPizzaWindow(true)
              setSelectedPizza(pizza);
            }}
          />
        ))}
      </Grid>
    </div>
  );
});
