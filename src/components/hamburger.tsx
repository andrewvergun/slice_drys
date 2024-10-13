import { useState } from 'react'
import { cn } from '@/utils/cn'

import React from 'react'

type Props = {
  className: string
  setIsScroll: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Hamburger({ className, setIsScroll }: Props) {
  const [opened, setOpened] = useState(false)

  return (
    <div
      onClick={() => setIsScroll(true)}
      className={cn(`tham tham-e-squeeze tham-w-10 lap:tham-w-8`, className, {
        'tham-active': opened,
      })}
    >
      <div className="tham-box">
        <div className="tham-inner" />
      </div>
    </div>
  )
}
