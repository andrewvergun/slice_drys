'use client'
import { cn } from '@/utils/cn'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { sliderLinks, sliders } from './consts'

export const Hero = () => {
  const { contextSafe } = useGSAP()

  const titleRef = useRef(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number>(0)

  const handleMouseEnter = contextSafe((index: number) => {
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

    setHoveredIndex(index)
  })

  const hoverHexColor = sliders[hoveredIndex].color
  const hoverTransHexColor = `${hoverHexColor}4D`!

  const SliderText = ({
    item,
    index,
  }: {
    index: number
    item: { name: string }
  }) => (
    <div
      className={cn(
        'z-20 text-[36px] blur-0 hover:text-[#A90909]',
        hoveredIndex === index && 'text-[#A90909]',
      )}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="curve"
            d="M 50,150 A 350,350 0 0,1 250,150"
            fill="transparent"
            stroke="transparent"
          />
        </defs>

        <text
          fontSize={hoveredIndex === index ? 36 : 20}
          fontFamily="Arial"
          letterSpacing="2"
          fill={hoveredIndex === index ? hoverHexColor : 'black'}
        >
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            {item.name}
          </textPath>
        </text>
      </svg>
    </div>
  )

  return (
    <div className="mx-auto max-w-[1280px] px-[20px] pt-9">
      <div
        className={cn(
          'relative w-fit origin-left -rotate-[2.92deg] transform text-[64px] font-bold text-white',
        )}
        ref={titleRef}
      >
        <h1 className="mt-11 bg-black px-9 text-white">
          {sliders[hoveredIndex].title}
        </h1>

        <div
          className="absolute top-0 -z-10 h-full w-full origin-left translate-x-2 translate-y-2 rotate-[0.58deg]"
          style={{ background: hoverHexColor }}
        />
      </div>

      <nav className="mt-[50px] flex justify-around">
        {sliderLinks.map((item, index) => (
          <div key={item.name} className="relative">
            <Link
              href={item.link}
              className={cn(
                'relative z-10 flex size-[180px] items-center justify-center rounded-full text-[20px] text-[#9B9B9B] transition-colors duration-300',
                index === 0 && 'absolute -ml-[12px] mt-[50px] rotate-[-42deg]',
                index === 1 &&
                  'absolute -ml-[102px] -mt-[75px] rotate-[-17deg]',
                index === 2 && 'absolute -mt-[43px] rotate-[26deg]',
                index === 3 &&
                  'absolute -right-[38px] mt-[80px] rotate-[49deg]',
              )}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <SliderText index={index} item={item} />

              <div
                className={cn(
                  'absolute mt-5 size-2 bg-black',
                  hoveredIndex === index && 'size-5 rounded-full',
                )}
                style={
                  hoveredIndex === index ? { background: hoverHexColor } : {}
                }
              />

              <div
                style={{ background: hoverTransHexColor }}
                className={cn(
                  `opacity-1 absolute h-full w-full blur-3xl`,
                  hoveredIndex !== index && 'opacity-0',
                )}
              />
            </Link>
          </div>
        ))}
      </nav>

      <div className="relative mx-auto h-[552px] w-full max-w-[1104px]">
        <svg width="1106" height="553" viewBox="0 0 1106 553" fill="none">
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
              <stop stop-color="#9B9B9B" stop-opacity="0.1" />
              <stop offset="0.961123" stop-color={hoverHexColor} />
            </linearGradient>
          </defs>
        </svg>

        <Image
          src="/icons/slider-line-down.svg"
          className="-z-20 mt-[33px] px-[62px]"
          fill={true}
          alt="slider"
        />

        <Image
          src={sliders[hoveredIndex].image}
          className="absolute -bottom-16 right-1/2 translate-x-1/2"
          width={480}
          height={420}
          alt="slider image"
        />
      </div>
    </div>
  )
}
