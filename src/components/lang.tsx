'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Lang: FC = () => {
  const path: string = usePathname()

  return (
    <div className="text-sm">
      <Link href="/uk" className={path === '/uk' ? 'text-red' : 'font-normal'}>
        UA
      </Link>

      <span className="text-xl font-semibold">&#8201;/&#8201;</span>

      <Link href="/en" className={path === '/en' ? 'text-red' : 'font-normal'}>
        EN
      </Link>
    </div>
  )
}

export default Lang
