import { memo } from "react";
import { AppImage } from "../../../../../../shared/ui/AppImage/AppImage";
import { Flex } from "../../../../../../shared/ui/Stack/Flex/Flex";
import { Typography } from "../../../../../../shared/ui/Typography";

interface PizzaToppingsListItemProps {
  toppingItem: any;
}
export const PizzaToppingsListItem = memo(
  (props: PizzaToppingsListItemProps) => {
    const { toppingItem } = props;
    return (
      <Flex direction="column">
        <AppImage width={108} src={toppingItem.img} />
        <Flex direction="column">
          <Typography variant="typography12_regular">{toppingItem.name}</Typography>
          <Typography variant="typography14_bold">{toppingItem.cost} ₽</Typography>
        </Flex>
      </Flex>
    );
  }
);
