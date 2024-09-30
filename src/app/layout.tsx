import { ReactNode } from 'react'

import Header from '@/components/header'
import "./globals.css"

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
