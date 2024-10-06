import { memo } from "react";
import { classNames } from "../../../../../shared/lib/classNames";
import { AppImage } from "../../../../../shared/ui/AppImage/AppImage";

import cls from './PizzaImage.module.scss'

interface PizzaImageProps {
    className?: string;
    pizza: any;
}

export const PizzaImage = memo((props: PizzaImageProps) => {
    const { className, pizza } = props;

  return (
    <div className={classNames(cls.pizza_img_wrapper, {}, [className])}>
      <AppImage className={cls.pizza_img} src={pizza.img} />
    </div>
  );
});
