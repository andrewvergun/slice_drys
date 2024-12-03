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

  return (
    <div className="mx-auto max-w-[1280px] px-[20px] pt-9">
      <div
        className={cn(
          'relative w-fit origin-left -rotate-[2.92deg] transform text-[18px] font-bold text-white sm:text-[64px]',
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

      <nav className="relative mt-12 flex w-full justify-around">
        {sliderLinks.map((item, index) => (
          <div
            key={item.name}
            className={cn(
              'absolute bottom-0 h-[200%] translate-y-1/2',
              index === 0 && '-rotate-[50deg]',
              index === 1 && '-rotate-[15deg]',
              index === 2 && 'rotate-[15deg]',
              index === 3 && 'rotate-[50deg]',
            )}
          >
            <Link
              href={item.link}
              className={cn(
                'relative left-1/2 flex size-[180px] -translate-x-1/2 -translate-y-[55%] items-center justify-center rounded-full text-[20px] text-[#9B9B9B] transition-colors duration-300',
              )}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <SliderItem
                index={index}
                item={item}
                hoveredIndex={hoveredIndex}
              />
            </Link>
          </div>
        ))}

        <div className="relative -z-10 mx-auto w-full max-w-[1104px]">
          <Arcs color={hoverHexColor} />

          <div className="absolute -bottom-16 right-1/2 h-2/3 w-1/3 translate-x-1/2">
            <Image
              src={sliders[hoveredIndex].image}
              alt="slider image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </nav>
    </div>
  )
}

const SliderItem = ({
  item,
  index,
  hoveredIndex,
}: {
  index: number
  item: { name: string }
  hoveredIndex: number
}) => {
  const hoverColor = sliders[hoveredIndex].color
  const hoverBlurColor = `${sliders[hoveredIndex].color}4D`

  return (
    <>
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
            fill={hoveredIndex === index ? hoverColor : 'black'}
          >
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              {item.name}
            </textPath>
          </text>
        </svg>
      </div>

      {/* bullet */}
      <div
        className={cn(
          'absolute mt-5 size-2 bg-black',
          hoveredIndex === index && 'size-5',
        )}
        style={hoveredIndex === index ? { background: hoverColor } : {}}
      />

      {/* blur */}
      <div
        style={{ background: hoverBlurColor }}
        className={cn(
          `opacity-1 absolute h-full w-full blur-3xl`,
          hoveredIndex !== index && 'opacity-0',
        )}
      />
    </>
  )
}

const Arcs = ({ color }: { color: string }) => (
  <>
    <svg width="100%" height="100%" viewBox="0 0 1106 553" fill="none">
      <path
        id="arcPath"
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
          <stop offset="0.961123" stopColor={color} />
        </linearGradient>
      </defs>
    </svg>

    <Image
      src="/icons/slider-line-down.svg"
      className="-z-20 mt-[33px] px-[62px]"
      fill={true}
      alt="slider"
    />
  </>
)
