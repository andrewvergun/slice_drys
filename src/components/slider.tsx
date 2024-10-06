'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { cn } from '@/utils/cn'

export const Slider = () => {
  const sliderLinks = [
    { name: 'М’ясо', link: '/products/meat.tsx#product' },
    { name: 'Фрукти', link: '/products/fruits' },
    { name: 'Овочі', link: '/products/vegetables' },
    { name: 'Мікс', link: '/products/mix' },
  ]

  const sliders = [
    { title: "М'ясні сушені, що вражають" },
    { title: 'Фруктові сушені, що вражають' },
    { title: 'Овочеві сушені, що вражають' },
    { title: 'Мікс сушені, що вражають' },
  ]

  const titleRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0)

  const handleMouseEnter = (index: number) => {
    if (index === currentIndex) return

    const tl = gsap.timeline()

    tl.to(titleRef.current, {
      duration: 0.3,
      opacity: 0,
      scaleX: 0.8,
      scaleY: 0.8,
      filter: 'blur(10px)',
      ease: 'power2.in',
      onComplete: () => {
        setCurrentIndex(index)

        gsap.fromTo(
          titleRef.current,
          { opacity: 0, scaleX: 1.2, scaleY: 1.2, filter: 'blur(10px)' },
          {
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            filter: 'blur(0px)',
            duration: 0.2,
            ease: 'power2.out',
          },
        )
      },
    })

    setHoveredIndex(index) // Зберігаємо індекс ховеру
  }

  return (
    <>
      <h1 ref={titleRef} className="text-3xl font-bold">
        {sliders[currentIndex].title}
      </h1>
      <nav className="flex justify-around">
        {sliderLinks.map((item, index) => (
          <Link
            href={item.link}
            key={item.name}
            className="relative flex size-[180px] items-center justify-center rounded-full text-[20px] text-[#9B9B9B] transition-colors duration-300"
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <div
              className={cn(
                'z-20 text-[36px] blur-0 hover:text-[#A90909]',
                hoveredIndex === index && 'text-[#A90909]',
              )}
            >
              {item.name}
            </div>
            <div
              className={cn(
                'opacity-1 absolute h-full w-full bg-red/30 blur-2xl',
                hoveredIndex !== index && 'opacity-0',
              )}
            />
          </Link>
        ))}
      </nav>
      <div className="mx-auto flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1106"
          height="553"
          viewBox="0 0 1106 553"
          fill="none"
        >
          <path
            d="M1105 553C1105 406.601 1046.84 266.197 943.323 162.677C839.803 59.157 699.4 1.00001 553 1C406.601 0.999989 266.197 59.157 162.677 162.677C59.157 266.197 1.00002 406.6 1 553"
            stroke="url(#paint0_linear_158_1319)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_158_1319"
              x1="1078.5"
              y1="527"
              x2="116"
              y2="229.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9B9B9B" stopOpacity="0.1" />
              <stop offset="0.961123" stopColor="#A90909" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  )
}
