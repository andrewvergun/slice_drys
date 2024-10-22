'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const LocaleChange: FC = () => {
  const path: string = usePathname()

  return (
    <div className="text-sm">
      <Link
        href="/uk"
        className={
          path === '/uk'
            ? 'text-red'
            : 'inline-block font-normal duration-300 hover:scale-110'
        }
      >
        UK
      </Link>

      <span className="text-xl font-semibold">&#8201;/&#8201;</span>

      <Link
        href="/en"
        className={
          path === '/en'
            ? 'text-red'
            : 'inline-block font-normal duration-300 hover:scale-110'
        }
      >
        EN
      </Link>
    </div>
  )
}

export default LocaleChange
