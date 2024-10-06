import { memo, useEffect } from 'react';

import cls from './TimerButton.module.scss';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { classNames } from '../../lib/classNames';
import { useCountDown } from '../../lib/hooks/useCountDown';

interface TimerButtonProps {
  className?: string;
  onRetrySendOtpCode: () => void;
  loading?: boolean;
  endTime: number;
}

export const TimerButton = memo((props: TimerButtonProps) => {
  const { className, onRetrySendOtpCode, endTime, loading } = props;
  const [seconds, { startCountDown }] = useCountDown({
    countStart: Math.floor((endTime - Date.now()) / 1000),
    enabled: false,
    interval: 1000
  });

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  if (seconds)
    return (
      <Typography tag='p' variant='typography14_regular' className={cls.timer_button_seconds_text}>
        Запросить код повторно можно через {seconds} секунд
      </Typography>
    );

  return (
    <Button
      variant='clear'
      onClick={onRetrySendOtpCode}
      className={classNames(cls.timer_button, {}, [className])}
    >
      <Typography variant='typography16_medium'>
        {loading ? 'Отправка...' : 'Отправить код еще раз'}
      </Typography>
    </Button>
  );
});
