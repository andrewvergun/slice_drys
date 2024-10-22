import Image from 'next/image'
import Link from 'next/link'

import cartIcon from '/public/icons/bin.svg'
import React from 'react'
import Button from '@/components/ui/button'

export default function Cart() {
  return (
    <div className="relative">
      <Button variant={'icons'}>
        <Image src={cartIcon} alt="cart icon" />
      </Button>
      <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red text-xs text-white">
        1
      </span>
    </div>
  )
}
