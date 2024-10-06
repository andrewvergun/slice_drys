'use client'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

type Props = {
  title: string
}

export default function Info({ title }: Props) {
  const infoRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(infoRef.current, { xPercent: -100 }, { xPercent: 0, duration: 1 })
  })

  return (
    <div ref={infoRef} className="absolute z-40 left-0 top-0 h-8 w-full bg-black">
      <h1 className="text-center text-base font-medium leading-[180%] text-white">
        {title}
      </h1>
    </div>
  )
}
