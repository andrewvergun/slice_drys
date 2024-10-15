import Image from 'next/image'
import Link from 'next/link'

import cartIcon from '/public/icons/bin.svg'

export default function CartIcon() {
  return (
    <div className='relative'>
      <Link href="#">
        <Image src={cartIcon} alt="cart icon" />
      </Link>
      <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red text-xs text-white">
        1
      </span>
    </div>
  )
}
