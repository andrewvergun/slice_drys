import { useState } from 'react';
import { cn } from '@/utils/cn'

type Props = {
  className: string
  onHandleOpenBurger: any
}

export default function Hamburger({ className, onHandleOpenBurger }: Props) {
  const [opened, setOpened] = useState(false);

  return (
    <div
      onClick={onHandleOpenBurger}
      className={cn(`tham tham-e-squeeze tham-w-10 lap:tham-w-8`, className, { 'tham-active': opened })}>
      <div className="tham-box">
        <div className="tham-inner" />
      </div>
    </div>
  );
}