// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { memo } from 'react';


import cls from './Overlay.module.scss';
import { classNames } from '../../lib/classNames';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
  const { className, onClick } = props;

  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  return <div onClick={onClick} className={classNames(cls.overlay, {}, [className])} />;
});
