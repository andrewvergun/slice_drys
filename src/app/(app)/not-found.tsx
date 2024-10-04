'use client'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  const changeLanguageHandler = (nextLocal: string) => {
    router.replace(`/${nextLocal}`)
  }

  return (
    <html lang="en">
      <body className='bg-[#f0f0f0] flex items-center justify-center h-screen'>
        <div className='text-center'>
          <h1 className='text-8xl text-[#333] '>404</h1>
          <p className='text-4xl text-[#333]'>
            Oops! The page you are looking for does not exist.
          </p>
          <button
            className='bg-[#333] text-[#fff] py-2 px-4 border-none rounded cursor-pointer'
            onClick={() => changeLanguageHandler('/')}
          >
            Go Back Home
          </button>
        </div>
      </body>
    </html>
  )
}
