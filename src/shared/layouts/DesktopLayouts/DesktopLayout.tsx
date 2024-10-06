import type { ReactElement } from 'react';
import { memo } from 'react';

import { classNames } from '../../lib/classNames';

import cls from './DesktopLayout.module.scss';

interface DesktopLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
}

export const DesktopLayout = memo((props: DesktopLayoutProps) => {
  const { className, content, header } = props;
  return (
    <div className={classNames(cls.desktop_layouts, {}, [className])}>
      <div className={cls.header}>{header}</div>
      <div className={cls.content}>{content}</div>
    </div>
  );
});
